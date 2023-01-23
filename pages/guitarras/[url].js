import { useState } from "react"
import Image from "next/image"
import styles from "../../styles/guitarras.module.css"
import Layout from "@/components/layout"
import Link from "next/link"

export default function Producto({guitarra, agregarCarrito, formatoDinero}) {
    const [cantidad, setCantidad] = useState(1)
    const [exito, setExito] = useState(false);
    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

    /*** Muestra un mensaje cuando se agrega un producto al carrito ***/
    const exitoMensaje = (mensaje) => {
        return (
            <Link className= "enlace" href="/carrito">
                <button
                    type="button"
                    className={styles.error}
                >{mensaje}</button>
            </Link>
        );
      }

    /*** Handle del form para enviar los datos al carrito y activar el mensaje***/
    const handleSubmit = e=> {
        e.preventDefault();
        const guitarraSeleccionada = {
          id: guitarra[0].id,
          imagen: imagen.data.attributes.url,
          nombre,
          precio,
          cantidad
        }
        agregarCarrito(guitarraSeleccionada)

        setExito(true)
         setTimeout(()=>{
             setExito(false)
         },5000)
      }
    
  /*** Muestra la publicacion seleccionada desde la pagina de tienda ***/
  return (
    <Layout
        title={`Guitarra ${nombre}`}
    >
        <div className={styles.guitar}>
          <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} className={styles.imag} />
          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>{formatoDinero(precio)}</p>

            <form onSubmit={handleSubmit} className={styles.formulario}>
              <div className={styles.mover}>
                <label htmlFor="cantidad">Cantidad</label>

                <select 
                  onChange={ e=> setCantidad(+e.target.value)}
                  id="cantidad">
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
              </div>

              <input 
                type="submit"
                value="Agregar al carrito"
              />
            </form>

            {/*** Si se agrega un producto, muestra el mensaje ***/}
            { exito && exitoMensaje("Producto agregado al carrito") }
          </div>
          
            <Link className= "enlace" href="/">
                <button
                    type="button"
                    className={styles.btn_eliminar}
                >X</button>
            </Link>
        </div>
    </Layout>
  )
}


/*** Funciones para obtener los datos del producto ***/
export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()
    const paths = data?.map(guitarra =>({
        params: {
            url: guitarra.attributes.url
        }
    }))
    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: { url }}) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data: guitarra } = await respuesta.json()
    return{
        props: {
            guitarra
        }
    }
}