import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
   try {
      const sql = neon(`${process.env.EXPO_PUBLIC_DB_URL}`);
      const { name, email, clerkId } = await request.json();

      if (!name || !email || !clerkId) {
         return Response.json({ error: 'Missing required fields' }, { status: 400 });
      }

      const response = await sql`
        INSERT INTO users (
          name, 
          email, 
          clerk_id
        ) 
        VALUES (
          ${name}, 
          ${email},
          ${clerkId}
       );`;

      return new Response(JSON.stringify({ data: response }), {
         status: 201,
      });
   } catch (error) {
      console.error('Error creating user:', error);
      return Response.json({ error: 'Internal Server Error' }, { status: 500 });
   }
}

// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     email VARCHAR(100) UNIQUE NOT NULL,
//     clerk_id VARCHAR(50) UNIQUE NOT NULL
// );
