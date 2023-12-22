import {createElement, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Server} from "Frontend/generated/endpoints";

function HelloWorldElement() {
    const [content, setContent] = useState("Loading content from server...");
    useState(async () => setContent(await Server.getHello()));
    return createElement("h1", {}, content);
}

//Autogenerated index.html has an element with the id outlet that is intended as an application start point.
createRoot(document.getElementById('outlet')!).render(createElement(HelloWorldElement, {}));
