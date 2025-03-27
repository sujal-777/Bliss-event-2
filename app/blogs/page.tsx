import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock } from "lucide-react"

export default function BlogsPage() {
  const blogs = [
    {
      title: "10 Wedding Trends to Watch in 2023",
      excerpt:
        "Discover the latest wedding trends that are making waves this year, from sustainable celebrations to personalized experiences.",
      image: "/media/Wedding-aboutus-page3.b23784153801d8972816eacdad416e28.svg",
      date: "June 15, 2023",
      author: "Priya Sharma",
      readTime: "5 min read",
      slug: "wedding-trends-2023",
    },
    {
      title: "How to Choose the Perfect Wedding Venue",
      excerpt:
        "Finding the right venue is one of the most important decisions for your wedding. Here's our guide to help you make the right choice.",
      image: "/media/blog-card-img-2.2e9634a359f3fe9796cf50a430d4ad98.svg",
      date: "May 22, 2023",
      author: "Rahul Verma",
      readTime: "7 min read",
      slug: "choose-perfect-wedding-venue",
    },
    {
      title: "Wedding Photography: Capturing Your Special Moments",
      excerpt: "Learn how to ensure your wedding photos perfectly capture the magic and emotion of your special day.",
      image: "/media/blog-card-img-3.a1e97b6032ed9ee6f8653fbab6f8e318.svg",
      date: "April 10, 2023",
      author: "Anita Desai",
      readTime: "6 min read",
      slug: "wedding-photography-tips",
    },
    {
      title: "Planning a Destination Wedding: Tips and Tricks",
      excerpt:
        "Dreaming of a wedding in an exotic location? Here's everything you need to know about planning a destination wedding.",
      image: "/media/popular-blog.e352fca1778f492f1412.png",
      date: "March 5, 2023",
      author: "Vikram Singh",
      readTime: "8 min read",
      slug: "destination-wedding-planning",
    },
    {
      title: "Budget-Friendly Wedding Ideas That Don't Compromise on Style",
      excerpt:
        "Discover creative ways to have a beautiful wedding without breaking the bank. These tips will help you save money while still having a stylish celebration.",
      image: "/media/WeddingPhoto2.4010907609a21f5ef958956b596f8ec6.svg",
      date: "February 18, 2023",
      author: "Meera Kapoor",
      readTime: "5 min read",
      slug: "budget-friendly-wedding-ideas",
    },
   
  ]

  return (
    <>
      <section className="bg-pink-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-red-700 mb-4">Our Blog</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore our wedding planning tips, inspiration, and real wedding stories to help you plan your perfect day.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Link href={`/blogs/${blog.slug}`}>
                  <div className="h-56 overflow-hidden">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blog.date}
                    </div>
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>
                  <Link href={`/blogs/${blog.slug}`}>
                    <h2 className="text-xl font-bold text-red-700 mb-2 hover:text-red-800">{blog.title}</h2>
                  </Link>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <Link href={`/blogs/${blog.slug}`} className="text-red-700 font-medium hover:text-red-800">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button className="bg-red-700 hover:bg-red-800 text-white">Load More Articles</Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-700 mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest wedding tips, trends, and inspiration delivered directly to your inbox.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
                required
              />
              <Button className="bg-red-700 hover:bg-red-800 text-white">Subscribe</Button>
            </form>
            <p className="text-sm text-gray-500 mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </>
  )
}

