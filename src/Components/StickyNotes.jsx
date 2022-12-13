import React from "react";
import Note from "./Note";

export default function StickyNotes(){
    
    const noteData =[
        {
            title:' Title 1',
            content:'Text Content-1#'
        },
        {
            title:' Title 2',
            content:'Text Content-2#'
        },
        {
            title:' Title 3',
            content:'Text Content-3#'
        },
        {
            title:' Title 4',
            content:'Text Content-4#'
        },
        {
            title:' Title 5',
            content:'Text Content-5#'
        }
    ]
    const notes = noteData.map( (note,index) => <Note key={index} title={note.title} content={note.content}/>)
    // console.log(notes)

    return ( 
    <ul>
        {notes}
    </ul>
    )
}