import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import { styled } from "@mui/material";

import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

const StyledReactMarkdown = styled(ReactMarkdown, {
  shouldForwardProp: (prop) =>
    prop !== "textColor" &&
    prop !== "textFontSize" &&
    prop !== "textFontWeight" &&
    prop !== "id",
})(({ theme, textColor, textFontSize, textFontWeight, id }: any) => ({
  fontWeight: textFontWeight,
  color: textColor,
  fontSize: textFontSize,
  "h1, h2, h3": {
    // position: "relative",
    ":before": {
      content: '""',
      display: "block",
      position: "relative",
      width: 0,
      height: "5em",
      marginTop: "-5em",
      visibility: "hidden",
    },
  },
  "ul, ol": {
    listStylePosition: "inside",
    // marginLeft: "0.75em",
    // textAlign: "left",
  },
  li: {
    "ul, ol": {
      listStylePosition: "inside",
      marginLeft: "0.75em",
      textAlign: "left",
    },
  },
  p: {
    position: "relative",
    zIndex: 1,
  },
  a: {
    color: "blue",
    transition: "color .2s",
    ":hover": {
      color: "purple",
    },
  },
  blockquote: {
    borderLeft: "3px solid",
    borderColor: "inherit",
    paddingLeft: 10,
  },
  code: {
    transform: "translateZ(0)",
    minWidth: "100%",
    float: "left",
    span: {
      display: "block",
    },
  },
}));

const CodeWrapper = styled("div")({
  position: "relative",
  ":hover": {
    ".copyButton": {
      opacity: 1,
    },
  },
});

const syntaxTheme = oneDark;

const MarkdownComponents: object = {
  code({ node, inline, className, ...props }: any) {
    return (
      <CodeWrapper>
        <SyntaxHighlighter
          style={syntaxTheme}
          PreTag='p'
          className='codeStyle'
          // language='tsx'
          // useInlineStyles={true}
          // language={hasLang[1]}
          // showLineNumbers={true}
          // wrapLines={hasMeta}
          // lineProps={applyHighlights}
        >
          {props.children}
        </SyntaxHighlighter>
      </CodeWrapper>
    );
  },
};

export default function SerializeContent({
  contentToSerialize,
  textColor,
  textFontSize,
  textFontWeight,
}: any) {
  return (
    <StyledReactMarkdown
      //   children={contentToSerialize}
      remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkBreaks]}
      rehypePlugins={[rehypeRaw]}
      components={MarkdownComponents}
      //@ts-ignore
      textColor={textColor}
      textFontSize={textFontSize}
      textFontWeight={textFontWeight}
    >
      {/* {contentToSerialize?.replace(/\n\n/gi, "\n &nbsp;\n")} */}
      {contentToSerialize?.replace(/\n\n/gi, "\n &nbsp;\n")}
      {/* {contentToSerialize} */}
    </StyledReactMarkdown>
  );
}
