import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../common/Button";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const blogData = [
  {
    id: 1,
    date: "June 27, 2024",
    title: "What are the Warehouse Costs? – Tips to Optimize Warehousing Costs",
    imageUrl: "/assests/blogs/blog-1.png", // Replace with the actual image paths
    link: "#",
  },
  {
    id: 2,
    date: "June 27, 2024",
    title: "Top 10 Logistics Companies in Gurgaon [Gurugram] – 2024",
    imageUrl: "/assests/blogs/blog-2.png",
    link: "#",
  },
  {
    id: 3,
    date: "June 27, 2024",
    title: "Meesho Seller Panel – How to Sell Products on Meesho Supplier?",
    imageUrl: "/assests/blogs/blog-3.png",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray mb-8">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="card  bg-white shadow-lg overflow-hidden relative group transition-all duration-300 hover:h-auto"
            >
              <figure>
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <span className="text-sm text-gray-500">{blog.date}</span>
                <h3 className="card-title text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>
              </div>
              {/* Initially hidden "Read More" section */}
              <div className="hidden transition-all duration-300  group-hover:block bg-white py-4 px-4">
                <a
                  href={blog.link}
                  className="text-red font-medium hover:underline flex  items-center"
                >
                  Read More{" "}
                  <span className="ml-2">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button className="btn-wide">View All</Button>
        </div>
      </div>
    </section>
  );
}
