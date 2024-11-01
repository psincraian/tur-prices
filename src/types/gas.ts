export interface GasPrice {
  rate_name: string;
  date: string;
  variable_price: string;
  fixed_price: string;
  currency: string;
}

export interface Supplier {
  name: string;
  website: string;
  phone: string;
  coverage: string[];
}

export const SUPPLIERS: Supplier[] = [
  {
    name: "Naturgy",
    website: "https://www.naturgy.es",
    phone: "900 100 251",
    coverage: ["All Spain"]
  },
  {
    name: "Endesa",
    website: "https://www.endesa.com",
    phone: "800 760 909",
    coverage: ["All Spain"]
  },
  {
    name: "Iberdrola",
    website: "https://www.iberdrola.es",
    phone: "900 225 235",
    coverage: ["All Spain"]
  }
];