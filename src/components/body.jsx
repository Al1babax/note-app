import bold from '../imgs/format_bold_FILL0_wght400_GRAD0_opsz48.png';
import italic from '../imgs/format_italic_FILL0_wght400_GRAD0_opsz48.png';
import strikethrough from '../imgs/strikethrough_s_FILL0_wght400_GRAD0_opsz48.png';
import link from '../imgs/link.png';
import quotation from '../imgs/quotation-right-mark.png'
import code from '../imgs/programming-code-signs.png'
import image from '../imgs/photo.png'
import list from '../imgs/list.png'
import numberList from '../imgs/format_list_numbered_FILL0_wght400_GRAD0_opsz48.png'
import checkList from '../imgs/checklist_FILL0_wght400_GRAD0_opsz48.png'
import { useState } from 'react';

export default function Body() {
    return (
        <div className="bg-slate-300 h-full w-full grid grid-rows-5">
            <div className="options bg-slate-200 w-full row-span-1">
                <div className="top-options flex bg-blue-300 w-full h-[50%] justify-evenly items-center">
                    <button className='w-10 h-10 hover:border-b-2 hover:border-b-violet-700'>Write</button>
                    <button className='w-14 h-10 hover:border-b-2 hover:border-b-violet-700'>Preview</button>
                    <button className="w-10 h-10 font-extrabold">H</button>
                    <button className='w-6 h-6 mt-1'><img src={bold} alt="" /></button>
                    <button className='w-5 h-5 mt-[2px]'><img src={italic} alt="" /></button>
                    <button className='w-5 h-5 mt-[1px]'><img src={strikethrough} alt="" /></button>
                </div>
                <div className="bottom-options flex bg-red-300 w-full h-[50%] justify-evenly items-center">
                    <button className='w-7 h-7 '><img src={link} alt="" /></button>
                    <button className='w-7 h-7'><img src={quotation} alt="" /></button>
                    <button className='w-8 h-8 '><img src={code} alt="" /></button>
                    <button className='w-8 h-8 '><img src={image} alt="" /></button>
                    <button className='w-9 h-9 '><img src={list} alt="" /></button>
                    <button className='w-10 h-10 '><img src={numberList} alt="" /></button>
                    <button className='w-10 h-10 '><img src={checkList} alt="" /></button>
                </div>
            </div>
            <textarea className="body p-2 resize-none border-solid border-slate-400 border-2 row-span-4" />
        </div>
    )
}