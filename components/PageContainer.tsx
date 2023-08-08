import { Container, styled } from "@mui/material";

interface PaddingProps {
  pagePadding?: string;
  mobilePadding?: string;
  margin?: string;
  mobileMargin?: string;
}

const StyledContainer = styled(Container, {
  shouldForwardProp: (prop) =>
    prop !== "pagePadding" &&
    prop !== "mobilePadding" &&
    prop !== "margin" &&
    prop !== "mobileMargin",
})<PaddingProps>(
  ({ pagePadding, mobilePadding, margin, mobileMargin, theme }) => ({
    position: "relative",
    minHeight: "80vh",
    padding: pagePadding,
    marginTop: margin,
    scrollBehavior: "smooth",
    [theme.breakpoints.down("sm")]: {
      padding: mobilePadding,
      marginTop: mobileMargin,
    },
  })
);

export default function PageContainer({
  children,
  pagePadding,
  mobilePadding,
  margin,
  mobileMargin,
}: any) {
  return (
    <StyledContainer
      pagePadding={pagePadding}
      mobilePadding={mobilePadding}
      margin={margin}
      mobileMargin={mobileMargin}
    >
      {children}
    </StyledContainer>
  );
}
