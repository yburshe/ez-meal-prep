export default function DeleteIngredient({
  params,
}: {
  params: {
    id: number;
  };
}) {
  return <div>DeleteIngredient {params.id}</div>;
}
