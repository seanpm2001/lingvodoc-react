import React, { useContext, useState, useMemo } from "react";
import { Button, Dropdown, Icon, Message, Modal } from "semantic-ui-react";
import { gql, useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { filter } from "lodash";
//import { filter, find, some, union, uniq, without } from "lodash";
import PropTypes from "prop-types";
import { queryUsers } from "components/BanModal";
import { useMutation } from "hooks";

import TranslationContext from "Layout/TranslationContext";

// gql to call add_roles_bulk mutation
const computeRolesBulkMutation = gql`
  mutation computeRolesBulk(
    $userId: Int!
    $languageId: LingvodocID!
  ) {
    add_roles_bulk(
      user_id: $userId
      language_id: $languageId
    ) {
      language_count,
      dictionary_count,
      perspective_count
    }
  }
`;

// functional component
const SelectUserModal = ({ language, close }) => {
  // handling gql to add new role by using mutation
  const [addRole, { error: addRoleError, loading: addRoleLoading }] = useMutation(computeRolesBulkMutation);
  const onSelectUser = (user_id) =>
    addRole({
      variables: { user_id, language_id: language.id },
    }).then(
      () => {
        close();
        window.logger.suc(getTranslation("Added roles successfully."));
    });
  // handling gql to query users list
  const { data, error, loading } = useQuery(queryUsers);
  const userOptions = useMemo(
    () =>
      data && data.users &&
      data.users
        .map(u => ({
          key: u.id,
          value: u.id,
          text: `${u.name} (${u.intl_name !== u.login ? `${u.intl_name}, ` : ""}${u.login})`
        }))
        .filter(u => u.value !== 1),
    [data]);
  const getTranslation = useContext(TranslationContext);
  const [ selectedUser, setSelectedUser ] = useState(null);

  if (loading) {
    return (
      <span>
        {getTranslation("Loading user data")}... <Icon name="spinner" loading />
      </span>
    );
  }
  if (error) {
    return (
      <Message negative compact>
        <Message.Header>{getTranslation("User data loading error")}</Message.Header>
        <div style={{ marginTop: "0.25em" }}>
          {getTranslation("Try reloading the page; if the error persists, please contact administrators.")}
        </div>
      </Message>
    );
  }
  if (addRoleLoading) {
    return (
      <span>
        {getTranslation("Adding user roles")}... <Icon name="spinner" loading />
      </span>
    );
  }
  if (addRoleError) {
    return (
      <Message negative compact>
        <Message.Header>{getTranslation("Adding role error")}</Message.Header>
        <div style={{ marginTop: "0.25em" }}>
          {getTranslation("Please contact administrators.")}
        </div>
      </Message>
    );
  }

  return (
    <Modal className="lingvo-modal2" dimmer open size="small" closeIcon onClose={close}>
      <Modal.Header>{getTranslation("Allow permissions")}</Modal.Header>
      <Modal.Content>
        <h4>{getTranslation("Allow permissions")}</h4>
        <Dropdown
          key={selectedUser}
          placeholder={getTranslation("Select user")}
          search
          selection
          options={userOptions}
          selectOnBlur={false}
          value={selectedUser}
          onChange={(e, d) => setSelectedUser(d.value)}
          className="lingvo-roles-dropdown lingvo-roles-dropdown_search"
          icon={<i className="lingvo-icon lingvo-icon_arrow" />}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button content={getTranslation("Add roles")}
                onClick={() => selectedUser && onSelectUser(selectedUser)}
                className="lingvo-button-violet"
        />
        <Button content={getTranslation("Close")} onClick={close} className="lingvo-button-basic-black" />
      </Modal.Actions>
    </Modal>
  );
}

SelectUserModal.propTypes = {
  language: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired
};

export default SelectUserModal;
