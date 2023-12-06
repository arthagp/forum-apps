import React from 'react'

const InputComment = () => {
    return (
        <form class="comment-input">
            <textarea className='comment-input__field' rows="7"></textarea>
            <button type="submit">Kirim</button>
        </form>
    )
}

export default InputComment