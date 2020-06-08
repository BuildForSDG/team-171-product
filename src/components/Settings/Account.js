import React, { useState } from 'react';
import { connect } from 'react-redux';
import { uploadImage } from '../../actions';

import EditIcon from '@material-ui/icons/Edit';
import { useFormik } from 'formik';
import Navbar from '../Navbar/Navbar';
import TopNav from '../Navbar/TopNav';

const Account = (props) => {
  const { dispatch } = props;

  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState('');

  const handleImageAsFile = (event) => {
    const image = event.target.files[0];
    setImageUrl({ imageUrl: URL.createObjectURL(image) });
    setImageFile({ imageFile: image });
  };

  const formik = useFormik({
    initialValues: {
      profile: '',
      username: '',
      bio: '',
      gender: ''
    },
    onSubmit: (values) => {
      values.profile = imageFile.imageFile;
      if (values.profile.size > 2097152) {
        alert ("Unable to proceed, File is larger than 2mb");
      }
      if (values.profile.size < 2097152) {
        dispatch(uploadImage(values.profile));
      }
    }
  });
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <TopNav />
        <form onSubmit={formik.handleSubmit}>
          <EditIcon />
          <label htmlFor="profile">Profile picture</label>
          <input id="profile" name="profile" type="file" onChange={handleImageAsFile} accept="image/*" />
          <img src={imageUrl.imageUrl} width="150px" alt="profile" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ user: state.auth.user, data: state.auth.data });

export default connect(mapStateToProps)(Account);
