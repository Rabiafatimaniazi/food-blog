import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';

export interface Blog {
  title: string; // Title of the blog
  description: string; // Description of the blog
  imageUrl: string; // URL of the blog's image
  slug: string; // Current value of the slug
}

export default async function Blogpages() {
  // Fetch all blogs from Sanity
  const data: Blog[] = await client.fetch(`*[_type == "blog"]{
    title,
    description,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }`);

  return (
    <div className=" flex flex-col justify-center items-center py-8 shadow-lg">
      <div className="text-yellow-600 font-bold text-5xl p-2 text-center">
        Pak Food Explorer
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {data.map((blog, index) => (
          <Link key={index} href={`/blog/${blog.slug}`}>
            

            <div className="p-2 m-5 rounded-md shadow-lg hover:shadow-xl transition justify-center">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                height={300}
                width={400}
                className="rounded-t-md"
              />
              <div className="p-2">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <p className="text-sm line-clamp-2">{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
