import React, { Component } from 'react';
import './CustomCss.css'


class CustomCss extends Component {
    render() {
        return (
            <div className="container mx-auto mt-1">
                <article className="bg-gray-500 p-5 shadow-lg ">
                    <p className="header">Responsive</p>
                    <p className="content ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam repellat aperiam illum recusandae! Cupiditate alias laboriosam dolorem esse eos blanditiis?</p>
                <button className="animation-scale">Hover me</button>
                </article>
            </div>
        );
    }
}

export default CustomCss;