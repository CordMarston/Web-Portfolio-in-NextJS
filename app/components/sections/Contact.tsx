"use client";

import { useEffect, useState } from "react";

export default function Contact() {
    const [fullName, setFullName] = useState('');
    const [step, setStep] = useState(0);
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');

    const steps = ['name', 'email', 'message', 'thanks'];

    let question, placeholder;

    const handleButton = () => {
        let nextStep = step + 1;
        let inputField = document.getElementById("formInput") as HTMLInputElement;
        if(steps[step] == 'name') {
            if(inputField.value) {
                setFullName(inputField.value);
                setStep(nextStep);
            }
        } else if(steps[step] == 'email') {
            if(inputField.value) {
                setEmailAddress(inputField.value);
                setStep(nextStep);
            }
        } else if(steps[step] == 'message') {
            if(inputField.value) {
                setMessage(inputField.value);
                setStep(nextStep);
            }
        }
        inputField.value = "";
    }

    const sendEmail = async () => {
        const postEmail = await fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: fullName, email: emailAddress, message: message}),
        });
      
        const data = await postEmail.json();
    }

    switch(steps[step]) {
        case 'name':
            question = 'What is your name?';
            placeholder = 'Type your full name';
            break;
        case 'email':
            question = 'Hey '+fullName+', what is your email address?';
            placeholder = 'hello@example.com';
            break;
        case 'message':
            question = 'What can we talk about?';
            placeholder = 'Type your question or note here :)';
            break;
        case 'thanks':
            // sendEmail();
            break;
    }

    const keyPressed = (e:any) => {
        if(e.key == 'Enter') {
            handleButton();
        }
    }

    useEffect(() => {
        let formInput = document.getElementById('formInput');
        if(formInput) {
            formInput.addEventListener('keyup', keyPressed);
        }
        return () => {
            if(formInput) {
                formInput.removeEventListener('keyup', keyPressed);
            }
        }
    }, []);
    
    return (
        <div className="px-4 md:px-16 lg:px-32 md:my-auto w-full min-h-screen flex" id="contact">
            <div className="my-auto w-full">
                <h2 className="text-3xl font-bold tracking-[-0.1rem] leading-[120%] dark:text-neutral-200 pb-4">Contact</h2>
                <div className="text-2xl bg-neutral-50 dark:bg-neutral-800 rounded p-5 flex justify-center">
                    <div className="w-full md:w-1/2">
                        <h5 className="text-xl font-bold tracking-[-0.1rem] leading-[120%] dark:text-neutral-200 pb-4">{question}</h5>
                        {steps[step] == 'thanks' ? 
                            <div className="bg-emerald-700 text-white p-4 rounded-lg text-center">Thank you for reaching out!</div>
                        : <>
                            {steps[step] != 'message' ? 
                                <input type="text" className="w-full p-5 text-lg border-b-2" placeholder={placeholder} id="formInput"/> 
                            : 
                                <textarea className="w-full p-5 text-lg border-b-2" placeholder={placeholder} id="formInput"></textarea>}
                                <div className="grid justify-items-end">
                                    <button onClick={handleButton} className="my-4 block py-2 px-4 bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">Continue</button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}