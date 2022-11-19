import {NextResponse, userAgent} from 'next/server'

export function middleware(request) {
    const { browser } = userAgent(request)
    console.log('request.cookies', request.cookies);
    console.log('request.geo', request.geo);
    console.log('userAgent.browser', browser);
    return NextResponse.next()
}

export const config = {
    matcher: '/posts/:post*',
}