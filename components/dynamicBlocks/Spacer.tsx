import { Box, styled } from "@mui/material";
import React from "react";

interface Spacer {
  spacerHeight?: string;
}

const SpacerWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "spacerHeight",
})<Spacer>(({ spacerHeight }) => ({
  width: "auto",
  height: spacerHeight,
}));

export default function Spacer({ spacerHeight }: any) {
  return <SpacerWrapper spacerHeight={spacerHeight} />;
}
