import Image from 'next/image';

const HomeBlog = () => {
  return (
    <div className="text-center pt-16 bg-black">
      <p className="great-vibes text-orange-400 text-2xl">Blog Post</p>
      <h2 className="text-5xl font-bold mt-3">
        <span className="text-orange-400">Latest </span>
        <span className="text-white">News & Blogs</span>
      </h2>

      {/* Card container */}
      <div className="mt-16 grid grid-cols-1 px-16 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-transparent p-6">
          <div className="relative h-auto mb-4">
            <Image
              src="/assets/Blog1.png" // Image 1 from the public folder
              alt="Dummy image 1"
              width={400}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-transparent  p-6">
          <div className="relative h-48 mb-4">
            <Image
              src="/assets/Blog2.png" // Image 2 from the public folder
              alt="Dummy image 2"
              width={400}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-transparent  p-6">
          <div className="relative h-48 mb-4">
            <Image
              src="/assets/Blog3.png" // Image 3 from the public folder
              alt="Dummy image 3"
              width={400}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeBlog;
