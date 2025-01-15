import { client } from '@/sanity/lib/client';
import { Blog } from '@/app/components/blogpages';
import Image from 'next/image';

interface Params {
  params: {
    slug: string;
  };
}

const BlogSlug = async ({ params }: Params) => {
  const { slug } = params;

  const data: Blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug]{
      title,
      description,
      "imageUrl": image.asset->url,
      "slug": slug.current
    }[0]`,
    { slug }
  );

  if (!data) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="max-w-5xl my-20 shadow-xl rounded-lg mx-auto p-4 flex-col gap-4 items-center">
      <div className='justify-items-center'>
        <Image
          className="rounded-lg object-cover"
          src={data.imageUrl}
          alt={data.title}
          height={200}
          width={500}
        />
        <div className="p-2">
          <h2 className="text-3xl font-bold my-10">{data.title}</h2>
          <p className="text-lg ">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogSlug;
