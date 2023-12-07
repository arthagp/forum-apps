import React from 'react'
import AddInputThread from '../components/AddInputThread'
import { useDispatch } from 'react-redux'
import { asyncCreateThread } from '../states/threads/action'
import { useNavigate } from 'react-router-dom'

const AddThreadPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const onThreadAdd = ({ title, body, category }) => {
        dispatch(asyncCreateThread({ title, body, category }))
        navigate('/')
    }

    return (
        <section className='addThread-container'>
            <div className='addThread'>
                <h3>Buat Diskusi Baru</h3>
                <AddInputThread onThread={onThreadAdd} />
            </div>
        </section>
    )
}

export default AddThreadPage