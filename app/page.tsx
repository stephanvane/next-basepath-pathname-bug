'use client'
import { usePathname } from "next/navigation";

const IndexPage = () => {
  const pathname = usePathname();

  return (
    <div>
      {pathname}
    </div>
  );
};

export default IndexPage;
