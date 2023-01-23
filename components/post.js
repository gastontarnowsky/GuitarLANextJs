import Image from "next/image"
import Link from "next/link"
import styles from "../styles/blog.module.css"


export default function Post({post}) {
  const { titulo, contenido, imagen, url} = post
/*** Publicacion de la pagina de Blog ***/
    return (
    <article className={styles.post}>
        <Link href={`/blog/${url}`} className="enlace" >
            <div className={styles.publicacionB}>
                <Image className={styles.imagenB} src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen blog ${titulo}`} />
                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.resumen}>{contenido}</p>  
                </div>
            </div>
        </Link>
    </article>
  )
}
