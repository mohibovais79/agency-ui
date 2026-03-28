"use client";

import { FC } from "react";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const isLight = theme === "light" || isSSR;

  return (
    <button
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className={clsx(
        "flex items-center justify-center rounded-lg p-2 transition-opacity hover:opacity-80 cursor-pointer",
        className,
      )}
      type="button"
      onClick={onChange}
    >
      {isLight ? <SunFilledIcon size={22} /> : <MoonFilledIcon size={22} />}
    </button>
  );
};
