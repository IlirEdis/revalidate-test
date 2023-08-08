import { gql } from "@apollo/client";

export const BLOG_PAGE = gql`
  query {
    blog {
      data {
        attributes {
          blogPageTitle
          seo {
            keywords
            metaTitle
            metaImage {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            metaSocial {
              socialNetwork
              title
              image {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
              description
            }
            metaRobots
            metaViewport
            canonicalURL
            structuredData
            metaDescription
          }
          dynamicBlocks {
            ... on ComponentAtomsSpacer {
              space
            }

            ... on ComponentAtomsTextBlock {
              textColor
              textBlockContent
              fontSize
              fontWeight
            }

            ... on ComponentMoleculesQuoteWithColumns {
              quoteColumns {
                id
                textBlockContent
                fontWeight
                fontSize
                textColor
              }
            }
          }
          blog_posts {
            data {
              id
              attributes {
                Title
                slug
                Excerpt
                updatedAt
                publishedAt
                featuredImage {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                updatedAt
              }
            }
          }
          dynamicBlocks2 {
            ... on ComponentAtomsSpacer {
              space
            }

            ... on ComponentAtomsTextBlock {
              textColor
              textBlockContent
              fontSize
              fontWeight
            }

            ... on ComponentMoleculesQuoteWithColumns {
              quoteColumns {
                id
                textBlockContent
                fontWeight
                fontSize
                textColor
              }
            }
          }
        }
      }
    }
  }
`;

export const ALL_BLOG_POSTS = gql`
  query {
    blogPosts {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

export const SINGLE_BLOG_POST = gql`
  query BlogPost($theSlug: String) {
    blogPosts(filters: { slug: { eq: $theSlug } }) {
      data {
        attributes {
          Title
          Excerpt
          slug
          updatedAt
          publishedAt
          featuredImage {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          seo {
            metaTitle
            metaImage {
              data {
                attributes {
                  url
                  caption
                  alternativeText
                }
              }
            }

            metaDescription
          }
          dynamicBlocks {
            ... on ComponentMoleculesTable {
              table {
                id
                isTableHead
                tableRow {
                  id
                  cellValue
                }
              }
            }
            ... on ComponentAtomsLink {
              href
              title
              linkStyle
              buttonColor
            }
            ... on ComponentAtomsSpacer {
              space
            }
            ... on ComponentMoleculesQuote {
              quote {
                textBlockContent
              }
            }
            ... on ComponentAtomsTextBlock {
              textBlockContent
            }
            ... on ComponentMoleculesColumns {
              columns {
                textBlockContent
              }
            }

            ... on ComponentMoleculesSocialLinks {
              Socials {
                link
                name
              }
            }
            ... on ComponentMoleculesCallToAction {
              callToAction {
                TextColor
                bgGradient {
                  color1
                  color2
                }
                content
                link {
                  href
                  title
                  linkStyle
                  buttonColor
                }

                bgImage {
                  data {
                    attributes {
                      alternativeText
                      caption
                      url
                    }
                  }
                }
              }
            }

            ... on ComponentMoleculesColumnsWithImage {
              columnText {
                textBlockContent
                textColor
                fontWeight
                fontSize
              }
              imageLeft
              imageObjectFit
              columnImage {
                data {
                  attributes {
                    url
                    caption
                    alternativeText
                  }
                }
              }
            }

            ... on ComponentMoleculesQuoteWithColumns {
              quoteColumns {
                textBlockContent
                fontWeight
                fontSize
                textColor
                id
              }
            }
          }
        }
      }
    }
  }
`;
