import React from "react";

export interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  type: "primary" | "secondary";
  children: React.ReactNode;
}
