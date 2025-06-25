import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log('Test API GET route called');
  return NextResponse.json({ message: 'Test API is working', timestamp: new Date().toISOString() });
}

export async function POST(request: Request) {
  try {
    console.log('Test API POST route called');
    const body = await request.json();
    console.log('Received body:', body);
    
    return NextResponse.json({
      message: 'Test API POST is working',
      receivedData: body,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in test API:', error);
    return NextResponse.json(
      { error: 'Failed to process test request' },
      { status: 500 }
    );
  }
} 