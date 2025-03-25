export const ConvertToReal = (value: number | string | undefined) => {
  if (value) {
    if (typeof value == "string") {
      return new Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency",
      }).format(Number(value));
    }
    return new Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      style: "currency",
    }).format(value);
  }
  return ("");
};

export const ConvertData = (data: string | undefined) => {
	if (data) {
		return new Intl.DateTimeFormat('pt-BR').format(new Date(data));
	}
	return ("");
}
