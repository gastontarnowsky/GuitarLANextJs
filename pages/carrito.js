import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/carrito.module.css"


export default function Carrito({carrito, actualizarCantidad, eliminarProducto, formatoDinero}) {
    const [total, setTotal] = useState(0)

    useEffect(()=> {
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
      }, [carrito])

  return (
    <Layout title="Carrito de Compras">
    <main className="contenedor">
        <h1 className="heading">Carrito de compras</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>

            {carrito?.length === 0 ? "Carrito vacio" : (
              carrito?.map( producto => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image width={250} height={480} src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} />
                  </div>

                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <p className={styles.cantidad}>Cantidad: </p>
                    <select
                      value={producto.cantidad}
                      className={styles.select}
                      onChange={e => actualizarCantidad({
                        cantidad: +e.target.value,
                        id: producto.id
                      })}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>

                    <p className={styles.precio}> <span>{formatoDinero(producto.precio)}</span></p>
                    <p className={styles.subtotal}>Subtotal: <span>{formatoDinero(producto.cantidad * producto.precio)}</span></p>
                  </div>

                  <button
                    type="button"
                    className={styles.btn_eliminar}
                    onClick={() => eliminarProducto(producto.id)}
                  >X</button>
                </div>
              ))
            )}
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: {formatoDinero(total)}</p>
          </aside>
        </div>

        
      </main>
      </Layout>
  )
}
