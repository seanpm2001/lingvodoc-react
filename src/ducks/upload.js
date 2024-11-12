import { combineReducers } from "redux";

// Actions
const OPEN_MODAL = "@upload/OPEN_MODAL";
const CLOSE_MODAL = "@upload/CLOSE_MODAL";

export const openUploadModal = (id, title) => ({
  type: OPEN_MODAL,
  payload: {
    id,
    title
  }
});

export const closeUploadModal = () => ({ type: CLOSE_MODAL });

const upload = (state = null, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL:
      return payload;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  upload
});
