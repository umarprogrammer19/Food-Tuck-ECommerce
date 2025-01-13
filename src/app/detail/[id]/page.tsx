// ShopItemServer.tsx (Server Component)
import ShopItemClient from "@/components/ShopItemClient/ShopItemClient";
import { client } from "@/sanity/lib/client";

type Product = {
  name: string;
  price: number;
  imageUrl: string;
  originalPrice?: number;
  id: number;
};

async function getData(): Promise<Product[]> {
  const query = `*[_type == "products"]{
    id,
    name,
    price,
    "imageUrl": image.asset->url
  }`;
  const fetchData = await client.fetch<Product[]>(query);
  return fetchData;
}

const ShopItemServer = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id, 10);

  const products: Product[] = await getData();
  const product = products.find((prod) => prod.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ShopItemClient product={product} />;
};

export default ShopItemServer;