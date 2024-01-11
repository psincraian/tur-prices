# Gas TUR Prices in Spain API

## Overview

Welcome to the TUR Prices for Spain! This project aims to provide easy access to Gas TUR (Tarifa de Último Recurso) prices in Spain in a convenient and parseable format. By making this data accessible, we hope to empower developers, businesses, and individuals to utilize gas price information for various applications.

## Features

- **Real-time Data:** The API returns real-time Gas TUR prices, ensuring that you always have the latest information.

- **Easy to Integrate:** The API is designed to be straightforward to integrate into your projects, whether you're building a mobile app, a website, or any other application.

- **Simple Data Format:** Gas prices are returned in a clear and easy-to-parse JSON format, making it hassle-free to incorporate into your code.

## Usage

To get started, simply make a GET request to the following endpoint:

```
https://tur-prices.petru.tech/api/v1/prices.json
```

### Example Response:

```json
[
  {
    "rate_name": "TUR1",
    "date": "2023-10",
    "variable_price": "0.0511",
    "fixed_price": "3.85",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR2",
    "date": "2023-10",
    "variable_price": "0.0481",
    "fixed_price": "7.12",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR3",
    "date": "2023-10",
    "variable_price": "0.0454",
    "fixed_price": "14.92",
    "currency": "EUR"
  }
]
```


## Contribution

We welcome contributions from the community! If you find a bug, have an idea for a new feature, or want to improve the documentation, feel free to open an issue or submit a pull request.


Happy coding!