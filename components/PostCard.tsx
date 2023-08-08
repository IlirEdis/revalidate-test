import { Typography, styled, useTheme } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const CardWrapper = styled("div")({
  position: "relative",
  overflow: "hidden",
  padding: 40,
  marginBottom: 20,
  borderRadius: 8,
  figcaption: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  ":hover": {
    img: {
      transform: "scale(1.02)",
    },
  },
});

const Overlay = styled("div", {
  shouldForwardProp: (prop: any) => prop !== "bgColor",
})(({ bgColor }: any) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  background: `linear-gradient(45deg, ${
    bgColor ? bgColor : "rgba(255,255,255, 0)"
  } 45%, rgba(255,255,255, 0) 100%)`,
}));

const ContentWrapper = styled("div")(({ theme }) => ({
  fontSize: 18,
  fontWeight: 400,
  position: "relative",
  zIndex: 2,
  width: "75%",

  li: {
    paddingBottom: 10,
    fontWeight: 500,
  },
  button: {
    margin: "30px 0 0",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const PostTitle = styled(Typography)({
  fontSize: 24,
  fontWeight: 600,
  color: "#fff",
});

const PostDate = styled(Typography)({
  fontSize: 12,
  paddingTop: 20,
  color: "#fff",
});

const Excerpt = styled(Typography)({
  fontSize: 14,
  paddingTop: 20,
  color: "#fff",
});

export default function PostCard({
  postLink,
  postTitle,
  postExcerpt,
  postDate,
  featuredImage,
  imageAlt,
}: any) {
  const theme = useTheme();

  return (
    <Link href={postLink}>
      <CardWrapper>
        <Overlay
          //@ts-ignore
          //   bgColor={theme.palette.secondary.main}
          bgColor={theme.palette.primary.main}
        />

        <ContentWrapper style={{ color: "#fff" }}>
          <PostTitle variant='h2'>{postTitle}</PostTitle>

          <Excerpt>{postExcerpt}</Excerpt>
        </ContentWrapper>
        {featuredImage && (
          <figure>
            <Image
              src={featuredImage ? featuredImage : null}
              alt={imageAlt ? imageAlt : "Edisa CTA image"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center left",
                zIndex: 0,
                transition: "transform .2s ease-in-out",
              }}
              sizes='(max-width: 600px) 100vw, 50vw'
              loading='lazy'
            />
            {/* <figcaption>{theData.bgImage.data.attributes.caption}</figcaption> */}
          </figure>
        )}
      </CardWrapper>
    </Link>
  );
}
