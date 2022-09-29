import './App.css'
import {motion} from 'framer-motion'

export const Card = ({headiing, time}) => {

        return (
                <motion.div className="Card active:cursor-grabbing" drag whileDrag={{scale: 0.95}} dragConstraints={{ left: 0, right: 1500 }}>
                
                <div className="absolute flex w-fit origin-center -translate-x-1/2 -translate-y-1/2 cursor-grab overflow-hidden rounded-2xl bg-white shadow transition-transform active:scale-98 active:cursor-grabbing dark:bg-gray-800 dark:shadow-feintLg">
                        <div className="flex bg-gradient-to-t py-4 pr-8 pl-3 dark:from-gray-700 dark:to-gray-600 opacity-100 rounded">
                                
                                <label className="relative z-20 flex cursor-pointer transition-all mt-0.5 self-start" role="presentation">
                                        <div className="relative flex items-center justify-center transition-colors shadow-checkbox-gray-800 dark:shadow-checkbox-gray-200 rounded h-[16px] w-[16px]">
                                                <span className="absolute h-full w-full cursor-pointer h-[22px] w-[22px]"></span>
                                                <div className='absolute border-0 h-[1px] w-[1px] overflow-hidden p-0 whitespace-nowrap break-normal' style={{clip: 'rect(0px, 0px, 0px, 0px)', clipPath: 'inset(50%)'}}>
                                                        <input className="appearance-none" type="checkbox" aria-checked="false" autocomplete="new-password" data-lpignore="true" allow-1password="no" />
                                                </div>
                                                <div className="flex transition-transform delay-75 scale-0 text-gray-100 dark:text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 13l4 4 8-9"></path></svg>
                                                </div>
                                        </div>
                                </label>
                                
                                
                                <div className="ml-2 -mt-0.5 flex flex-col">
                                        <p spellcheck="false" contenteditable="true" className="min-w-[80px] cursor-text whitespace-nowrap border-none text-base font-medium outline-none selection:bg-pink-400/10 hover:opacity-80 dark:selection:bg-pink-400/10 text-white">{headiing}</p>
                                        <p spellcheck="false" contenteditable="true" className="text-secondary min-w-[80px] cursor-text border-none text-[13px] font-semibold outline-none selection:bg-pink-400/10 hover:opacity-80 dark:selection:bg-pink-400/10">{time}</p>
                                </div>
                        </div>
                        </div>
                </motion.div>
        )
}