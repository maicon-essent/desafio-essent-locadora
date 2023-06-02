"use server";
import Image from "next/image";

export default function Img({ src, alt, children }: any) {
  return (
    <Image src={src} alt={alt}>{children}</Image>
  )

}
