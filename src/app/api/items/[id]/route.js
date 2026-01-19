import { getItemById, getAllItems } from "@/lib/itemsData";

export async function GET(request, context) {
  const { params } = context;
  const resolvedParams = typeof params?.then === "function" ? await params : params;

  const item = getItemById(resolvedParams?.id);

  if (!item) {
    return Response.json(
      {
        message: "Item not found",
        requestedId: String(resolvedParams?.id),
        availableIds: getAllItems().map((i) => i.id),
      },
      { status: 404 }
    );
  }

  return Response.json(item);
}
