import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


export default async function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Hi, I&#39;m Kohaku 👋
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-lg max-w-sm mt-2 dark:text-neutral-300 text-wrap"
          >
            I am a long-termist who currently lives in Tokyo and is also a
            front-end engineer who loves reading.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              priority
              src="/img/tokyo_tower.jpg"
              height={1000}
              width={1000}
              className="w-full object-cover rounded-xl group-hover/card:shadow-xl blur-animation"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
