import React from "react";

import { Flex, FlexProps } from "../flex";

export function Form({ children, ...rest }: FlexProps) {
  return (
    <Flex direction="column" {...rest}>
      {children}
    </Flex>
  );
}
