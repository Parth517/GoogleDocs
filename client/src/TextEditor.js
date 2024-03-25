import React from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"
import { useCallback } from "react";
export default function TextEditor(){
  
    
    const wrapperRef=useCallback((wrapper)=>{
        if(wrapper==null)return
        wrapper.innerHTML="";
        const editor=document.createElement('div')
        wrapper.append(editor)
        new Quill(editor,{ theme:"snow" })
    },[])
    return  <div className="container" ref={wrapperRef}></div>
    
}