
// import { MiddleUi } from './MiddleUi';
// import { Card } from './Card';
import { motion } from 'framer-motion';
import './App.css';
// import { useState } from 'react';

function App() {

        let randomRotate = Math.floor(Math.random() * 35);     
        let randomRotate1 = Math.floor(Math.random() * 35);     
        let randomRotate2 = Math.floor(Math.random() * 35);     
        let randomRotate3 = Math.floor(Math.random() * 35);     
        let randomRotate4 = Math.floor(Math.random() * 35);     
        let randomRotate5 = Math.floor(Math.random() * 35);     
        let randomRotate6 = Math.floor(Math.random() * 35);     
        let randomRotate7 = Math.floor(Math.random() * 35);     
        let randomRotate8 = Math.floor(Math.random() * 35);     
        let randomRotate9 = Math.floor(Math.random() * 35);     
        let randomRotate10 = Math.floor(Math.random() * 35);     
        let randomRotate11 = Math.floor(Math.random() * 35);     
        let randomRotate12 = Math.floor(Math.random() * 35);     
        let randomRotate13 = Math.floor(Math.random() * 35);     
        let randomRotate14 = Math.floor(Math.random() * 35);     
        let randomRotate15 = Math.floor(Math.random() * 35);     
        let randomRotate16 = Math.floor(Math.random() * 35);   
        
        
        let randomtranslate = Math.floor(Math.random() * 120);     
        let randomtranslate1 = Math.floor(Math.random() * 120);     
        let randomtranslate2 = Math.floor(Math.random() * 120);     
        let randomtranslate3 = Math.floor(Math.random() * 120);     
        let randomtranslate4 = Math.floor(Math.random() * 120);     
        let randomtranslate5 = Math.floor(Math.random() * 120);     
        let randomtranslate6 = Math.floor(Math.random() * 120);     
        let randomtranslate7 = Math.floor(Math.random() * 120);     
        let randomtranslate8 = Math.floor(Math.random() * 120);     
        let randomtranslate9 = Math.floor(Math.random() * 120);     
        let randomtranslate10 = Math.floor(Math.random() * 120);     
        let randomtranslate11 = Math.floor(Math.random() * 120);     
        let randomtranslate12 = Math.floor(Math.random() * 120);     
        let randomtranslate13 = Math.floor(Math.random() * 120);     
        let randomtranslate14 = Math.floor(Math.random() * 120);     
        let randomtranslate15 = Math.floor(Math.random() * 120);     
        let randomtranslate16 = Math.floor(Math.random() * 120);     

        const dataCards = [
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate, rotate: randomRotate},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate1, rotate: randomRotate1},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate2, rotate: randomRotate2},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate3, rotate: randomRotate3},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate4, rotate: randomRotate4},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate5, rotate: randomRotate5},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate6, rotate: randomRotate6},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate7, rotate: randomRotate7},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate8, rotate: randomRotate8},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate9, rotate: randomRotate9},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate10, rotate: randomRotate10},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate11, rotate: randomRotate11},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate12, rotate: randomRotate12},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate13, rotate: randomRotate13},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate14, rotate: randomRotate14},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate15, rotate: randomRotate15},
                {heading: 'Buy a new car', time:'10:30', card: randomtranslate16, rotate: randomRotate16},
        ]

       const parentVariants = {
                open: {
                        transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.1
                        }
                },
                closed: {
                        transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3
                        }
                }
        }
        const itemVariants = {
                open: {
                        opacity: 1,
                        y: 0,
                        transition: { type: "spring", stiffness: 300, damping: 24 }
                },
                closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
        };

        const topMultipleCards = dataCards.map(each => (
                
                        <motion.div variants={itemVariants} className={`card-${each.card}`}>
                                <motion.div className={`Card active:cursor-grabbing`} drag whileDrag={{scale: 0.95}} dragConstraints={{ left: 0, right: 1500 }} initial={{translateX: each.card * 12, translateY: -30, rotate: each.rotate, originX: 0, originY: 0, originZ: 0 }}>
                                
                                        <div className={`absolute flex w-fit origin-center cursor-grab overflow-hidden rounded-2xl bg-white shadow transition-transform active:scale-98 active:cursor-grabbing dark:bg-gray-800 dark:shadow-feintLg`}>
                                                <div className="flex bg-gradient-to-t py-4 pr-8 pl-3 dark:from-gray-700 dark:to-gray-600 opacity-100 rounded bg-[#404040]">
                                                        <label class="relative z-20 flex cursor-pointer transition-all mt-0.5 self-start" role="presentation">
                                                                <div class="relative flex items-center justify-center transition-colors shadow-checkbox-gray-800 dark:shadow-checkbox-gray-200 rounded" style={{height: '16px', width: '16px'}}>
                                                                        <span class="absolute h-full w-full cursor-pointer border-2 rounded h-[16px] w-[16px]"></span>
                                                                        <div style={{position: 'absolute', border: '0px', clip: 'rect(0px, 0px, 0px, 0px)', clipPath: 'inset(50%)', height: '1px', width: '1px', overflow: 'hidden', padding: '0px', whiteSpace: 'nowrap', overflowWrap: 'normal'}}>
                                                                        <input class="appearance-none" type="checkbox" aria-checked="false" autocomplete="new-password" data-lpignore="true" allow-1password="no" />
                                                                        </div>
                                                                        <div class="flex transition-transform delay-75 scale-0 text-gray-100 dark:text-gray-500">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 13l4 4 8-9"></path></svg>
                                                                        </div>
                                                                </div>
                                                        </label>
                                                        
                                                        <div className="ml-2 -mt-0.5 flex flex-col">
                                                                <p spellcheck="false" contenteditable="true" className="min-w-[80px] cursor-text whitespace-nowrap border-none text-base font-medium outline-none selection:bg-pink-400/10 hover:opacity-80 dark:selection:bg-pink-400/10 text-white">{each.heading}</p>
                                                                <p spellcheck="false" contenteditable="true" className="text-secondary min-w-[80px] cursor-text border-none text-[13px] font-semibold outline-none selection:bg-pink-400/10 hover:opacity-80 dark:selection:bg-pink-400/10">{each.time}</p>
                                                        </div>
                                                </div>
                                        </div>
                                </motion.div>
                        </motion.div>
        ))
        
        const bottomMultipleCards = dataCards.map(each => (
                
                <motion.div variants={itemVariants} className={`card-${each.card}`}>
                        <motion.div className={`Card active:cursor-grabbing`} drag whileDrag={{scale: 0.95}} dragConstraints={{ left: 0, right: 1500 }} initial={{translateX: each.card * 12, translateY: 680, rotate: each.rotate, originX: 0, originY: 0, originZ: 0 }}>
                        
                                <div className={`absolute flex w-fit origin-center cursor-grab overflow-hidden rounded-2xl bg-white shadow transition-transform active:scale-98 active:cursor-grabbing dark:bg-gray-800 dark:shadow-feintLg`}>
                                        <div className="flex bg-gradient-to-t py-4 pr-8 pl-3 dark:from-gray-700 dark:to-gray-600 opacity-100 rounded">
                                                
                                                <label className="relative z-20 flex cursor-pointer transition-all mt-0.5 self-start" role="presentation">
                                                        <div className="relative flex items-center justify-center transition-colors shadow-checkbox-gray-800 dark:shadow-checkbox-gray-200 rounded h-[16px] w-[16px]">
                                                                <span className="absolute h-full w-full cursor-pointer border-2 rounded h-[16px] w-[16px]"></span>
                                                                <div className='absolute border-0 h-[1px] w-[1px] overflow-hidden p-0 whitespace-nowrap break-normal' style={{clip: 'rect(0px, 0px, 0px, 0px)', clipPath: 'inset(50%)'}}>
                                                                        <input className="appearance-none" type="checkbox" aria-checked="false" autocomplete="new-password" data-lpignore="true" allow-1password="no" />
                                                                </div>
                                                                <div className="flex transition-transform delay-75 scale-0 text-gray-100 dark:text-gray-500">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 13l4 4 8-9"></path></svg>
                                                                </div>
                                                        </div>
                                                </label>
                                                
                                                <div className="ml-2 -mt-0.5 flex flex-col">
                                                        <p spellcheck="false" contenteditable="true" className="min-w-[80px] cursor-text whitespace-nowrap border-none text-base font-medium outline-none selection:bg-pink-400/10 hover:opacity-80 dark:selection:bg-pink-400/10 text-white">{each.heading}</p>
                                                        <p spellcheck="false" contenteditable="true" className="text-secondary min-w-[80px] cursor-text border-none text-[13px] font-semibold outline-none selection:bg-pink-400/10 hover:opacity-80 dark:selection:bg-pink-400/10">{each.time}</p>
                                                </div>
                                        </div>
                                </div>
                        </motion.div>
                </motion.div>
        ))

        const leftMultipleCards = dataCards.map(each => (
                
                <motion.div variants={itemVariants} className={`card-${each.card}`}>
                        <motion.div className={`Card active:cursor-grabbing`} drag whileDrag={{scale: 0.95}} dragConstraints={{ left: 0, right: 1500 }} initial={{translateX: 0, translateY: each.card * 8, rotate: each.rotate, originX: 0, originY: 0, originZ: 0 }}>
                        
                                <div className={`absolute flex w-fit origin-center cursor-grab overflow-hidden rounded-2xl bg-white shadow transition-transform active:scale-98 active:cursor-grabbing dark:bg-gray-800 dark:shadow-feintLg`}>
                                        <div className="flex bg-gradient-to-t py-4 pr-8 pl-3 dark:from-gray-700 dark:to-gray-600 opacity-100 rounded">
                                                
                                                <label className="relative z-20 flex cursor-pointer transition-all mt-0.5 self-start" role="presentation">
                                                        <div className="relative flex items-center justify-center transition-colors shadow-checkbox-gray-800 dark:shadow-checkbox-gray-200 rounded h-[16px] w-[16px]">
                                                                <span className="absolute h-full w-full cursor-pointer  border-2 rounded h-[16px] w-[16px]"></span>
                                                                <div className='absolute border-0 h-[1px] w-[1px] overflow-hidden p-0 whitespace-nowrap break-normal' style={{clip: 'rect(0px, 0px, 0px, 0px)', clipPath: 'inset(50%)'}}>
                                                                        <input className="appearance-none" type="checkbox" aria-checked="false" autocomplete="new-password" data-lpignore="true" allow-1password="no" />
                                                                </div>
                                                                <div className="flex transition-transform delay-75 scale-0 text-gray-100 dark:text-gray-500">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 13l4 4 8-9"></path></svg>
                                                                </div>
                                                        </div>
                                                </label>
                                                
                                                <div className="ml-2 -mt-0.5 flex flex-col">
                                                        <p spellcheck="false" contenteditable="true" className="min-w-[80px] cursor-text whitespace-nowrap border-none text-base font-medium outline-none selection:bg-pink-400/10 hover:opacity-80 dark:selection:bg-pink-400/10 text-white">{each.heading}</p>
                                                        <p spellcheck="false" contenteditable="true" className="text-secondary min-w-[80px] cursor-text border-none text-[13px] font-semibold outline-none selection:bg-pink-400/10 hover:opacity-80 dark:selection:bg-pink-400/10">{each.time}</p>
                                                </div>
                                        </div>
                                </div>
                        </motion.div>
                </motion.div>
        ))

        const rightMultipleCards = dataCards.map(each => (
                
                <motion.div variants={itemVariants} className={`card-${each.card}`}>
                        <motion.div className={`Card active:cursor-grabbing`} drag whileDrag={{scale: 0.95}} dragConstraints={{ left: 0, right: 1500 }} initial={{translateX: 1450, translateY: each.card * 8, rotate: each.rotate, originX: 0, originY: 0, originZ: 0 }}>
                        
                                <div className={`absolute flex w-fit origin-center cursor-grab overflow-hidden rounded-2xl bg-white shadow transition-transform active:scale-98 active:cursor-grabbing dark:bg-gray-800 dark:shadow-feintLg`}>
                                        <div className="flex bg-gradient-to-t py-4 pr-8 pl-3 dark:from-gray-700 dark:to-gray-600 opacity-100 rounded">
                                                
                                                <label className="relative z-20 flex cursor-pointer transition-all mt-0.5 self-start" role="presentation">
                                                        <div className="relative flex items-center justify-center transition-colors shadow-checkbox-gray-800 dark:shadow-checkbox-gray-200 rounded h-[16px] w-[16px]">
                                                                <span className="absolute h-full w-full cursor-pointer border-2 rounded h-[16px] w-[16px]"></span>
                                                                <div className='absolute border-0 h-[1px] w-[1px] overflow-hidden p-0 whitespace-nowrap break-normal' style={{clip: 'rect(0px, 0px, 0px, 0px)', clipPath: 'inset(50%)'}}>
                                                                        <input className="appearance-none" type="checkbox" aria-checked="false" autocomplete="new-password" data-lpignore="true" allow-1password="no" />
                                                                </div>
                                                                <div className="flex transition-transform delay-75 scale-0 text-gray-100 dark:text-gray-500">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 13l4 4 8-9"></path></svg>
                                                                </div>
                                                        </div>
                                                </label>
                                                
                                                <div className="ml-2 -mt-0.5 flex flex-col">
                                                        <p spellcheck="false" contenteditable="true" className="min-w-[80px] cursor-text whitespace-nowrap border-none text-base font-medium outline-none selection:bg-pink-400/10 hover:opacity-80 dark:selection:bg-pink-400/10 text-white">{each.heading}</p>
                                                        <p spellcheck="false" contenteditable="true" className="text-secondary min-w-[80px] cursor-text border-none text-[13px] font-semibold outline-none selection:bg-pink-400/10 hover:opacity-80 dark:selection:bg-pink-400/10">{each.time}</p>
                                                </div>
                                        </div>
                                </div>
                        </motion.div>
                </motion.div>
        ))
        


        return (
                <div className="App h-[100vh] overflow-hidden">

                        <motion.div variants={parentVariants} initial="closed" animate="open" className='card_container'>
                                {topMultipleCards}
                        </motion.div>
                        <motion.div  variants={parentVariants} initial="closed" animate="open" className='card_container'>
                                {bottomMultipleCards}
                        </motion.div>
                        <motion.div variants={parentVariants} initial="closed" animate="open" className='card_container'>
                                {leftMultipleCards}
                        </motion.div>
                        <motion.div variants={parentVariants} initial="closed" animate="open" className='card_container'>
                                {rightMultipleCards}
                        </motion.div>

                <div className='flex h-[100vh]'>
                <div className="pointer-events-none relative z-20 m-auto flex w-full max-w-[520px] flex-col">
                        <div className="flex w-full flex-col p-12">
                                <div className="mb-5 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="26" width="80" viewBox="0 0 62 20">
                                                <path fill="#fff" d="M33.421 7.828c1.519 0 2.322 1.025 2.322 2.966v7.575c0 .259.208.468.465.468h2.068a.466.466 0 00.465-.468V9.881c0-1.434-.428-2.656-1.24-3.528-.816-.878-1.959-1.341-3.308-1.341-1.624 0-2.988.616-4.173 1.885l-.043.047-.034-.053c-.784-1.228-2.012-1.879-3.546-1.879-1.516 0-2.753.572-3.68 1.7l-.087.107V5.741a.466.466 0 00-.465-.469h-2.068a.466.466 0 00-.465.469v12.625c0 .259.208.468.465.468h2.068a.466.466 0 00.465-.468v-7.497c0-1.163.471-1.872.865-2.266a2.682 2.682 0 011.872-.778c1.519 0 2.322 1.025 2.322 2.966v7.575c0 .259.208.468.465.468h2.068a.466.466 0 00.465-.468v-7.497c0-1.163.471-1.872.865-2.266a2.682 2.682 0 011.869-.775zm28.533 3.875c0-1.878-.543-3.562-1.526-4.744-1.06-1.275-2.597-1.947-4.442-1.947-1.795 0-3.429.722-4.603 2.035-1.163 1.297-1.802 3.081-1.802 5.022 0 4.153 2.688 7.056 6.535 7.056 2.459 0 4.486-1.213 5.528-3.269a.464.464 0 00-.252-.656l-1.664-.634a.462.462 0 00-.586.246c-.518 1.113-1.615 1.76-3.023 1.76-2.027 0-3.431-1.463-3.664-3.819l-.006-.056h9.043c.257 0 .465-.21.465-.469v-.525zm-9.362-1.25l.015-.062c.456-1.81 1.677-2.85 3.354-2.85 1.773 0 2.939 1.122 2.967 2.859v.05h-6.336zm-35.347 7.75L10.611.553a.466.466 0 00-.434-.303H7.146a.466.466 0 00-.434.303L.078 18.203a.467.467 0 00.434.634h2.176a.465.465 0 00.437-.306l1.187-3.209h8.627l1.206 3.212a.466.466 0 00.434.303h2.229a.47.47 0 00.437-.634zM5.354 12.509l3.242-8.756 3.289 8.756zm35.473-6.765v1.868c0 .26.208.469.465.469h2.294v10.288c0 .259.208.469.465.469h2.068c.257 0 .465-.21.465-.469V5.744a.466.466 0 00-.465-.469h-4.83a.466.466 0 00-.462.469zM43.536.719v2.162c0 .26.208.469.465.469h2.174a.466.466 0 00.465-.469V.719a.466.466 0 00-.465-.469h-2.174a.468.468 0 00-.465.469z"></path>
                                        </svg>
                                </div>

                                <div className="flex">
                                        <p className="text-secondary pointer-events-auto text-4xl font-semibold leading-tight">Joyful and productive collaboration.&nbsp;
                                                <span className="text-primary text-white">All in one<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noopener noreferrer" target="_blank">.</a></span>
                                        </p>
                                </div>
                                
                                <div className="pointer-events-auto mt-6 flex flex-col">
                                        <button type="button" className="bg-white appearance-none scale-100 transition-transform active:scale-[0.98] flex w-full items-center justify-center rounded-xl bg-gray-800 px-10 py-4 text-gray-100 transition-colors duration-150 hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-200" data-testid="login">
                                                <img className="inline w-4 opacity-80" src="/google-icon-light.svg" alt="google icon" />
                                                <span className="ml-2.5 text-base font-semibold" style={{lineBreak: 'anywhere'}}>Continue with Google</span>
                                        </button>
                                        <small className="text-secondary mt-3 w-full text-[11px]">By clicking “Continue with Google”, you acknowledge that you have read and understood, and agree to Amie's 
                                                <a className="hover:text-primary transition-colors" href="https://amie.so/terms" rel="noopener noreferrer" target="_blank">Terms &amp; Conditions</a> 
                                                <a className="hover:text-primary transition-colors" href="https://amie.so/privacy" rel="noopener noreferrer" target="_blank">Privacy Policy</a>.
                                        </small>
                                </div>
                        </div>
                </div>
        </div>


                </div>
        );
}

export default App;
