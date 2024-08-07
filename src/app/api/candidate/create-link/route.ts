import dbConnect from "@/lib/dbConnect";
import candidateModel from "@/model/Candidate";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const { plan, email } = await request.json();

    // Find the user by email
    const user = await candidateModel.findOne({ email });

    // If user not found, return error
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404, 
        }
      );
    }
    const secret= user.firstName+process.env.TOKEN_SECRET;
    const token = await jwt.sign({email:user.email,id:user._id}, secret,{ expiresIn : '1d'});
    const link=`${process.env.DOMAIN}/candidate/${plan}?userId=${user._id}&token=${token}`

    const response = NextResponse.json(
      {
        success: true,
        message: "User found",
        link: link,
      },
      {
        status: 200,
      }
    );

    return response;
  } catch (error) {
    console.error("Error Finding the user", error);
    return Response.json(
      {
        success: false,
        message: "Error finding the user",
      },
      {
        status: 500,
      }
    );
  }
}
