import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  hFull: boolean;
  wFull: boolean;
  dark: boolean;
}

const Card = ({ children, hFull, wFull, dark }: Props) => {
  const full_height = hFull ? 'h-full' : '';
  const full_width = wFull ? 'w-full' : '';
  const is_dark = dark ? 'bg-slate-800 text-white' : 'bg-white';
  return (
    <div className={`p-4 rounded-lg drop-shadow-lg ${full_height} ${full_width} ${is_dark}`}>
      { children }
    </div>
  )
};

export default Card;