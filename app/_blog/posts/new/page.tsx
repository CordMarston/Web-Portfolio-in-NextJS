"use client"
import Editor from "@/app/components/lib/text/Quill";
import { FormEvent, useState } from "react";

type Form = {
    content:string,
    title:string
}

export default function PostsNew() {
    const [formContent, setFormContent] = useState<Form>({content: '', title: ''});
    
    const contentChanged = (e:any) => {
        setFormContent({...formContent, content: e})
    }

    const titleChanged = (e:any) => {
        setFormContent({...formContent, title: e.target.value})
    }

    const submitForm = async (e:any) => {
        console.log(formContent);
        e.preventDefault()
 
        const response = await fetch('/api/blog/posts', {
            method: 'POST',
            body: JSON.stringify(formContent),
        })
    
        const data = await response.json()

    }

    return (
        <div className="m-auto w-full md:w-1/2 py-8">
            <h2 className="text-3xl font-bold tracking-[-0.1rem] leading-[120%] dark:text-neutral-200 pb-4">Add New Post</h2>
            <form onSubmit={submitForm}>
                <input type="text" name="title" className="w-full bg-white dark:bg-neutral-800 dark:text-neutral-400 rounded p-2 border mt-4" placeholder="Post Title" onChange={titleChanged}/>
                <div className=" mt-4">
                    <Editor editorChanged={contentChanged}/>
                </div>
                <input type="text" name="tags" className="w-full bg-white dark:bg-neutral-800 dark:text-neutral-400 rounded p-2 border mt-4" placeholder="Post Tags"/>
                <div className="flex justify-end mt-4">
                    <button type="submit" className="py-2 px-4  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                        Post
                    </button>
                </div>
            </form>
        </div>
    )
}