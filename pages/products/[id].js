import { useRouter } from "next/router"

export default function ProductsDetails() {
    const { query }= useRouter();
    return (<div>Products details of id: {query.id}</div>
    )
  }