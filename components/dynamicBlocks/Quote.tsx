import { styled } from "@mui/material";
import SerializeContent from "../../lib/SerializeContent";

const QuoteContainer = styled("div")(({ theme }) => ({
  background: "#fff",
  padding: 30,
  borderRadius: 8,
  border: `1px solid ${theme.palette.customTextColors.neutral10}`,
  [theme.breakpoints.down("sm")]: {
    padding: 20,
  },
}));

const QuoteText = styled("div")({});

export default function Quote({ quoteContent }: any) {
  return (
    <QuoteContainer>
      <QuoteText>
        <SerializeContent contentToSerialize={quoteContent.textBlockContent} />
      </QuoteText>
    </QuoteContainer>
  );
}
