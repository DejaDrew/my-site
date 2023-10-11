import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as  useFormStatus} from 'react-dom'

export default function SubmitBtn() {

  const { pending } = useFormStatus();

  return (
    <button type="submit" 
      disabled={pending}
      className='group flex items-center gap-2 rounded-full justify-center h-[3rem] w-[8rem] bg-zinc-700 hoverButton hover:bg-slate-600 text-white outline-none transition-all disabled:scale-100 disabled:bg-opacity-60 '>
        {
          pending ? <div className='w-5 h-5 animate-spin rounded-full border-b-2 border-white'></div> : (
            <>
              Submit <FaPaperPlane className='text-xs opacity-70  transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ' />
            </>
          )
        }
        
    </button>
  )
}
