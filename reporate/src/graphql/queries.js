/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const GET_REPOS = gql`
  query {
    repositories {
      edges {
        node {
          forksCount
          fullName
          id
          language
          openIssuesCount
          ownerAvatarUrl
          ownerName
          ratingAverage
          reviewCount
        }
      }
    }
  }
`;
