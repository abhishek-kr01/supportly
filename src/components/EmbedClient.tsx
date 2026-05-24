// 'use client'
// import { navigate } from 'next/dist/client/components/segment-cache/navigation'
// import { useRouter } from 'next/navigation'
// import React, { useState } from 'react'
// import { motion } from "motion/react"
// function EmbedClient({ ownerId }: { ownerId: string }) {
//     const navigate = useRouter()
//     const [copied, setCopied] = useState(false)
//     const embedCode = `<script 
//     src="${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js" 
//     data-owner-id="${ownerId}">
// </script> `
//     const copyCode = () => {
//         navigator.clipboard.writeText(embedCode)
//         setCopied(true)
//         setTimeout(() => setCopied(false), 2000)
//     }
//     return (
//         <div className='min-h-screen bg-zinc-50 text-zinc-900'>
//             <div className='sticky top-0 z-40 bg-white border-b border-zinc-200'>
//                 <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
//                     <div className='text-lg font-semibold cursor-pointer' onClick={() => navigate.push("/")}>Support<span className='text-zinc-400'>AI</span></div>
//                     <button className='px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition' onClick={() => navigate.push("/dashboard")}>Back to Dashboard</button>
//                 </div>
//             </div>

//             <div className='flex justify-center px-4 py-14'>
//                 <motion.div
//                     initial={{ opacity: 0, y: 24 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="w-full max-w-4xl  bg-white rounded-2xl shadow-xl p-10"
//                 >
//                     <h1 className='text-2xl font-semibold mb-2'>Embed ChatBot</h1>
//                     <p>Copy and paste this code before <code>&lt;/body&gt;</code></p>
//                     <div className='relative bg-zinc-900 text-zinc-100 rounded-xl p-5 text-sm font-mono mb-10'>
//                         <pre className='overflow-x-auto'>{embedCode}</pre>
//                         <button className='absolute top-3 right-3 bg-white text-zinc-900 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-200 transition' onClick={copyCode}>
//                             {copied ? "Copied ✓" : "Copy"}
//                         </button>
//                     </div>

//                     <ol className='space-y-3  text-sm text-zinc-600 list-decimal list-inside'>
//                         <li>Copy the embed script</li>
//                         <li>Paste it before the closing body tag</li>
//                         <li>Reload your website</li>
//                     </ol>

//                     <div className='mt-14'>
//                         <h1 className='text-lg font-medium mb-2'>Live Preview</h1>
//                         <p className='text-sm text-zinc-500 mb-6'>This is how the chatbot will appear on your website</p>

//                         <div className='rounded-xl border border-zinc-300 bg-white shadow-md overflow-hidden'>
//                             <div className='flex items-center gap-2 px-4 h-9 bg-zinc-100 border-b border-zinc-200'>
//                                 <span className='w-2.5 h-2.5 rounded-full bg-red-400' />
//                                 <span className='w-2.5 h-2.5 rounded-full bg-yellow-400' />
//                                 <span className='w-2.5 h-2.5 rounded-full bg-green-400' />
//                                 <span className='ml-4 text-xs text-zinc-500'>Your-website.com</span>
//                             </div>
//                             <div className='relative h-64 sm:h-72 p-6 text-zinc-400 text-sm'>

//                                 Your website goes here



//                                 <div className='absolute bottom-24 right-6 w-64 bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden'>
//                                     <div className='bg-black text-white text-xs px-3 py-2 flex justify-between items-center'>
//                                         <span>Customer Support</span>
//                                         <span>╳</span>
//                                     </div>

//                                     <div className='p-3 space-y-2 bg-zinc-50'>
//                                         <div className='bg-zinc-200 text-zinc-800 text-xs px-3 py-2 rounded-lg w-fit'>hi! how can I help you?</div>
//                                         <div className='bg-black text-white text-xs px-3 py-2 rounded-lg ml-auto w-fit'>what is the return policy?</div>
//                                     </div>
//                                 </div>

//                                 <motion.div
//                                     animate={{ y: [0, -8, 0] }}
//                                     transition={{ repeat: Infinity, duration: 3 }}
//                                     className="
//       absolute bottom-6 right-6
//       w-14 h-14 rounded-full
//       bg-black text-white
//       flex items-center justify-center
//       shadow-2xl
//       cursor-pointer
//     "
//                                 >
//                                     🗨️
//                                 </motion.div>



//                             </div>
//                         </div>

//                     </div>




//                 </motion.div>
//             </div>


//         </div>
//     )
// }

// export default EmbedClient




'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { motion } from "motion/react"

function EmbedClient({ ownerId }: { ownerId: string }) {

    const navigate = useRouter()

    const [copied, setCopied] = useState(false)

    const embedCode = `<script 
    src="${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js" 
    data-owner-id="${ownerId}">
</script>`

    const copyCode = () => {

        navigator.clipboard.writeText(embedCode)

        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 2000)

    }

    return (

        <div className='min-h-screen bg-black text-white overflow-x-hidden relative'>

            {/* BACKGROUND */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>

                <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px]' />

                <div className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]' />

                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-zinc-800/40 rounded-full blur-[180px]' />

            </div>

            {/* NAVBAR */}
            <motion.div
                initial={{ y: -70 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className='sticky top-0 z-50 border-b border-white/10 backdrop-blur-2xl bg-black/40'
            >

                <div className='max-w-7xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between'>

                    {/* LOGO */}
                    <div
                        className='flex items-center gap-4 cursor-pointer select-none'
                        onClick={() => navigate.push("/")}
                    >

                        <div className='w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-lg shadow-2xl'>
                            S
                        </div>

                        <div>

                            <h1 className='text-xl font-semibold tracking-tight'>
                                SupportAI
                            </h1>

                            <p className='text-xs text-zinc-400'>
                                Embed Integration
                            </p>

                        </div>

                    </div>

                    {/* BUTTON */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => navigate.push("/dashboard")}
                        className='px-5 py-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-zinc-200 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-300 cursor-pointer select-none focus:outline-none'
                    >
                        Back to Dashboard
                    </motion.button>

                </div>

            </motion.div>

            {/* MAIN */}
            <div className='relative flex justify-center px-4 py-16'>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-full max-w-6xl rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_100px_rgba(255,255,255,0.05)] hover:shadow-[0_0_120px_rgba(255,255,255,0.08)] overflow-hidden transition-all duration-300'
                >

                    {/* HEADER */}
                    <div className='p-8 sm:p-10 border-b border-white/10'>

                        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-zinc-300 mb-6'>

                            <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse'></span>

                            One Step Integration

                        </div>

                        <h1 className='text-4xl md:text-5xl font-bold tracking-tight leading-tight'>
                            Embed Your <br />
                            AI ChatBot
                        </h1>

                        <p className='text-zinc-400 mt-5 text-lg leading-relaxed max-w-2xl'>
                            Copy the script below and paste it into your website
                            before the closing body tag to activate your AI support assistant.
                        </p>

                    </div>

                    {/* CONTENT */}
                    <div className='p-8 sm:p-10 space-y-16'>

                        {/* CODE BLOCK */}
                        <div>

                            <div className='flex items-center justify-between flex-wrap gap-5 mb-6'>

                                <div>

                                    <h2 className='text-2xl font-semibold'>
                                        Embed Script
                                    </h2>

                                    <p className='text-zinc-500 mt-2'>
                                        Add this script to your website
                                    </p>

                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={copyCode}
                                    className='px-5 py-2.5 rounded-2xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-300 shadow-xl cursor-pointer select-none focus:outline-none'
                                >
                                    {copied ? "Copied ✓" : "Copy Code"}
                                </motion.button>

                            </div>

                            {/* CODE CONTAINER */}
                            <div className='relative rounded-[28px] border border-white/10 bg-zinc-950 overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.04)] hover:border-white/20 transition-all duration-300'>

                                {/* TOP BAR */}
                                <div className='flex items-center justify-between px-5 h-14 border-b border-white/10 bg-white/5'>

                                    <div className='flex items-center gap-2 select-none'>

                                        <span className='w-3 h-3 rounded-full bg-red-500'></span>

                                        <span className='w-3 h-3 rounded-full bg-yellow-500'></span>

                                        <span className='w-3 h-3 rounded-full bg-green-500'></span>

                                    </div>

                                    <span className='text-xs text-zinc-500 font-medium'>
                                        embed-script.html
                                    </span>

                                </div>

                                {/* CODE */}
                                <div className='p-6 overflow-x-auto'>

                                    <pre className='text-sm text-zinc-300 leading-relaxed font-mono whitespace-pre-wrap break-all'>
                                        {embedCode}
                                    </pre>

                                </div>

                            </div>

                        </div>

                        {/* STEPS */}
                        <div>

                            <div className='mb-8'>

                                <h2 className='text-2xl font-semibold'>
                                    Setup Instructions
                                </h2>

                                <p className='text-zinc-500 mt-2'>
                                    Complete setup in less than 1 minute
                                </p>

                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                                {[
                                    {
                                        step: "01",
                                        title: "Copy Script",
                                        desc: "Copy the embed code from above."
                                    },
                                    {
                                        step: "02",
                                        title: "Paste Into Website",
                                        desc: "Add the script before the closing body tag."
                                    },
                                    {
                                        step: "03",
                                        title: "Go Live",
                                        desc: "Reload your website and start using AI support."
                                    }
                                ].map((item, index) => (

                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            y: -8,
                                            scale: 1.02
                                        }}
                                        whileTap={{
                                            scale: 0.99
                                        }}
                                        className='rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-7 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 cursor-pointer'
                                    >

                                        <div className='text-5xl font-bold text-white/10 select-none'>
                                            {item.step}
                                        </div>

                                        <h3 className='text-xl font-semibold mt-5'>
                                            {item.title}
                                        </h3>

                                        <p className='text-zinc-400 mt-4 text-sm leading-relaxed'>
                                            {item.desc}
                                        </p>

                                    </motion.div>

                                ))}

                            </div>

                        </div>

                        {/* LIVE PREVIEW */}
                        <div>

                            <div className='mb-8'>

                                <h2 className='text-2xl font-semibold'>
                                    Live Preview
                                </h2>

                                <p className='text-zinc-500 mt-2'>
                                    This is how the chatbot will appear on your website.
                                </p>

                            </div>

                            <div className='rounded-[36px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(255,255,255,0.05)] hover:border-white/20 transition-all duration-300'>

                                {/* BROWSER */}
                                <div className='flex items-center gap-2 px-6 h-14 border-b border-white/10 bg-white/5'>

                                    <span className='w-3 h-3 rounded-full bg-red-500'></span>

                                    <span className='w-3 h-3 rounded-full bg-yellow-500'></span>

                                    <span className='w-3 h-3 rounded-full bg-green-500'></span>

                                    <span className='ml-4 text-xs text-zinc-500'>
                                        your-website.com
                                    </span>

                                </div>

                                {/* WEBSITE */}
                                <div className='relative h-[450px] p-8 bg-gradient-to-br from-zinc-950 to-zinc-900 overflow-hidden'>

                                    {/* FAKE CONTENT */}
                                    <div className='space-y-5 opacity-60'>

                                        <div className='w-48 h-5 rounded-full bg-white/10'></div>

                                        <div className='w-full h-28 rounded-3xl bg-white/5'></div>

                                        <div className='grid grid-cols-3 gap-4'>

                                            <div className='h-32 rounded-3xl bg-white/5'></div>

                                            <div className='h-32 rounded-3xl bg-white/5'></div>

                                            <div className='h-32 rounded-3xl bg-white/5'></div>

                                        </div>

                                    </div>

                                    {/* CHAT WINDOW */}
                                    <div className='absolute bottom-24 right-6 w-[300px] rounded-[28px] overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_0_60px_rgba(0,0,0,0.5)]'>

                                        {/* TOP */}
                                        <div className='bg-white text-black px-5 py-4 flex items-center justify-between text-sm font-semibold'>

                                            <span>
                                                Customer Support
                                            </span>

                                            <span className='text-zinc-500 cursor-pointer select-none'>
                                                ✕
                                            </span>

                                        </div>

                                        {/* CHAT */}
                                        <div className='p-4 bg-zinc-950 space-y-4'>

                                            <div className='bg-white/10 text-zinc-200 text-xs px-4 py-3 rounded-2xl rounded-bl-md w-fit max-w-[85%]'>
                                                Hi 👋 How can I help you today?
                                            </div>

                                            <div className='bg-white text-black text-xs px-4 py-3 rounded-2xl rounded-br-md ml-auto w-fit max-w-[85%] shadow-lg'>
                                                What is the return policy?
                                            </div>

                                            <div className='bg-white/10 text-zinc-200 text-xs px-4 py-3 rounded-2xl rounded-bl-md w-fit max-w-[85%]'>
                                                We offer a 7-day return policy for eligible products.
                                            </div>

                                        </div>

                                    </div>

                                    {/* FLOATING BUTTON */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 3
                                        }}
                                        className='absolute bottom-6 right-6 w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-2xl shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-110 transition-all duration-300 cursor-pointer select-none'
                                    >
                                        🗨️
                                    </motion.div>

                                </div>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </div>

    )
}

export default EmbedClient