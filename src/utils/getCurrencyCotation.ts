export const getCurrencyCotation = async (id: string) => {
  const req = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${id.toLowerCase()}/brl.json`
  );
  const data = await req.json();
  return data.brl as number;
};
