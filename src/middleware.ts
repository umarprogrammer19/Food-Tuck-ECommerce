import { getCookie } from 'cookies-next';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    try {
        const accessToken = await getCookie('accessToken', { req });
        if (!accessToken) {
            return NextResponse.redirect(new URL('/LogIn', req.url));
        }
    } catch (error) {
        console.log('Error during token verification:', error);
        return NextResponse.redirect(new URL('/LogIn', req.url));
    }
}

export const config = {
    matcher: ['/Cart'],
};