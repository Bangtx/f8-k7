import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // const requestHeaders = new Headers(request.headers)
    // requestHeaders.set('yx-hello-from-middleware1', 'hello')
    //
    // // You can also set request headers in NextResponse.rewrite
    // const response = NextResponse.next({
    //     request: {
    //         // New request headers
    //         headers: requestHeaders,
    //     },
    // })
    //
    // // Set a new response header `x-hello-from-middleware2`
    // response.headers.set('yx-hello-from-middleware2', 'hello')
    // return response
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/about/:path*',
}