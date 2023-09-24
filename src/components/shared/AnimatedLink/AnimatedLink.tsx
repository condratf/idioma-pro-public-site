'use client'
import React, { FC, PropsWithChildren } from "react"
import Link from "next/link"
// local
import useAnimatedRouter from "@/utils/useAnimatedRouter"

type AnimatedLinkProps = {
  href: string
  children: React.ReactNode
  className: string
}

export const AnimatedLink: FC<PropsWithChildren<AnimatedLinkProps>> = ({ href, children, className }) => {
  const { animatedRoute } = useAnimatedRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        animatedRoute(href);
      }}
      passHref
      className={className}
    >
      {children}
    </Link>
  );
}