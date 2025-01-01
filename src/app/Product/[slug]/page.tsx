import CommentSection from "@/components/Comment";
import { client } from "@/sanity/lib/client";

export default async function MoldsPage({ params }) {
  const { slug } = params;

  // Fetch data for the category and products
  const data = await client.fetch(
    `*[_type == "Product" && category->slug.current == $slug]{
        name,
        price,
        "imageUrl": image.asset->url,
        "slug": slug.current,
        "category": Category->{
            name,
            "slug": slug.current
        }
    }`,
    { slug }
  );
console.log(params);
  
  return (
    <div>
      <div className="mold">
        {data.map((mold:any) => (
          <div key={mold.slug} className="molds-card">
            <img src={mold.imageUrl} alt={mold.name} />
            <h3>{mold.name}</h3>
            <p>{mold.description || "No description available"}</p>
            <div className="price">{mold.price} Rs</div>
            <button>Add to Cart</button>
          </div>
        ))}
        <CommentSection />
      </div>
    </div>
    
  );
}











