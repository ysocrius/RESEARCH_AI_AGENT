import { NextResponse } from 'next/server';

/**
 * API route handler for connecting to the Python backend
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Get Python backend URL from environment variables
    // Default to localhost in development
    const backendUrl = process.env.PYTHON_BACKEND_URL || 'http://localhost:5000/api/research';
    
    console.log(`Sending request to Python backend at ${backendUrl}`);
    
    // Forward the request to the Python backend
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Error connecting to Python backend:', error);
    return NextResponse.json(
      { error: 'Failed to connect to research backend' },
      { status: 500 }
    );
  }
} 