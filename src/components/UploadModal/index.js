import React, { useContext } from "react";
import { connect } from "react-redux";
import { Button, Divider, Header, Loader, Message, Modal } from "semantic-ui-react";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { isEqual } from "lodash";
import PropTypes from "prop-types";
import { branch, compose, onlyUpdateForKeys, renderNothing, withProps } from "recompose";
import { bindActionCreators } from "redux";

import { closeUploadModal } from "ducks/upload";
import TranslationContext from "Layout/TranslationContext";

const getUploadDate = gql`
  query getUploadDate($id: LingvodocID!) {
    perspective(id: $id) {
      id
      additional_metadata
    }
  }
`;

const uploadPerspective = gql`
  mutation uploadPerspective($id: LingvodocID!, $debugFlag: Boolean) {
    tsakorpus(perspective_id: $id, debug_flag: $debugFlag) {
      triumph
    }
  }
`;

const Upload = props => {
  const getTranslation = useContext(TranslationContext);

  const { id, title, data, actions, uploadPerspective } = props;
  const { loading, error, perspective: { additional_metadata } } = data;

  if (loading) {
    return (
      <Modal open dimmer size="fullscreen" closeOnDimmerClick={false} closeIcon className="lingvo-modal2">
        <Loader>{`${getTranslation("Loading")}...`}</Loader>
      </Modal>
    );
  } else if (error) {
    return (
      <Modal closeIcon onClose={actions.closeUploadModal} open className="lingvo-modal2">
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          <Message negative compact>
            <Message.Header>{getTranslation("Perspective info loading error")}</Message.Header>
            <div style={{ marginTop: "0.25em" }}>
              {getTranslation("Try reloading the page; if the error persists, please contact administrators.")}
            </div>
          </Message>
        </Modal.Content>
      </Modal>
    );
  }

  return (
    <Modal
      closeIcon
      onClose={actions.closeUploadModal}
      open
      dimmer
      size="fullscreen"
      className="lingvo-modal2"
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <p>
          {getTranslation("Uploaded at")}
          {": "}
          { additional_metadata.uploaded_at
            ? new Date(additional_metadata.uploaded_at * 1e3).toLocaleString()
            : "<never>"
          }
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content={getTranslation("Upload")}
          onClick={uploadPerspective}
          className="lingvo-button-green lingvo-perspective-button"
        />
        <Button
          content={getTranslation("Close")}
          onClick={actions.closeUploadModal}
          className="lingvo-button-basic-black"
        />
      </Modal.Actions>
    </Modal>
  );
};

Upload.propTypes = {
  id: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired
  }).isRequired,
  actions: PropTypes.shape({
    closeUploadModal: PropTypes.func.isRequired
  }).isRequired
};

export default compose(
  connect(
    state => state.upload,
    dispatch => ({ actions: bindActionCreators({ closeUploadModal }, dispatch) })
  ),
  branch(({ upload }) => !upload, renderNothing),
  withProps(({ upload: { id, title } }) => ({ id, title })),
  graphql(uploadPerspective, { name: "uploadPerspective" }),
  graphql(getUploadDate),
  onlyUpdateForKeys(["upload", "data"])
)(Upload);
