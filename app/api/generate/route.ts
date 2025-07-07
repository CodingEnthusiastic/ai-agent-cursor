import { type NextRequest, NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI({ apiKey: "AIzaSyAaZooWxlIEf6-_nI61YZyKDMHsn6lj4Nk" });

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    // Generate website based on prompt
    // const websiteData = generateWebsiteFromPrompt(prompt)
    let websiteData;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent([
    {
      role: "user",
      parts: [
        {
          text: `Generate a website from this prompt: "${prompt}". Return a JSON with:
{
  "html": "<!DOCTYPE html> ...",
  "css": "body { ... }",
  "js": "console.log(...)"
}`
        },
      ],
    },
  ]);

  const text = await result.response.text();

  try {
    websiteData = JSON.parse(text);
  } catch (e) {
    console.error("Gemini JSON Parse Error", e);
    return NextResponse.json({ error: "Gemini failed to return valid JSON" }, { status: 500 });
  }
    return NextResponse.json(websiteData)
  } catch (error) {
    console.error("Error generating website:", error)
    return NextResponse.json({ error: "Failed to generate website" }, { status: 500 })
  }
}
