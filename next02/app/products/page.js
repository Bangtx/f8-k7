import Link from "next/link";

export default function Products() {
    return (
        <div>
            <p>Products</p>
            <Link href={'/products/detail/2'}>go to detail</Link>
        </div>
    )
}