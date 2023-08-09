import type { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const CardTitle = ({ children }: Props) => {
  return (
    <div className="font-Poppins text-medium">{children}</div>
  )
}

export default CardTitle;