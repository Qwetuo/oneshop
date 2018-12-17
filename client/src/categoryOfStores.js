let categories = [
  {
    key: "wallet",
    value: "wallet",
    text: "wallet"
  },
  {
    key: "shoes",
    value: "shoes",
    text: "shoes"
  },
  {
    key: "electronics",
    value: "electronics",
    text: "electronics"
  },
  {
    key: "clothing",
    value: "clothing",
    text: "clothing"
  },
  {
    key: "jewelry",
    value: "jewelry",
    text: "jewelry"
  },
  {
    key: "department",
    value: "department",
    text: "department store"
  },
  {
    key: "florist",
    value: "florist",
    text: "florist"
  },
  {
    key: "pet",
    value: "pet",
    text: "pet"
  },
  {
    key: "hair",
    value: "hair",
    text: "hair salon"
  },
  {
    key: "furniture",
    value: "furniture",
    text: "furniture"
  },
  {
    key: "supermarket",
    value: "supermarket",
    text: "supermarket"
  },
  {
    key: "beauty",
    value: "beauty",
    text: "beauty and wellness"
  },
  {
    key: "books",
    value: "books",
    text: "books and stationery"
  },
  {
    key: "sports",
    value: "sports",
    text: "sports"
  }
];

const sortText = array => {
  return array.sort((a, b) => {
    const aText = a.text.toLowerCase();
    const bText = b.text.toLowerCase();
    if (aText < bText) return -1;
    if (aText > bText) return 1;
    return 0;
  });
};

const convertTextToTitleCase = array => {
  const minors = [
    "a",
    "an",
    "the",
    "and",
    "but",
    "or",
    "nor",
    "at",
    "by",
    "of"
  ];
  return array.map(category => {
    category.text = category.text
      .toLowerCase()
      .split(" ")
      .map(word => {
        if (minors.indexOf(word) > 0) return word
        else return word[0].toUpperCase() + word.substring(1)
      })
      .join(" ");
    return category;
  });
};

categories = sortText(categories);
categories = convertTextToTitleCase(categories);

export default categories;
