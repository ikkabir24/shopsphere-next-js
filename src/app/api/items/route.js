import { getAllItems } from "@/lib/itemsData";

export async function GET() {
  return Response.json(getAllItems());
}
