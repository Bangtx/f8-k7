import { Child } from "@/components";

export default function Parent({name}) {
    console.log('parent', name);
    return (
        <>
            <p>parent</p>
            <Child/>
        </>
    )
}