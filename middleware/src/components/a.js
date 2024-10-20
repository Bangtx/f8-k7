import Image from 'next/image'

export default function () {
    return (
        <Image src={'/customer_quote.png'} alt={'test'} width={100}  height={100}/>
    )
}