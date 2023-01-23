import Image from "next/image"
import Layout from "@/components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
        title={"Nosotros"}
        description={"Sobre nosotros, guitarras"}
    >
    <main className="contenedor">
      <h1 className="heading">Nosotros</h1>

      <div className={styles.contenido}>
        <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />

        <div>
          <p>Sed venenatis fermentum tempor. Ut ipsum magna, luctus id nunc eget, egestas consequat ante. Quisque vitae semper tortor, varius malesuada enim. In pretium pharetra lorem in porta. Vivamus ac elementum leo, nec pellentesque nunc. Fusce vehicula malesuada massa quis sagittis. Aliquam erat volutpat.</p>

          <p>Sed venenatis fermentum tempor. Ut ipsum magna, luctus id nunc eget, egestas consequat ante. Quisque vitae semper tortor, varius malesuada enim. In pretium pharetra lorem in porta. Vivamus ac elementum leo, nec pellentesque nunc. Fusce vehicula malesuada massa quis sagittis. Aliquam erat volutpat.</p>
        </div>
      </div>
    </main>
    </Layout>
  )
}
