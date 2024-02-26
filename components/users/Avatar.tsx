import React from "react";
import styles from "./Avatar.module.css";
import Image from "next/image";

type Props = {
  name: string;
  otherStyles?: string;
};

export function Avatar({ name, otherStyles }: Props) {
  return (
    <div className={`${styles.avatar} ${otherStyles}`} data-tooltip={name}>
      <Image
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(
          Math.random() * 30
        )}.png`}
        fill
        className="rounded-full"
        alt={name}
      />
    </div>
  );
}
