import Link from "next/link";

export default function ProductDetail({params}) {
    const {id} = params
    return (
        <div>
            <h1>Product Detail: {id}</h1>
            <Link href={'/products/2/type'}>go to types</Link>
        </div>
    )
}