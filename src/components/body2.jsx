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

export default function Body2(props) {

    /* const [text, setText] = useState(''); */
    const [write, setWrite] = useState(true);


    const saveData = props.saveData;
    const topButtons = [
        "Write",
        "Preview",
        "H",
        bold,
        italic,
        strikethrough,

    ];

    const botButtons = [
        link,
        quotation,
        code,
        image,
        list,
        numberList,
        checkList
    ];


    const handleClick = (event) => {
        console.log('handleClikc', event.target.name);
        if (event.target.name === "Write" || event.target.name == "Preview") {
            setWrite(event.target.name === "Write" ? true : false);
        }


    }


    function activeMode(x) {
        let modeHighlight = (write && x === 'Write') ? 'w-[100px] h-full border-b-4 border-b-violet-700 flex items-center' : 'w-[100px] h-full hover:border-b-4 hover:border-b-violet-700 flex items-center'
        if (write && x === 'Write') {
            modeHighlight = 'w-[100px] h-full border-b-4 border-b-violet-700 flex items-center'
        } else if (!write && x === 'Preview') {
            modeHighlight = 'w-[100px] h-full  border-b-4 border-b-violet-700 flex items-center'
        }
        return modeHighlight;
    }


    let ids = 1

    function makeButtonArray(buttonArray) {
        const topButtonArray = buttonArray.map((x) => {
            ids++;
            let modeHighlight = activeMode(x)

            if (x.length <= 10) {
                return (<div key={ids + 1} className={modeHighlight}>
                    <button name={x} className='text-center w-full h-full text-[20px]' onClick={handleClick}>{x}</button>
                </div>)
            } else {
                return (<div key={ids + 1} className='w-[100px] h-full hover:border-b-4 hover:border-b-violet-700 flex items-center pl-8 pt-1'>
                    <button className='w-10 h-10' onClick={handleClick}><img src={x} alt="" /></button>
                </div>)
            }

        });

        return topButtonArray;
    }


    function saveText(event) {
        /* setText(event.target.value); */
        saveData(event.target.value)
    }



    return (
        <div className="bg-slate-300 h-full w-full grid grid-rows-5">
            <div className="options bg-slate-200 w-full row-span-1 border-solid border-slate-400 border-2">
                <div className="top-options flex bg-blue-300 w-full h-[50%] justify-start items-center">
                    {makeButtonArray(topButtons)}
                </div>
                <div className="bottom-options flex bg-red-300 w-full h-[50%] justify-evenly items-center">
                    {makeButtonArray(botButtons)}
                </div>
            </div>
            <textarea className="body p-2 resize-none border-solid border-slate-400 border-2 row-span-4" value={props.bodyText} readOnly={!write} onChange={saveText} />
        </div>
    )
}