import { blogs } from "../data";

export default function SingleBlog({ params }) {
  const blog = blogs.find(b => b.slug === params.slug);
  if (!blog) return <h1>Blog Not Found</h1>;
  return (
    <div style={{padding:'20px', maxWidth:'800px', margin:'auto'}}>
      <h1 style={{fontSize:'24px', fontWeight:'bold'}}>{blog.title}</h1>
      <p style={{color:'gray'}}>{blog.date}</p>
      <p style={{marginTop:'20px', lineHeight:'1.6'}}>{blog.content}</p>
      <a href="/blog" style={{color:'blue', marginTop:'20px', display:'block'}}>← Back to Blogs</a>
    </div>
  )
}