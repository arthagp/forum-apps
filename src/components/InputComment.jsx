import React, { useState } from 'react';

const InputComment = ({ comment }) => {
    const [content, setContent] = useState('');

    const toComment = () => {
        if (content.trim()) {
            comment(content);
            setContent('');
        }
    };

    const handleChange = (event) => {
        setContent(event.target.value);
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
                onChange={handleChange}
            />
            <button type="button" onClick={toComment}>
                Kirim
            </button>
        </form>
    );
};

export default InputComment;
