import { styled } from "@mui/material";
import SerializeContent from "../../lib/SerializeContent";

const QuoteContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 60,
  justifyContent: "space-between",

  background: "#fff",
  padding: 30,
  borderRadius: 8,
  border: `1px solid ${theme.palette.customTextColors.neutral10}`,

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "auto",
    padding: 20,
  },
}));

export default function QuoteWithColumns({ quoteColumnsContent }: any) {
  return (
    <QuoteContainer>
      {quoteColumnsContent.map((column: any) => {
        return (
          <div key={column.id}>
            <SerializeContent
              contentToSerialize={column.textBlockContent}
              textColor={column.textColor}
              textFontSize={column.fontSize}
              textFontWeight={column.fontWeight}
            />
          </div>
        );
      })}
    </QuoteContainer>
  );
}
