import { Typography, styled } from "@mui/material";

import PostCard from "../components/PostCard";
import { BLOG_PAGE } from "../data/Queries";
import { client } from "../lib/Client";
import PageContainer from "@/components/PageContainer";

const StyledTypography = styled(Typography)({
  fontSize: 48,
  fontWeight: 800,
  paddingBottom: 60,
});

export default function Blog({ blogPageData }: any) {
  const { blog_posts, blogPageTitle } = blogPageData.attributes;
  return (
    <PageContainer margin='100px'>
      <StyledTypography variant='h1'>{blogPageTitle}</StyledTypography>

      {blog_posts?.data.map((blogPost: any) => {
        return (
          <PostCard
            key={blogPost?.id}
            postLink={`${blogPost?.attributes?.slug}`}
            postTitle={blogPost?.attributes?.Title}
            postExcerpt={
              blogPost?.attributes?.Excerpt ? blogPost?.attributes?.Excerpt : ""
            }
            postDate={blogPost?.attributes.publishedAt}
            featuredImage={
              blogPost?.attributes?.featuredImage?.data
                ? blogPost?.attributes?.featuredImage?.data?.attributes?.url
                : "https://glorious-snazzy-hot.media.strapiapp.com/Fallback_Image_55404f4922.jpg"
            }
            imageAlt={
              blogPost?.attributes?.featuredImage?.data?.attributes
                ?.alternativeText
            }
          />
        );
      })}
    </PageContainer>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: BLOG_PAGE,
  });
  const blogPageData = data?.blog?.data || null;

  return {
    props: {
      blogPageData,
    },
    revalidate: 1,
  };
};
