import { useState } from "react";

const Sidebar = (props) => {
    const { noteData, newNote, activeNote, currentNote, deleteNote } = props;
    /* if(Object.keys(noteData).length > 0){
        console.log('noteData', noteData[0].id)
    } */


    function displayNote(event) {
        activeNote(event.target.id);
    }

    function makeNoteArray() {
        const noteArray = [];
        noteData.forEach(note => {
            //console.log('noteDataSideBar', note)
            //console.log('id', note.id)
            //console.log('currentnntoe', currentNote)
            let currentNoteClass = note.id.toString() === currentNote.toString() ? "w-[70%] h-full bg-violet-900 text-left pl-4 text-white" : "w-[70%] h-full bg-violet-500 hover:bg-violet-600 text-left pl-4 text-white";
            noteArray.push(
                <div className="my-2 flex w-full h-[65px]  items-center justify-between">
                    <button key={note.id} id={note.id} onClick={displayNote} className={currentNoteClass}>{note.data.title}</button>
                    <div className="h-full w-[30%] bg-red-400 hover:bg-red-600">
                        <button className="text-white h-full w-full text-5xl pb-2" id={note.id} onClick={(event) => { props.deleteNote(event) }}>-</button>
                    </div>

                </div>
            )
        })
        //console.log('noteArray', noteArray)
        return noteArray;
    }



    return (
        <div className="bg-slate-300 h-[600px] w-[160px] mr-2">
            <div className="upper pb-5 flex font-bold text-3xl py-6 justify-evenly">
                <h1 className="pr-10">Notes</h1>
                <button className="bg-violet-700 w-10 h-10 rounded text-white  pb-[5px]  hover:bg-violet-600" onClick={() => { newNote() }} >+</button>
            </div>
            <div className="lower overflow-auto h-[515px]">
                {makeNoteArray()}
            </div>
        </div>
    )
}


export default Sidebar; 