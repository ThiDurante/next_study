interface ProductProps {
  params: {
    id: string
  }
}

/* @ts-ignore-error */
export async function generateMetadata({ params }) {
  return {
    title: `Product ${params.id}`,
  }
}

export default function Product({params}: ProductProps) {
  return (
    <div>
      <h1>Product {params.id}</h1>
    </div>
  )
}