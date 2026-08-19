export function GET(request) {
  console.log('request', request)
  
  return new Response('Hello!');
}

export function POST(request) {}
