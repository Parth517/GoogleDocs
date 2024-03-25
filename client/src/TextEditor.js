import React, { useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"
import { useCallback,useEffect } from "react";
import io from 'socket.io-client'
export default function TextEditor(){
    const [socket,setSocket]=useState();
    const [quill,setQuill]=useState();
    useEffect(()=>{
        const s=io("http://localhost:3001")
        setSocket(s)
        return ()=>{
            s.disconnect();
        }
    },[])

    const ToolBar_Options=[
        [{header:[1,2,3,4,5,6, false]}],
        [{font: []}],
        [{list:"ordered"},{list:"bullet"}],
        ["bold","italic", "underline"],
        [{color:[]},{background:[]}],
        [{script:"sub"},{script:"super"}],
        [{align: []}],
        ["image","blockquote","code-block"],
        ["clean"]
    ]
    const wrapperRef=useCallback((wrapper)=>{
        if(wrapper==null)return
        wrapper.innerHTML="";
        const editor=document.createElement('div')
        wrapper.append(editor)
        const q=new Quill(editor,{ theme:"snow",modules: {toolbar:ToolBar_Options} })
        setQuill(q);
    },[])

    useEffect(()=>{
        quill.on('text-change',(delta,oldDelta,source)=>{
            if(source!=='user'){
                
            }
        })
    })

    return  <div className="container" ref={wrapperRef}></div>
    
}