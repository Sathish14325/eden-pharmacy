import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="mx-30 p-2">
        <Image src="/assets/brand.png" width={200} height={70} alt="brand" />
      </div>
    </header>
  );
}
