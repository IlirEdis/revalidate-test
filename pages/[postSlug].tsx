import { Fragment } from "react";
import { Divider, Stack, Typography, styled } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import { ALL_BLOG_POSTS, SINGLE_BLOG_POST } from "../data/Queries";
import { client } from "../lib/Client";
import { RenderStrapiBlocks } from "../lib/RenderStrapiBlocks";
import Spacer from "../components/dynamicBlocks/Spacer";
import PageContainer from "../components/PageContainer";

const SinglePostHeroWrapper = styled("div")({
  width: "100%",
  minHeight: 250,
  borderRadius: 8,
  padding: 30,
  overflow: "hidden",
  position: "relative",
});
const Overlay = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(0deg, rgba(8,44,27,0.4) 0%, rgba(8,44,27,0.7) 40%)",
  top: "0",
  left: "0",
  zIndex: 0,
});

const HeroContent = styled("div")({
  position: "relative",
  zIndex: 2,
  color: "#fff",
});

const StyledLink = styled(Link)(({ theme }) => ({
  transition: "color 0.3s",
  ":hover": {
    color: theme.palette.secondary.main,
  },
}));

const PostTitle = styled(Typography)(({ theme }) => ({
  fontSize: 42,
  fontWeight: 600,
  paddingTop: 20,
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
  },
}));

const UpdatedDate = styled(Typography)({
  color: "#fff",
});

export default function BlogPost({ postData }: any) {
  return (
    <PageContainer pagePadding='100px 0' mobilePadding='80px 20px'>
      <SinglePostHeroWrapper>
        <Overlay />
        <Image
          src={
            postData?.featuredImage.data?.attributes.url
              ? postData?.featuredImage.data?.attributes.url
              : "https://glorious-snazzy-hot.media.strapiapp.com/Fallback_Image_55404f4922.jpg"
          }
          alt={
            postData?.featuredImage.data?.attributes.alternativeText
              ? postData?.featuredImage.data?.attributes.alternativeText
              : "Post Image"
          }
          fill
          priority
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
          sizes='(max-width: 600px) 100vw, 50vw'
        />
        <HeroContent>
          <Stack
            direction='row'
            spacing={2}
            divider={<Divider color='#fff' orientation='vertical' flexItem />}
          >
            <StyledLink href='/'>← Back</StyledLink>
          </Stack>
          <PostTitle variant='h1'>{postData?.Title}</PostTitle>
          <Spacer spacerHeight='20px' />
          <Typography sx={{ color: "#fff", fontSize: "12px" }}>
            Share post:
          </Typography>
          <Spacer spacerHeight='5px' />
        </HeroContent>
      </SinglePostHeroWrapper>
      <section>
        {postData?.dynamicBlocks ? (
          postData?.dynamicBlocks.map((block: any, i: any) => {
            return <Fragment key={i}>{RenderStrapiBlocks(block)}</Fragment>;
          })
        ) : (
          <p>loading...</p>
        )}
      </section>
    </PageContainer>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: ALL_BLOG_POSTS,
  });

  const posts = data?.blogPosts?.data;

  return {
    paths: posts?.map((post: any) => ({
      params: {
        postSlug: post && post.attributes.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { postSlug } = context.params;

  const { data } = await client.query({
    query: SINGLE_BLOG_POST,
    variables: {
      theSlug: postSlug,
    },
  });
  const postData = data?.blogPosts?.data[0]?.attributes || null;

  return {
    props: {
      postData,
    },
    revalidate: 1,
  };
};
