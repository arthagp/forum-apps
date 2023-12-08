import React, { useState } from 'react';
import useInput from '../hooks/useInput'

const InputComment = ({ comment }) => {
    const [content, onContentChange, setContent] = useInput('');

    const toComment = () => {
        if (content.trim()) {
            comment(content);
            setContent('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        toComment();
    };

    return (
        <form className="container-input" onSubmit={handleSubmit}>
            <textarea
                type="text"
                className="input__field"
                rows="7"
                value={content}
                onChange={onContentChange}
            />
            <button type="button" onClick={toComment}>
                Kirim
            </button>
        </form>
    );
};

export default InputComment;
