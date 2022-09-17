import { Flex, Image, useTheme } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from "react";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center">
      <Image
        alt="logo"
        src= {require("./photos/nuber_header.PNG")}
        padding={tokens.space.medium}
      />
    </Flex>
  );
}
