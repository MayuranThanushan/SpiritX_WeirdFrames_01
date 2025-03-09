# SpiritX_WeirdFrames_01 🚀

SpiritX_WeirdFrames_01 is a secure authentication system built with **React, TypeScript, and Supabase**. It provides a seamless signup and login experience with strong validation, real-time error handling, and session management.

## 📌 Guidelines

1. **Implement Secure Signup & Login**
   - Unique username enforcement
   - Password strength validation
   - Real-time error handling
   - Protected routes and session management
2. **Follow Best Practices**
   - Clean code structure
   - Proper error handling
   - Scalable authentication system
3. **Ensure Seamless User Experience**
   - Instant feedback on validation errors
   - Smooth navigation and auto-redirects
   - Consistent UI using Tailwind CSS

## 🚀 Getting Started

### 🛠️ Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 💻 Installation

Clone the repository and install dependencies:

```sh
# Clone the repo
git clone https://github.com/MayuranThanushan/SpiritX_WeirdFrames_01.git
cd SpiritX_WeirdFrames_01

# Install dependencies
npm install  # or yarn install
```

### 🚀 Running the Project

Start the development server:

```sh
npm run dev  # or yarn dev
```

The application will be available at `http://localhost:5173/`.

## 🗄️ Database Setup & Configuration

SpiritX_WeirdFrames_01 uses **Supabase** as the authentication and database backend. The Supabase client is initialized in `src/lib/supabase.ts`:

```ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://exylsuhsmfupnpilqwdu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4eWxzdWhzbWZ1cG5waWxxd2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1MTI0ODEsImV4cCI6MjA1NzA4ODQ4MX0.8vK2U3ZWBesmIEyI6-YTRSI7wQmOb-yw-JwdUP58nCU'
);

export function isSupabaseConfigured(): boolean {
  return true; 
}
```

If you want to use environment variables instead of hardcoded credentials, modify `supabase.ts` like this:

```ts
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
```

Then create a `.env` file and add:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Database Schema (For Users Table)

Run the following SQL in your Supabase SQL Editor:

```sql
create table users (
    id uuid primary key default uuid_generate_v4(),
    email text unique not null,
    password_hash text not null,
    created_at timestamp default now()
);
```

### Enable Authentication

- Navigate to **Authentication** in Supabase
- Enable **Email/Password Authentication**

## 🔍 Assumptions Made

- Users must sign up with an email address
- Password validation includes uppercase, lowercase, and special characters
- Users remain logged in until they manually log out
- Sessions are managed using Supabase authentication

## 🌟 Additional Features Implemented

✅ Password Strength Indicator 🔒  
✅ Real-time Validation ⚡  
✅ Auto-Redirect on Successful Signup/Login 🔄  
✅ Protected Routes (Dashboard access only for logged-in users) 🛡️  
✅ Tailwind CSS for a sleek and responsive UI 🎨  

## 🤝 Contribution Guidelines

If you’d like to contribute:

1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Open a pull request

---

💡 **Need Help?** Contact me at [your-email@example.com](mailto:your-email@example.com) or open an issue on GitHub!
