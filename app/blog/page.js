import { blogs } from "./data";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div style={{padding:'20px', maxWidth:'800px', margin:'auto'}}>
      <h1 style={{fontSize:'28px', fontWeight:'bold'}}>Gold Blog - Latest News</h1>
      {blogs.map(b => (
        <div key={b.slug} style={{border:'1px solid #ddd', padding:'15px', marginTop:'15px', borderRadius:'10px'}}>
          <h2 style={{fontSize:'18px', fontWeight:'bold'}}>{b.title}</h2>
          <p style={{color:'gray', fontSize:'12px'}}>{b.date}</p>
          <Link href={`/blog/${b.slug}`} style={{color:'blue'}}>Read More -></Link>
        </div>
      ))}
    </div>
  )
}