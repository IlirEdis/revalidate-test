import { styled } from "@mui/material";
import Image from "next/image";
import SerializeContent from "../../lib/SerializeContent";
import { EnumType } from "typescript";

interface ColumnProps {
  columnsContent: {
    columnText?: string;
    columnImage?: string;
    imageLeft?: boolean | null;
    imageObjectFit?: EnumType;
  };
}

const ColumnsWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "imageLeft",
})(({ imageLeft, theme }: any) => ({
  display: "grid",

  gridTemplateColumns: "48% 48%",
  gridTemplateAreas: imageLeft ? `"image text"` : `"text image"`,
  gap: "4%",
  justifyContent: "space-between",
  alignItems: "start",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "100%",
    gridTemplateAreas: `"image" "text"`,
    gap: 30,
  },
}));

const ImageContainer = styled("figure")(({ theme }) => ({
  position: "relative",
  height: "100%",
  width: "100%",
  minHeight: 400,
  maxHeight: 500,
  gridArea: "image",
  borderRadius: 8,
  overflow: "hidden",
  figcaption: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  [theme.breakpoints.down("sm")]: {
    height: "350px",
  },
}));

export default function ColumnsWithImage({ columnsContent }: ColumnProps) {
  // console.log("DATAAA", columnsContent);
  const { columnText, columnImage, imageLeft, imageObjectFit }: any =
    columnsContent;
  return (
    //@ts-ignore
    <ColumnsWrapper imageLeft={imageLeft}>
      <div style={{ gridArea: "text" }}>
        <SerializeContent
          contentToSerialize={columnText?.textBlockContent}
          textColor={columnText?.textColor}
          textFontSize={columnText?.fontSize}
          textFontWeight={columnText?.fontWeight}
        />
      </div>
      <ImageContainer style={{}}>
        {columnImage && (
          <>
            <Image
              src={
                columnImage?.data
                  ? columnImage?.data?.attributes.url
                  : "https://glorious-snazzy-hot.media.strapiapp.com/Fallback_Image_55404f4922.jpg"
              }
              fill
              style={{ objectFit: imageObjectFit }}
              alt={
                columnImage?.data?.attributes.alternativeText
                  ? columnImage?.data?.attributes.alternativeText
                  : "Edis content image"
              }
              sizes='(max-width: 600px) 100vw, 50vw'
              loading='lazy'
            />
            <figcaption>{columnImage?.data?.attributes.caption}</figcaption>
          </>
        )}
      </ImageContainer>
    </ColumnsWrapper>
  );
}
