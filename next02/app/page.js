
// export async function generateMetadata({params}) {
//   // const {id} = params
//   //
//   // const product = products.find(product => product.id == id)
//   const product = {
//     id: 1,
//     name: "Product 1",
//     price: 10
//   }
//   return {
//     title: product.name
//   }
// }


import {revalidateTag} from "next/cache";

export default async function Home() {
    // revalidateTag('update')
    const response = await fetch(
        'http://localhost:3001/products',
        // { next: {revalidate: 20} }
        { next: {tags: ['update']} }
    )
    const products = await response.json()
    // console.log(data)

  return (
    <>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h2>{product.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}
