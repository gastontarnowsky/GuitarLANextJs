import Layout from "@/components/layout"
import Image from "next/image"
import styles from "../../styles/blog.module.css"

export default function Posturl({posts}) {
  const { titulo, contenido, imagen } = posts[0].attributes
  console.log(posts)
  /*** Muestra la publicacion seleccionada desde la pagina de blog ***/
  return (
    <Layout
      title={titulo}
    >
      <article className={`${styles.post} ${styles["mt-3"]}`}>
          <div className={styles.publi}>
              <Image className={styles.imagenB} src={imagen.data.attributes.url} width={1000} height={600} alt={`Imagen blog ${titulo}`} />
              <div className={styles.contenido}>
                  <h3>{titulo}</h3>
                  <p className={styles.texto}>{contenido}</p>  
              </div>
          </div>
      </article>
    </Layout>
  )
}

/*** Funciones para obtener los datos del blog ***/
export async function getStaticPaths(){
  const respuesta = await fetch(`${process.env.API_URL}/posts`)
  const { data } = await respuesta.json()

  const paths = data?.map(posts =>({
      params: {
          url: posts.attributes.url
      }
  }))
  return{
      paths,
      fallback: false
  }
}

export async function getStaticProps({params: { url }}) {
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
  const { data: posts } = await respuesta.json()
  console.log(posts)
  return{
      props: {
          posts
      }
  }
}
