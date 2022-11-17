import { NextResponse } from 'next/server'

export function middleware(request) {
    if (!request.cookies.authToken) {
        return NextResponse.rewrite(new URL('/login', request.url))
    }
}

export const config = {
    matcher: '/dashboard',
}