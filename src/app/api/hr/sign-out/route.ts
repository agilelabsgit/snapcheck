import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json(
            {
                message: "Logout successful",
                success: true,
            }
        )
        response.cookies.set("admin_token","",{
            httpOnly:true,
            expires: new Date(0)
        });
        response.cookies.set("internal_token","",{
            httpOnly:true,
            expires: new Date(0)
        });
        response.cookies.set("external_token","",{
            httpOnly:true,
            expires: new Date(0)
        });
        return response;
    } catch (error: any) {
        return NextResponse.json({error:error.message},
            { status: 500});
    }
    
}