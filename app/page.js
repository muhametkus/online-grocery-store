import Image from "next/image";

export default function Home() {
  return (
    <div>env bu: {`${process.env.NEXT_PUBLIC_API_URL}/api`}

    </div>
  );
}
