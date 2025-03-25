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
    return new Date(data);
		// return new Intl.DateTimeFormat('pt-BR').format(new Date(data));
	}
	return;
}

export const ConvertDataToXmlFormat = (data: Date | undefined) => {
	if (data) {
    const dateFormated = data.toLocaleDateString();
    const [month, day, year] = dateFormated.split("/");
    const formattedDate = new Date(`${year}-${month}-${day}`);
    return formattedDate.toISOString().split("T")[0];
	}
	return "";
}
