import RegisterForm from '@/components/register-form/RegisterForm'
import SignUpSideNote from '@/components/register-form/SignUpSideNote'
import React from 'react'

export default function RegisterPage() {
  return (
    <section className='min-h-screen bg-stone-950 text-neutral-50'>
      {/* flex container */}
      <div className='flex'>
        {/* write up */}
        <SignUpSideNote/>
        {/* form */}
        <RegisterForm/>
      </div>
    </section>
  )
}
