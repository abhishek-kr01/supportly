'use client'

import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { useRouter } from 'next/navigation'
import axios from 'axios'

function DashboardClient({ ownerId }: { ownerId: string }) {

  const navigate = useRouter()

  const [businessName, setBusinessName] = useState("")
  const [supportEmail, setSupportEmail] = useState("")
  const [knowledge, setKnowledge] = useState("")

  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSettings = async () => {

    const trimmedBusinessName = businessName.trim()
    const trimmedSupportEmail = supportEmail.trim()
    const trimmedKnowledge = knowledge.trim()

    // VALIDATION
    if (
      !trimmedBusinessName ||
      !trimmedSupportEmail ||
      !trimmedKnowledge
    ) {

      alert("Please fill all fields")

      return
    }

    // EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(trimmedSupportEmail)) {

      alert("Please enter a valid support email")

      return
    }

    setLoading(true)

    try {

      const result = await axios.post("/api/settings", {
        ownerId,
        businessName: trimmedBusinessName,
        supportEmail: trimmedSupportEmail,
        knowledge: trimmedKnowledge
      })

      // console.log(result.data)

      setSaved(true)

      setTimeout(() => {
        setSaved(false)
      }, 3000)

    } catch (error) {

      console.log(error)

      alert("Something went wrong")

    } finally {

      setLoading(false)

    }

  }

  useEffect(() => {

    if (ownerId) {

      const handleGetDetails = async () => {

        try {

          const result = await axios.post("/api/settings/get", {
            ownerId
          })

          setBusinessName(result.data.businessName)
          setSupportEmail(result.data.supportEmail)
          setKnowledge(result.data.knowledge)

        } catch (error) {

          console.log(error)

        }
      }

      handleGetDetails()

    }

  }, [ownerId])

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
        className='fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-2xl bg-black/40'
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
                AI Dashboard
              </p>

            </div>

          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate.push("/embed")}
            className='px-5 py-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-zinc-200 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-300 cursor-pointer select-none focus:outline-none'
          >
            Embed ChatBot
          </motion.button>

        </div>

      </motion.div>

      {/* MAIN */}
      <div className='relative flex justify-center px-4 py-16 mt-24'>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='w-full max-w-5xl rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_100px_rgba(255,255,255,0.05)] hover:shadow-[0_0_120px_rgba(255,255,255,0.08)] overflow-hidden transition-all duration-300'
        >

          {/* HEADER */}
          <div className='p-8 sm:p-10 border-b border-white/10'>

            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-zinc-300 mb-6'>

              <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse'></span>

              AI ChatBot Configuration

            </div>

            <h1 className='text-4xl md:text-5xl font-bold tracking-tight leading-tight'>
              Configure Your <br />
              AI ChatBot
            </h1>

            <p className='text-zinc-400 mt-5 text-lg leading-relaxed max-w-2xl'>
              Train your AI support assistant using business details,
              FAQs, delivery information, refund policies, and custom knowledge.
            </p>

          </div>

          {/* FORM */}
          <div className='p-8 sm:p-10 space-y-14'>

            {/* BUSINESS DETAILS */}
            <div>

              <div className='mb-8'>

                <h2 className='text-2xl font-semibold'>
                  Business Information
                </h2>

                <p className='text-zinc-500 mt-2'>
                  Basic information your AI assistant will use while responding.
                </p>

              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                {/* BUSINESS NAME */}
                <div>

                  <label className='block text-sm text-zinc-400 mb-3'>
                    Business Name
                  </label>

                  <input
                    type="text"
                    placeholder='Enter business name'
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className='w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 hover:border-white/20 transition-all duration-300'
                  />

                </div>

                {/* SUPPORT EMAIL */}
                <div>

                  <label className='block text-sm text-zinc-400 mb-3'>
                    Support Email
                  </label>

                  <input
                    type="email"
                    placeholder='Enter support email'
                    value={supportEmail}
                    onChange={(e) => setSupportEmail(e.target.value)}
                    className='w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 hover:border-white/20 transition-all duration-300'
                  />

                </div>

              </div>

            </div>

            {/* KNOWLEDGE BASE */}
            <div>

              <div className='mb-8'>

                <h2 className='text-2xl font-semibold'>
                  Knowledge Base
                </h2>

                <p className='text-zinc-500 mt-2 leading-relaxed'>
                  Add shipping info, return policy, FAQs, support hours,
                  payment methods, and anything your AI should know.
                </p>

              </div>

              <div className='relative'>

                <textarea
                  value={knowledge}
                  onChange={(e) => setKnowledge(e.target.value)}
                  placeholder={`Example:

• Refund policy: 7 days return available
• Delivery time: 3–5 working days
• Cash on Delivery available
• Support hours: 9 AM – 8 PM
• Free shipping above ₹999
• Contact support for damaged products`}
                  className='w-full h-[340px] rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 hover:border-white/20 transition-all duration-300 resize-none leading-relaxed'
                />

                <div className='absolute bottom-5 right-5 text-xs text-zinc-500 select-none'>
                  AI Training Data
                </div>

              </div>

            </div>

            {/* ACTIONS */}
            <div className='flex flex-wrap items-center gap-5'>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                onClick={handleSettings}
                className='px-8 py-4 rounded-2xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-300 disabled:opacity-60 shadow-2xl cursor-pointer select-none focus:outline-none'
              >

                {loading ? "Saving..." : "Save Settings"}

              </motion.button>

              {saved && (

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center gap-2 text-sm font-medium text-green-400'
                >

                  <span className='w-2 h-2 rounded-full bg-green-400'></span>

                  Settings saved successfully

                </motion.div>

              )}

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  )
}

export default DashboardClient