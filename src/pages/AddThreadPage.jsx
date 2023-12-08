import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddInputThread from '../components/AddInputThread';
import { asyncCreateThread } from '../states/threads/action';

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onThreadAdd = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate('/');
  };

  return (
    <section className="addThread-container">
      <div className="addThread">
        <h3>Buat Diskusi Baru</h3>
        <AddInputThread onThread={onThreadAdd} />
      </div>
    </section>
  );
}

export default AddThreadPage;
