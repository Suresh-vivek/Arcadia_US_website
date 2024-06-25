import { transporter } from "@/lib/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const response = await req.json();
    const { firstname, lastname, email, message, helpTopic } = response;
    await transporter.sendMail({
      from: email,
      to: 'nikhiljha28900@gmail.com',
      subject: `New message from ${firstname} ${lastname} regarding ${helpTopic}`,
      text: message,
    });
    console.log(firstname, lastname, email, message, helpTopic);
    return new NextResponse("POST request successful");
  } catch (error) {
    console.log(error);
    //@ts-ignore
    return new NextResponse("POST request failed", error);
  }
}
