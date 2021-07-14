const Product = require("./model/product");

class FakeDB {
  constructor() {
    this.products = [
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of best screens",
        heading1: "Sample Text1",
        heading2: "Sample Text2",
        heading3: "Sample Text3",
        headingtext1:
          "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
        headingtext2:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        headingtext3:
          "sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone Mini",
        price: 699,
        description: "A large great with one of best cameras",
        heading1: "Sample Text1",
        heading2: "Sample Text2",
        heading3: "Sample Text3",
        headingtext1:
          "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
        headingtext2:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        headingtext3:
          "sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone Standard",
        price: 299,
        description: "",
        heading1: "Sample Text1",
        heading2: "Sample Text2",
        heading3: "Sample Text3",
        headingtext1:
          "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
        headingtext2:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        headingtext3:
          "sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone Special",
        price: 999,
        description: "",
        heading1: "Sample Text1",
        heading2: "Sample Text2",
        heading3: "Sample Text3",
        headingtext1:
          "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
        headingtext2:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        headingtext3:
          "sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text",
      },
    ];
  }

  async initDB() {
    await this.cleanDB();
    this.pushProductsTodo();
  }

  async cleanDB() {
    await Product.deleteMany({});
  }

  pushProductsTodo() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }

  seeDb() {
    this.pushProductsTodo();
  }
}

module.exports = FakeDB;
