// "use client"

// import React, { useEffect, useRef, useState } from 'react'
// import { AnimatePresence, motion } from 'motion/react'
// import axios from 'axios'
// import { useRouter } from 'next/navigation'

// function HomeClient({ email }: { email: string }) {

//     const handleLogin = () => {
//         window.location.href = "/api/auth/login"
//     }

//     const firstLetter = email?.[0]?.toUpperCase() || "";

//     const [open, setOpen] = useState(false);

//     const popupRef = useRef<HTMLDivElement>(null);

//     const handler = (e: MouseEvent) => {

//         if (popupRef.current && !popupRef.current.contains(e.target as Node))

//             setOpen(false)
//     }

//     useEffect(() => {
//         document.addEventListener("mousedown", handler);
//         return () => document.removeEventListener("mousedown", handler)
//     }, [])

//     const navigate = useRouter()
//     const features = [
//         {
//             title: "Plug & Play",
//             desc: "Add the chatbot to your site with a single script tag."
//         },
//         {
//             title: "Admin Controlled",
//             desc: "You control exactly what the AI knows and answers."
//         },
//         {
//             title: "Always Online",
//             desc: "Your customers get instant support 24/7."
//         }
//     ]
//         const handleLogOut = async () => {
//         try {
//             const result = await axios.get("/api/auth/logout")
//             window.location.href = "/"
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     return (
//         <div className='min-h-screen bg-linear-to-br from-white to-zinc-50 text-zinc-900 overflow-x-hidden'>
//             <motion.div
//                 initial={{ y: -50 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className='fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200'
//             >
//                 <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
//                     <div className='text-lg font-semibold tracking-tight'>Supportly</div>
//                     {email ?
//                         <div className='relative' ref={popupRef}>
//                             <button className='w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold hover:scale-105 transition'
//                                 onClick={() => setOpen(!open)}
//                             >
//                                 {firstLetter}
//                             </button>

//                             <AnimatePresence>
//                                 {open && (
//                                     <motion.div
//                                         initial={{ opacity: 0, y: -6 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         exit={{ opacity: 0, y: -6 }}
//                                         className='absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden'>
//                                         <button className='w-full text-left px-4 py-3 text-sm hover:bg-zinc-100' onClick={() => navigate.push("/dashboard")}>Dashboard</button>
//                                         <button className='block px-4 py-3 text-sm text-red-600 hover:bg-zinc-100' onClick={handleLogOut}>Logout</button>
//                                     </motion.div>)}
//                             </AnimatePresence>

//                         </div>
//                         :
//                         <motion.button
//                             className='px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60 flex items-center gap-2'
//                             onClick={handleLogin}
//                         >Login
//                         </motion.button>}

//                 </div>
//             </motion.div >

//             <section className='pt-36 pb-28 px-6'>
//                 <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
//                     <motion.div
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7 }}
//                     >
//                         <h1 className='text-4xl md:text-5xl font-semibold leading-tight'>
//                             AI Customer Support <br />
//                             Built for Modern Websites
//                         </h1>
//                         <p className='mt-6 text-lg text-zinc-600 max-w-xl'>
//                             Add a powerful AI chatbot to your website in minutes.
//                             Let your customers get instant answers using your own business knowledge.
//                         </p>
//                         <div className='mt-10 flex gap-4'>

//                             {email ? <button className=' px-7 py-3 rounded-xl
//                     bg-black text-white font-medium
//                     hover:bg-zinc-800 transition
//                     disabled:opacity-60' onClick={() => navigate.push("/dashboard")}>Go to Dashboard</button> : <button className=' px-7 py-3 rounded-xl
//                     bg-black text-white font-medium
//                     hover:bg-zinc-800 transition
//                     disabled:opacity-60'
//                                 onClick={handleLogin}
//                             >Get Started</button>}

//                             <a href='#feature' className=' px-7 py-3 rounded-xl
//                   border border-zinc-300
//                   text-zinc-700
//                   hover:bg-zinc-100 transition'>Learn More</a>
//                         </div>

//                     </motion.div>
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.7, delay: 0.2 }}
//                         className="relative"
//                     >
//                         <div className='rounded-2xl bg-white shadow-2xl border border-zinc-200 p-6 '>
//                             <div className='text-sm text-zinc-500 mb-3'>Live Chat Preview</div>
//                             <div className='space-y-3'>
//                                 <div className='bg-black text-white rounded-lg px-4 py-2 text-sm ml-auto w-fit '> Do you offer cash on delivery?</div>
//                                 <div className='bg-zinc-100 rounded-lg px-4 py-2 text-sm w-fit '>yes,Cash On Delivery is available.</div>

//                             </div>
//                             <motion.div
//                                 animate={{ y: [0, -12, 0] }}
//                                 transition={{ repeat: Infinity, duration: 3 }}
//                                 className="
//                 absolute -bottom-6 -right-6
//                 w-14 h-14 rounded-full
//                 bg-black text-white
//                 flex items-center justify-center
//                 shadow-xl
//               "
//                             >
//                                 🗨️
//                             </motion.div>
//                         </div>

//                     </motion.div>
//                 </div>
//             </section>
//             <section
//                 id='feature'
//                 className="bg-zinc-50 py-28 px-6 border-t border-zinc-200"
//             >
//                 <div className='max-w-6xl mx-auto'>
//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: false }}
//                         transition={{ duration: 0.5 }}
//                         className='text-3xl font-semibold text-center'
//                     >
//                         Why Businesses Choose SupportAI
//                     </motion.h2>

//                     <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
//                         {features.map((f, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: index * 0.1 }}
//                                 viewport={{ once: false }}
//                                 className="
//                   bg-white rounded-2xl
//                   p-8 shadow-lg
//                   border border-zinc-200
//                 "
//                             >
//                                 <h1 className='text-lg font-medium'>{f.title}</h1>
//                                 <p className='mt-3 text-zinc-600 text-sm'>{f.desc}</p>
//                             </motion.div>
//                         ))}
//                     </div>


//                 </div>
//             </section>

//             <footer className='py-10 text-center text-sm text-zinc-500'>
//                 &copy; {new Date().getFullYear()} SupportAI. All rights reserved.
//             </footer>
//         </div >
//     )
// }

// export default HomeClient


"use client"

import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function HomeClient({ email }: { email: string }) {

    const router = useRouter()

    const [open, setOpen] = useState(false)

    const popupRef = useRef<HTMLDivElement>(null)

    const firstLetter = email?.[0]?.toUpperCase() || "U"

    const features = [
        {
            title: "Plug & Play Setup",
            desc: "Integrate your AI chatbot into any website instantly with just one script tag."
        },
        {
            title: "Train With Your Data",
            desc: "Teach the chatbot using your business FAQs, policies, delivery info, and support details."
        },
        {
            title: "24/7 AI Support",
            desc: "Deliver instant customer support anytime without manual intervention."
        }
    ]

    const handleLogin = () => {
        window.location.href = "/api/auth/login"
    }

    const handleLogout = async () => {
        try {
            await axios.get("/api/auth/logout")
            window.location.href = "/"
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        const handler = (e: MouseEvent) => {

            if (
                popupRef.current &&
                !popupRef.current.contains(e.target as Node)
            ) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }

    }, [])

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
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className='fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-2xl bg-black/40'
            >

                <div className='max-w-7xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between'>

                    {/* LOGO */}
                    <div
                        onClick={() => router.push("/")}
                        className='flex items-center gap-4 cursor-pointer select-none'
                    >

                        <div className='w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-lg shadow-2xl'>
                            S
                        </div>

                        <div>

                            <h1 className='text-xl font-semibold tracking-tight'>
                                SupportAI
                            </h1>

                            <p className='text-xs text-zinc-400'>
                                AI Customer Support Platform
                            </p>

                        </div>

                    </div>

                    {/* RIGHT */}
                    {email ? (

                        <div
                            ref={popupRef}
                            className='relative'
                        >

                            <button
                                onClick={() => setOpen(!open)}
                                className='w-11 h-11 rounded-full bg-white text-black flex items-center justify-center font-semibold shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer select-none focus:outline-none'
                            >
                                {firstLetter}
                            </button>

                            <AnimatePresence>

                                {open && (

                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: -10,
                                            scale: 0.98
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -10,
                                            scale: 0.98
                                        }}
                                        className='absolute right-0 mt-4 w-60 rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/95 backdrop-blur-2xl shadow-[0_0_60px_rgba(255,255,255,0.08)]'
                                    >

                                        <div className='px-5 py-5 border-b border-white/10'>

                                            <p className='text-sm font-medium text-white'>
                                                Signed In
                                            </p>

                                            <p className='text-xs text-zinc-400 mt-1 truncate'>
                                                {email}
                                            </p>

                                        </div>

                                        <button
                                            onClick={() => router.push("/dashboard")}
                                            className='w-full text-left px-5 py-4 text-sm hover:bg-white/10 transition-all duration-300 cursor-pointer'
                                        >
                                            Dashboard
                                        </button>

                                        <button
                                            onClick={handleLogout}
                                            className='w-full text-left px-5 py-4 text-sm text-red-400 hover:bg-red-500/10 transition-all duration-300 cursor-pointer'
                                        >
                                            Logout
                                        </button>

                                    </motion.div>

                                )}

                            </AnimatePresence>

                        </div>

                    ) : (

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={handleLogin}
                            className='px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-300 shadow-2xl cursor-pointer select-none focus:outline-none'
                        >
                            Login
                        </motion.button>

                    )}

                </div>

            </motion.div>

            {/* HERO */}
            <section className='relative pt-40 pb-32 px-5 sm:px-6'>

                <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-zinc-300 mb-8'>

                            <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse'></span>

                            AI Powered Customer Support

                        </div>

                        <h1 className='text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight'>

                            The Future Of <br />

                            <span className='bg-gradient-to-r from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text'>
                                AI Customer Support
                            </span>

                        </h1>

                        <p className='mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed'>

                            Build and deploy your own AI-powered customer support chatbot
                            in minutes using your business knowledge.

                        </p>

                        {/* BUTTONS */}
                        <div className='mt-10 flex flex-wrap gap-4'>

                            {email ? (

                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => router.push("/dashboard")}
                                    className='px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-zinc-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-300 shadow-2xl cursor-pointer select-none focus:outline-none'
                                >
                                    Go To Dashboard
                                </motion.button>

                            ) : (

                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={handleLogin}
                                    className='px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-zinc-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-300 shadow-2xl cursor-pointer select-none focus:outline-none'
                                >
                                    Get Started Free
                                </motion.button>

                            )}

                            <a
                                href='#feature'
                                className='px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-zinc-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer select-none'
                            >
                                Explore Features
                            </a>

                        </div>

                        {/* STATS */}
                        <div className='mt-14 flex flex-wrap gap-10'>

                            <div>

                                <h2 className='text-3xl font-bold'>
                                    24/7
                                </h2>

                                <p className='text-sm text-zinc-500 mt-1'>
                                    AI Availability
                                </p>

                            </div>

                            <div>

                                <h2 className='text-3xl font-bold'>
                                    1 Min
                                </h2>

                                <p className='text-sm text-zinc-500 mt-1'>
                                    Setup Time
                                </p>

                            </div>

                            <div>

                                <h2 className='text-3xl font-bold'>
                                    100%
                                </h2>

                                <p className='text-sm text-zinc-500 mt-1'>
                                    Custom Knowledge
                                </p>

                            </div>

                        </div>

                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.95
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2
                        }}
                        className='relative'
                    >

                        <div className='relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(255,255,255,0.08)] hover:border-white/20 transition-all duration-300'>

                            {/* TOP */}
                            <div className='px-6 py-5 border-b border-white/10 flex items-center justify-between'>

                                <div>

                                    <h2 className='font-semibold text-lg'>
                                        Live AI Chat Preview
                                    </h2>

                                    <p className='text-sm text-zinc-500 mt-1'>
                                        Smart AI support conversations
                                    </p>

                                </div>

                                <div className='flex items-center gap-2 select-none'>

                                    <div className='w-3 h-3 rounded-full bg-red-500'></div>

                                    <div className='w-3 h-3 rounded-full bg-yellow-500'></div>

                                    <div className='w-3 h-3 rounded-full bg-green-500'></div>

                                </div>

                            </div>

                            {/* CHAT */}
                            <div className='p-6 space-y-5 min-h-[380px]'>

                                <div className='flex justify-end'>

                                    <div className='bg-white text-black rounded-3xl rounded-br-md px-5 py-3 text-sm max-w-[80%] shadow-xl'>
                                        Do you offer cash on delivery?
                                    </div>

                                </div>

                                <div className='flex justify-start'>

                                    <div className='bg-zinc-900 border border-white/10 rounded-3xl rounded-bl-md px-5 py-3 text-sm max-w-[80%] text-zinc-300'>
                                        Yes, Cash on Delivery is available for eligible locations.
                                    </div>

                                </div>

                                <div className='flex justify-end'>

                                    <div className='bg-white text-black rounded-3xl rounded-br-md px-5 py-3 text-sm max-w-[80%] shadow-xl'>
                                        How long does shipping take?
                                    </div>

                                </div>

                                <div className='flex justify-start'>

                                    <div className='bg-zinc-900 border border-white/10 rounded-3xl rounded-bl-md px-5 py-3 text-sm max-w-[80%] text-zinc-300'>
                                        Orders are usually delivered within 3–5 business days.
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
                                className='absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-white text-black flex items-center justify-center text-3xl shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-110 transition-all duration-300 cursor-pointer select-none'
                            >
                                🗨️
                            </motion.div>

                        </div>

                    </motion.div>

                </div>

            </section>

            {/* FEATURES */}
            <section
                id='feature'
                className='relative py-32 px-5 sm:px-6 border-t border-white/10'
            >

                <div className='max-w-7xl mx-auto'>

                    <div className='text-center'>

                        <div className='inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-zinc-300 mb-6'>
                            Features
                        </div>

                        <h2 className='text-4xl md:text-6xl font-bold tracking-tight'>
                            Why Businesses Choose SupportAI
                        </h2>

                        <p className='mt-6 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed'>
                            Everything you need to create a modern AI customer support experience.
                        </p>

                    </div>

                    {/* CARDS */}
                    <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-8'>

                        {features.map((f, index) => (

                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02
                                }}
                                whileTap={{
                                    scale: 0.99
                                }}
                                className='group relative rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.04)] hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 cursor-pointer'
                            >

                                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 to-transparent'></div>

                                <div className='relative'>

                                    <div className='w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center text-2xl shadow-xl mb-6'>
                                        ✦
                                    </div>

                                    <h1 className='text-2xl font-semibold tracking-tight'>
                                        {f.title}
                                    </h1>

                                    <p className='mt-4 text-zinc-400 leading-relaxed'>
                                        {f.desc}
                                    </p>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* FOOTER */}
            <footer className='border-t border-white/10 py-10 px-5 sm:px-6'>

                <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>

                    <div>

                        <h2 className='font-semibold text-lg'>
                            SupportAI
                        </h2>

                        <p className='text-sm text-zinc-500 mt-1'>
                            Modern AI customer support platform.
                        </p>

                    </div>

                    <p className='text-sm text-zinc-500'>
                        © {new Date().getFullYear()} SupportAI. All rights reserved.
                    </p>

                </div>

            </footer>

        </div>

    )
}

export default HomeClient