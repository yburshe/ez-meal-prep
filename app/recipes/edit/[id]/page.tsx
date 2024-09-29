export default function EditRecipe({
  params,
}: {
  params: {
    id: number;
  };
}) {
  return <div>EditRecipe {params.id}</div>;
}
