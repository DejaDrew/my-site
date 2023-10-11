import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center text-gray-500 p-4">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Andrew Erie. All rights reserved. <br />
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
          Framer Motion, React Email & Resend, Vercel hosting.
        </p>
      </small>
    </footer>
  )
}
