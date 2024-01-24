import { getCountryByCode } from "@/app/lib/data";
import { Country } from "@/app/lib/definitions";

export default async function DetailPage({
  params,
}: {
  params: { code: string };
}) {
  const country: Country = await getCountryByCode(params.code);

  return (
    <div>
      <h1>Detail page: {country.name.common}</h1>
    </div>
  );
}
