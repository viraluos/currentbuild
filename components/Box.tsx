import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({
  children, className
 }) => {
  return(
    <div className={twMerge( ` p-2 bg-neutral-800 rounded-sm `, className )}>
      {children}
    </div>
  );
}

export default Box;