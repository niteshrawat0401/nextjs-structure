import { useRouter } from "next/router"

export default function ProductsDetails() {
    const { query }= useRouter();
    return (<div>product details of id: {query.id}</div>
    )
  }