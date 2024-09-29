export default function DeleteRecipe({
  params,
}: {
  params: {
    id: number;
  };
}) {
  return <div>DeleteRecipe {params.id}</div>;
}
