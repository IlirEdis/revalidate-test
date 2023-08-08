import { styled } from "@mui/material";
import SerializeContent from "../../lib/SerializeContent";

const ColumnsWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  // flexWrap: "wrap",
  gap: 60,
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "auto",
  },
}));

export default function Columns({ columnsContent }: any) {
  return (
    <ColumnsWrapper>
      {columnsContent.map((column: any) => {
        // console.log("IDDD", column.id);
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
    </ColumnsWrapper>
  );
}
