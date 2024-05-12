import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export async function GET() {
    try {
        const response = await fetch("https://www.npmjs.com/package/puppeteer");
        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const result = document.querySelector("._9ba9a726")?.textContent;
        return NextResponse.json({ result }, { status: 200 },);
    } catch (error: any) {
        return NextResponse.json({ message: `Error in getting Data ${error.message}!` }, { status: error.response?.status },);
    }
}