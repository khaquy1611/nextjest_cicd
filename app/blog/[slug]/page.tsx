type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <><h1>Slug: {params.slug}</h1><p>HolaTex</p>
  <p>Welcome to HaNoi</p>
  </>;
}

export async function generateStaticParams() {
  return [
    { slug: "hello-world" },
    { slug: "nextjs" },
  ];
}