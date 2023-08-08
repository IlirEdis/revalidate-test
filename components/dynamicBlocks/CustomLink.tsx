import { Button, styled, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";

const StyledTextLink = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  gap: 20,
  width: "fit-content",
  fontSize: 16,
  marginTop: 20,
  color: theme.palette.secondary.main,
  transition: "color .3s",
  ":hover": {
    color: theme.palette.secondary.light,
    svg: {
      marginLeft: 10,
      stroke: theme.palette.secondary.light,
    },
  },
}));

function CustomLink({ linkData }: any) {
  const theme = useTheme();
  switch (linkData.linkStyle) {
    case "textButton":
      return (
        <Link href={linkData.href}>
          <Button disableElevation variant='text' color={linkData.buttonColor}>
            {linkData.title}
          </Button>
        </Link>
      );
    case "button":
      return (
        <Link href={linkData.href}>
          <Button
            disableElevation
            variant='contained'
            color={linkData.buttonColor}
          >
            {linkData.title}
          </Button>
        </Link>
      );
    case "outlinedButton":
      return (
        <Link href={linkData.href}>
          <Button
            disableElevation
            variant='outlined'
            color={linkData.buttonColor}
          >
            {linkData.title}
          </Button>
        </Link>
      );

    default:
      return (
        <StyledTextLink>
          <Link href={linkData.href}>{linkData.title}</Link>
        </StyledTextLink>
      );
  }
}

export default CustomLink;
