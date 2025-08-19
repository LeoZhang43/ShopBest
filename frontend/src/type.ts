export interface ShoppingResults {
  delivery: string,
  extracted_price: number,
  immersive_product_page_token: string,
  multiple_sources: boolean,
  position: number,
  price: string,
  product_id: string,
  product_link: string,
  rating: number,
  reviews: number,
  serpapi_immersive_product_api: string,
  serpapi_product_api: string,
  serpapi_thumbnails: string[],
  snippet: string,
  source: string,
  source_icon: string,
  thumbnail: string,
  thumbnails: string[],
  title: string,
  second_hand_condition: string,
  extensions: string[],
  extracted_old_price: number,
  old_price: string
  tag: string
}

export interface SearchParameters {
  device: string;
  engine: string;
  gl: string;
  google_domain: string;
  hl: string;
  q: string;
  shoprs: string;
}

export interface FilterElements {
  input_type: string;
  options: Option[];
  type?: string;
}

export interface CheckedElements {
  text: string,
}

export interface Option {
  serpapi_link: string;
  shoprs: string;
  text: string;
}

export interface GoogleShopping {
  filters: FilterElements[];
  search_parameters: SearchParameters;
  shopping_results: ShoppingResults[];
}

export interface FilterStatus {
  filter_elements: FilterElements[],
  checked_elements: CheckedElements[],
}