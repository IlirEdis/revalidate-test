import { ReactNode } from "react";
import { styled } from "@mui/material";

import CustomLink from "./CustomLink";
import SerializeContent from "../../lib/SerializeContent";
import Image from "next/image";

interface CtaInterface {
  title?: string;
  link?: string;
  linkTitle?: string;
  bgImage?: string | any;
  bgColor?: string;
  content?: ReactNode;
}

const CtaWrapper = styled("div")({
  position: "relative",
  overflow: "hidden",
  padding: 40,
  borderRadius: 8,
  figcaption: {
    position: "absolute",
    top: 0,
    left: 0,
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
    bgColor?.color1 ? bgColor?.color1 : "rgba(255,255,255, 0)"
  } 45%, ${bgColor?.color2 ? bgColor?.color2 : "rgba(255,255,255, 0)"} 100%)`,
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

export default function Cta({ theData }: any) {
  return (
    <CtaWrapper>
      <Overlay
        //@ts-ignore
        bgColor={theData.bgGradient}
      />

      <ContentWrapper style={{ color: `${theData.TextColor}` }}>
        <SerializeContent contentToSerialize={theData.content} />
        {theData.link && <CustomLink linkData={theData.link} />}
      </ContentWrapper>
      {theData?.bgImage && (
        <figure>
          <Image
            src={
              theData?.bgImage?.data
                ? theData?.bgImage?.data?.attributes.url
                : ""
            }
            alt={
              theData?.bgImage?.data?.attributes.alternativeText
                ? theData?.bgImage?.data?.attributes.alternativeText
                : "Edisa CTA image"
            }
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center left",
              zIndex: 0,
            }}
          />
          <figcaption>{theData?.bgImage?.data?.attributes.caption}</figcaption>
        </figure>
      )}
    </CtaWrapper>
  );
}
