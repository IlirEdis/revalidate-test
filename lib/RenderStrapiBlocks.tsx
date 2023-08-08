import Cta from "../components/dynamicBlocks/Cta";

import CustomLink from "../components/dynamicBlocks/CustomLink";
import Spacer from "../components/dynamicBlocks/Spacer";
import TextBlock from "../components/dynamicBlocks/TextBlock";
import Quote from "../components/dynamicBlocks/Quote";

import Columns from "../components/dynamicBlocks/Columns";

import ColumnsWithImage from "../components/dynamicBlocks/ColumnsWithImage";

import QuoteWithColumns from "../components/dynamicBlocks/QuoteWithColumns";

export const RenderStrapiBlocks = (block: any) => {
  const {
    __typename,
    callToAction,
    href,
    title,
    linkStyle,
    space,
    textBlockContent,
    fontSize,
    fontWeight,
    textColor,
    quote,
    quoteColumns,
    columns,
    columnText,
    columnImage,
    imageLeft,
    imageObjectFit,
  } = block;

  switch (__typename) {
    case "ComponentMoleculesCallToAction":
      return <Cta theData={callToAction} />;
    case "ComponentAtomsLink":
      return <CustomLink linkData={{ href, title, linkStyle }} />;
    case "ComponentAtomsSpacer":
      return <Spacer spacerHeight={space} />;
    case "ComponentAtomsTextBlock":
      return (
        <TextBlock
          content={{ textBlockContent, fontSize, fontWeight, textColor }}
        />
      );
    case "ComponentMoleculesQuote":
      return <Quote quoteContent={quote} />;
    case "ComponentMoleculesQuoteWithColumns":
      return <QuoteWithColumns quoteColumnsContent={quoteColumns} />;
    case "ComponentMoleculesColumns":
      return <Columns columnsContent={columns} />;
    case "ComponentMoleculesColumnsWithImage":
      return (
        <ColumnsWithImage
          columnsContent={{
            columnText,
            columnImage,
            imageLeft,
            imageObjectFit,
          }}
        />
      );
    default:
      return `❌ Unsupported block`;
  }
};
