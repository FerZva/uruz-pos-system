import React from "react";
import Link from "next/link";

type ButtonProps = {
    linkName: string;
    linkTo: string;
}

const MenuLinkButton:React.FC<ButtonProps> = ({ linkName, linkTo }) => {
  return (
    <div>
      {/* <div>image</div> */}
      <Link href={linkTo}>{linkName}</Link>
    </div>
  );
}

export default MenuLinkButton;
