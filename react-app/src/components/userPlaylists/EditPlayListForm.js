import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { one_Playlists, add_Playlist } from "../../store/playlists";
import { useHistory, useParams } from "react-router-dom";
// import { Modal } from "../../context/Model";
import PlaylistsEdit from "./EditPlayList";
import Modal from 'react-modal';


const UserPlaylistsEdit = () => {

  const dispatch = useDispatch();
  const { userId, playlistId } = useParams();
  const [edit, setEdit] = useState(false);
  const history = useHistory();

  const playLists = useSelector((state) => state?.playListReducer?.playLists);
  const play = playLists[playlistId];
  const [modalIsOpen, setIsOpen] = useState(false)




  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "var(--sp-dark)",
      borderRadius: "10px"
    },
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <PlaylistsEdit playList={play} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default UserPlaylistsEdit;
