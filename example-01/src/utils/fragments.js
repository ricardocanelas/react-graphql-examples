import gql from 'graphql-tag'

export const REPOSITORY_FRAGMENT = gql`
    fragment repository_fragment on Repository {
        id
        name
        url
        descriptionHTML
        primaryLanguage {
            name
        }
        owner {
            login
            url
        }
        stargazers {
            totalCount
        }
        viewerHasStarred
        watchers {
            totalCount
        }
        viewerSubscription
    }
`
