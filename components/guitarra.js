import Image from "next/image"
import Link from "next/link"
import styles from "../styles/guitarras.module.css"

export default function Guitarra({guitarra}) {
  const { descripcion, imagen, nombre, precio, url } = guitarra

  const formatoDinero = (cantidad) =>{
    return (typeof cantidad !== 'number' || isNaN(cantidad)) ? ('---') : (cantidad.toLocaleString("en-US",{
      style:"currency",
      currency: "USD"
    }))
  }
  /*** Publicacion de guitarra en la pagina de Tienda ***/
  return (
    <Link className="enlace" href={`/guitarras/${url}`}>
      <div className={styles.publicacion}>
        <div className={styles.guitarra}>
          <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />
          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>{formatoDinero(precio)}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
