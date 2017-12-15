import { gql } from 'react-apollo';

export const connectedQuery = gql`
  query connectedWords($id: LingvodocID!, $fieldId: LingvodocID!, $mode: String!) {
    connected_words(id: $id, field_id: $fieldId, mode: $mode) {
      lexical_entries {
        id
        parent_id
        entities {
          id
          parent_id
          field_id
          link_id
          self_id
          created_at
          locale_id
          content
          published
          accepted
          additional_metadata {
            link_perspective_id
          }
        }
      }
    }
  }
`;

export const connectMutation = gql`
  mutation connectMutation($fieldId: LingvodocID!, $connections: [LingvodocID]!) {
    join_lexical_entry_group(field_id: $fieldId, connections: $connections) {
      triumph
    }
  }
`;

export const disconnectMutation = gql`
  mutation disconnectMutation($lexicalEntryId: LingvodocID!, $fieldId: LingvodocID!) {
    leave_lexical_entry_group(id: $lexicalEntryId, field_id: $fieldId) {
      triumph
    }
  }
`;

export const searchQuery = gql`
  query SearchEtmologyCandidates($searchString: String!, $fieldId: LingvodocID!) {
    basic_search(searchstring: $searchString, search_in_published: true, field_id: $fieldId, can_add_tags: true) {
      lexical_entries {
        id
        parent_id
      }
      entities {
        id
        parent_id
        field_id
        link_id
        self_id
        created_at
        locale_id
        content
        published
        accepted
        additional_metadata {
          link_perspective_id
        }
      }
    }
  }
`;

export const languageTreeSourceQuery = gql`
  query languageTreeSource {
    language_tree {
      id
      parent_id
      translation
      created_at
      translation_gist_id
    }
    dictionaries {
      id
      parent_id
      translation
    }
    perspectives {
      id
      parent_id
      translation
    }
  }
`;
