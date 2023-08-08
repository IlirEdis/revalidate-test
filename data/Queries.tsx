import { gql } from "@apollo/client";

export const INFO_BANNER = gql`
  query {
    infoBanner {
      data {
        attributes {
          style
          activated
          bannerContent
        }
      }
    }
  }
`;

export const SINGLE_LOCATION_DATA = gql`
  query Loaction($TheSlug: String) {
    serverLocations(filters: { Slug: { eq: $TheSlug } }) {
      data {
        id
        attributes {
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
          Country
          City
          Slug
          titleInPage
          Latitude
          Longitude
          Cover {
            data {
              attributes {
                url
                caption
                alternativeText
              }
            }
          }
          dynamic {
            ... on ComponentMoleculesFeatures {
              features {
                data {
                  attributes {
                    featureSectionTitle
                    feature {
                      id
                      featureText
                    }
                  }
                }
              }
            }
            ... on ComponentMoleculesFaqHolder {
              sectionTitle
              faq {
                id
                faqTitle
                faqContent
              }
            }
            ... on ComponentAtomsTextBlock {
              textBlockContent
              fontSize
              fontWeight
              textColor
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
            ... on ComponentMoleculesPricingTable {
              id
              plan {
                PlanUrl
                PlanName
                Price
                RAM
                SSD
                vCPU
                Traffic
                Uplink
              }
            }

            ... on ComponentMoleculesSpeedTestHolder {
              speedTest {
                IPv4
                IPv6
                hundredMB
                thousandMB
                countryIso
                locationAddress
              }
            }
            ... on ComponentMoleculesCallToAction {
              callToAction {
                content
                TextColor
                bgGradient {
                  color1
                  color2
                }
                link {
                  href
                  title
                  linkStyle
                  buttonColor
                }
                bgImage {
                  data {
                    attributes {
                      url
                      caption
                      alternativeText
                    }
                  }
                }
              }
            }
            ... on ComponentMoleculesQuote {
              quote {
                textBlockContent
              }
            }
            ... on ComponentMoleculesColumns {
              columns {
                id
                textBlockContent
                fontSize
                fontWeight
                textColor
              }
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

export const SERVER_LOCATIONS = gql`
  query {
    serverLocations(sort: ["Country", "City"]) {
      data {
        id
        attributes {
          Country
          City
          Slug
          countryIsoCode
          continent {
            data {
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;

export const CONTINENTS_WITH_LOCATIONS = gql`
  query {
    continents {
      data {
        id
        attributes {
          Name
          server_locations1(sort: ["Country", "City"]) {
            data {
              id
              attributes {
                Country
                City
                Slug
                dynamic {
                  __typename
                  ... on ComponentMoleculesPricingTable {
                    plan {
                      id
                      PlanName
                      PlanUrl
                      Price
                      RAM
                      SSD
                      vCPU
                      Traffic
                      Uplink
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const CONTACT_PAGE = gql`
  query {
    contact {
      data {
        attributes {
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
          dynamicContent {
            ... on ComponentMoleculesSocialLinks {
              Socials {
                id
                name
                link
              }
            }
            ... on ComponentAtomsSpacer {
              space
            }
            ... on ComponentAtomsTextBlock {
              textBlockContent
              fontSize
              fontWeight
              textColor
            }
            ... on ComponentMoleculesQuote {
              quote {
                textBlockContent
              }
            }
            ... on ComponentMoleculesColumns {
              columns {
                id
                textBlockContent
                fontSize
                fontWeight
                textColor
              }
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

export const ABOUT_PAGE = gql`
  query {
    about {
      data {
        attributes {
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
          timelineBlock {
            timelineItem {
              id
              year
              timelineContent
            }
          }
          DynamicItems {
            ... on ComponentAtomsSpacer {
              space
            }
            ... on ComponentMoleculesQuote {
              quote {
                textBlockContent
              }
            }
            ... on ComponentMoleculesColumns {
              columns {
                textBlockContent
                fontSize
                fontWeight
                textColor
              }
            }
            ... on ComponentMoleculesColumnsWithImage {
              imageLeft
              imageObjectFit
              columnText {
                textBlockContent
                fontSize
                fontWeight
                textColor
              }
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
            ... on ComponentMoleculesCallToAction {
              callToAction {
                content
                TextColor
                link {
                  href
                  title
                  linkStyle
                  buttonColor
                }
                bgGradient {
                  color1
                  color2
                }
                bgImage {
                  data {
                    attributes {
                      url
                      caption
                      alternativeText
                    }
                  }
                }
              }
            }
            ... on ComponentMoleculesImageGallery {
              imageItems {
                id
                imageTitle
                image {
                  data {
                    attributes {
                      width
                      height
                      url
                      caption
                      alternativeText
                    }
                  }
                }
              }
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
          dynamicFullWidth {
            ... on ComponentAtomsSpacer {
              space
            }
            ... on ComponentMoleculesQuote {
              quote {
                textBlockContent
              }
            }
            ... on ComponentMoleculesColumns {
              columns {
                textBlockContent
                fontSize
                fontWeight
                textColor
              }
            }
            ... on ComponentMoleculesColumnsWithImage {
              imageLeft
              imageObjectFit
              columnText {
                textBlockContent
                fontSize
                fontWeight
                textColor
              }
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
            ... on ComponentMoleculesCallToAction {
              callToAction {
                content
                TextColor
                link {
                  href
                  title
                  linkStyle
                  buttonColor
                }
                bgGradient {
                  color1
                  color2
                }
                bgImage {
                  data {
                    attributes {
                      url
                      caption
                      alternativeText
                    }
                  }
                }
              }
            }
            ... on ComponentMoleculesImageGallery {
              imageItems {
                id
                imageTitle
                image {
                  data {
                    attributes {
                      width
                      height
                      url
                      caption
                      alternativeText
                    }
                  }
                }
              }
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

export const SERVERS_PAGE = gql`
  query {
    servers {
      data {
        attributes {
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
          hero {
            heroHeading
            headingColor
            headingFontSize
            headingFonWeight
            heroText
            textColor
            textFontSize
            textFontWeight
            button {
              href
              title
              linkStyle
              buttonColor
            }
          }
        }
      }
    }
  }
`;
export const HOME_PAGE = gql`
  query {
    home {
      data {
        attributes {
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
          hero {
            heroHeading
            headingColor
            headingFontSize
            headingFonWeight
            heroText
            textColor
            textFontSize
            textFontWeight
            button {
              href
              title
              linkStyle
              buttonColor
            }
          }
          dynamicItems {
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
              fontSize
              fontWeight
              textColor
            }
            ... on ComponentMoleculesColumns {
              columns {
                id
                textBlockContent
                fontSize
                fontWeight
                textColor
              }
            }
            ... on ComponentMoleculesFeatures {
              features {
                data {
                  attributes {
                    featureSectionTitle
                    feature {
                      featureText
                    }
                  }
                }
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
                content
                TextColor
                link {
                  href
                  title
                  linkStyle
                  buttonColor
                }
                bgGradient {
                  color1
                  color2
                }
                bgImage {
                  data {
                    attributes {
                      url
                      caption
                      alternativeText
                    }
                  }
                }
              }
            }
            ... on ComponentMoleculesColumnsWithImage {
              imageLeft
              imageObjectFit
              columnText {
                textBlockContent
                fontSize
                fontWeight
                textColor
              }
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
            ... on ComponentMoleculesTestimonials {
              testimonial {
                id
                testimonialTitle
                testimonialContent
                testimonialAuthor
              }
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

export const DEDICATED_PAGE = gql`
  query {
    dedicated {
      data {
        attributes {
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
            ... on ComponentMoleculesQuote {
              quote {
                textColor
                textBlockContent
                fontWeight
                fontSize
              }
            }
            ... on ComponentAtomsTextBlock {
              textColor
              textBlockContent
              fontSize
              fontWeight
            }
            ... on ComponentMoleculesColumns {
              columns {
                textColor
                textBlockContent
                fontSize
                fontWeight
              }
            }
            ... on ComponentMoleculesFeatures {
              features {
                data {
                  attributes {
                    featureSectionTitle
                    feature {
                      featureText
                    }
                  }
                }
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
                fontSize
                fontWeight
                textColor
                textBlockContent
              }
              columnImage {
                data {
                  attributes {
                    alternativeText
                    caption
                    url
                  }
                }
              }
              imageLeft
              imageObjectFit
            }
            ... on ComponentMoleculesPricingTableDedicated {
              planDedicated {
                PlanName
                PlanUrl
                Price
                RAM
                Processor
                Disks
                Traffic
                Uplink
              }
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

export const DYNAMIC_PAGES = gql`
  query {
    dynamicPages {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

export const DYNAMIC_PAGE = gql`
  query DynamicPage($theSlug: String) {
    dynamicPages(filters: { slug: { eq: $theSlug } }) {
      data {
        attributes {
          slug
          Title
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
            ... on ComponentAtomsSpacer {
              space
            }
            ... on ComponentMoleculesQuote {
              quote {
                textColor
                textBlockContent
                fontWeight
                fontSize
              }
            }
            ... on ComponentAtomsTextBlock {
              textColor
              textBlockContent
              fontSize
              fontWeight
            }
            ... on ComponentMoleculesColumns {
              columns {
                textColor
                textBlockContent
                fontSize
                fontWeight
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
                fontSize
                fontWeight
                textColor
                textBlockContent
              }
              columnImage {
                data {
                  attributes {
                    alternativeText
                    caption
                    url
                  }
                }
              }
              imageLeft
              imageObjectFit
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

export const FAQ = gql`
  query {
    faq {
      data {
        attributes {
          faq {
            sectionTitle
            faq {
              id
              faqTitle
              faqContent
            }
          }
        }
      }
    }
  }
`;

// DOCS

export const SINGLE_DOC = gql`
  query SingleDoc($TheSlug: String, $TheSubSlug: String) {
    docArticles(filters: { Slug: { eq: $TheSlug } }) {
      data {
        attributes {
          Title
          Slug
          MarkdownContent
          AdditionalDocs(filters: { Slug: { eq: $TheSubSlug } }) {
            Title
            Slug
            MarkdownContent
          }
        }
      }
    }
  }
`;
export const DOCS = gql`
  query {
    docArticles(sort: "customSort") {
      data {
        id
        attributes {
          Title
          Slug
          MarkdownContent
          AdditionalDocs {
            id
            Title
            Slug
            MarkdownContent
          }
        }
      }
    }
  }
`;
