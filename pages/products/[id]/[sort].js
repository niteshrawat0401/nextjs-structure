import { useRouter } from "next/router"

export default function ProductsDetails() {
    const { query }= useRouter();
    return (<div>product id {query.id} Sorted by id: {query.id}</div>
    )
  }