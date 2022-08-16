import Sidebar from './components/sidebar';
import Body from './components/body';
import Body2 from './components/body2';
import { useState } from 'react';

function App() {
  const [noteData, setNoteData] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const [createdNotes, setCreatedNotes] = useState(0);


  function saveNoteContent(bContent) {
    //console.log('bContent', bContent)
    //console.log(noteData[activeNote - 1].data)
    // WHy is this not working?
    // why is this broken when I use the setNoteData function?

    console.log('act', activeNote);
    console.log('DataPerkele', noteData);
    let newObject = {
      id: activeNote,
      data: {
        title: noteData[activeNote - 1].data.title,
        content: bContent
      }
    }
    console.log('newObj', newObject.id);
    console.log('newObjTitle', newObject.data.title);

    let newArr = [...noteData]; // copying the old datas array
    newArr[activeNote - 1] = newObject; // replace e.target.value with whatever you want to change it to

    setNoteData(newArr);
  }
  //console.log(noteData)

  //console.log('noteData', noteData)


  function activeNote2(note) {
    setActiveNote(parseInt(note));
  }

  function addNote() {
    if (activeNote === null) {
      setActiveNote(1);
    }
    let note = {
      id: createdNotes + 1,
      data: {
        title: "Note " + (createdNotes + 1),
        content: ''
      }
    }
    setCreatedNotes(createdNotes + 1);
    setNoteData([...noteData, note]);
  }

  function deleteNote(e) {
    //console.log('deleteNote', e.target.id)
    let newArr = noteData.filter(note => note.id.toString() !== e.target.id.toString());
    setNoteData(newArr)
    newArr.length ? setActiveNote(newArr[0].id) : setActiveNote(null);
    if (newArr.length === 0) {
      setCreatedNotes(0);
    }
  }


  console.log('actie', activeNote);
  console.log('noteData', noteData);
  return (
    <div className="w-[800px] h-[600px] bg-slate-400  mx-auto my-10 flex">
      <Sidebar
        noteData={noteData}
        activeNote={activeNote2}
        newNote={addNote}
        currentNote={activeNote}  // current note is the note that is currently being edited
        deleteNote={deleteNote}
      />
      {activeNote !== null && noteData.length >= 1 && <Body2
        //bodyText={noteData.length >= 1 ? noteData[activeNote - 1].data.content : null}
        bodyText={noteData.find(note => note.id.toString() === activeNote.toString()).data.content}
        saveData={saveNoteContent}
      />}
    </div>
  );
}

export default App;