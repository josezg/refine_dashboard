import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src="/logo.svg" alt="Yariga" width="28px" />
        ) : (
          <img src="/yariga.svg" alt="Yariga" width="140px" />
        )}
      </Link>
    </Button>
  );
};
