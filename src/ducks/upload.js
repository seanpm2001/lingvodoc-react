import { combineReducers } from "redux";

// Actions
const OPEN_MODAL = "@upload/OPEN_MODAL";
const CLOSE_MODAL = "@upload/CLOSE_MODAL";
const UPDATE_MODAL = "@upload/UPDATE_MODAL";

export const openUploadModal = (id, title, uploading, uploadPerspective) => ({
  type: OPEN_MODAL,
  payload: {
    id,
    title,
    uploading,
    uploadPerspective
  }
});

export const updateUploadModal = (uploading) => ({
  type: UPDATE_MODAL,
  payload: { uploading }
});

export const closeUploadModal = () => ({ type: CLOSE_MODAL });

const upload = (state = null, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL:
      return payload;
    case UPDATE_MODAL:
      return { ...state, uploading: payload.uploading };
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  upload
});
