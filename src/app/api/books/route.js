import { NextResponse } from "next/server";
import booksData from '/public/books.json'

export async function GET() {
  return NextResponse.json(booksData.books)
}