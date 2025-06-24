import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'quotes.json');

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    let quotes = [];
    try {
      const file = await fs.readFile(DATA_FILE, 'utf-8');
      quotes = JSON.parse(file);
    } catch {
      quotes = [];
    }
    quotes.push({ ...data, createdAt: new Date().toISOString() });
    await fs.writeFile(DATA_FILE, JSON.stringify(quotes, null, 2));
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Failed to save quote' }, { status: 500 });
  }
} 