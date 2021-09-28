import { getFirestore } from '../firebase/config'
import Swal from 'sweetalert2'
import firebase from "firebase/app";
import 'firebase/firestore'
import '../components/Checkout/Checkout.css'

export const generarOrden =  (buyer, carrito, total) => {

    return new Promise( async (resolve, reject) => {
        const db = getFirestore()
        const orders = db.collection('orders')
        //genero la orden a enviar
        const newOrder = {
            buyer: buyer,
            items: carrito,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        //creo batch de actualizacion para firebase
        const itemsToUpdate = db.collection('productos')
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(prod => prod.id))
        
        const batch = db.batch()
        const query = await itemsToUpdate.get()

        const outOfStock = []

        query.docs.forEach((doc) => {
            const itemInCart = carrito.find(el => el.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad ) {
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.cantidad })
            } else {
                outOfStock.push({id: doc.id, ...doc.data()})
            }
        })

        //commit del batch si hay stock disponible
        if (outOfStock.length === 0) {
            orders.add(newOrder)
                .then((res) => {
                    batch.commit()
                    resolve(res.id)
                })
                .catch((err) => {
                    reject(err)
                })
        } else {
            reject({
                
                error: Swal.fire({
                    icon: 'error',
                    title: 'Nos quedamos sin Stock',
                }),
                sinStock: outOfStock
            })
        }
    })

}