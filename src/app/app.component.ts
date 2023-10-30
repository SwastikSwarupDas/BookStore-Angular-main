import { Component } from '@angular/core';

interface Product{
  id:number;
  title: string;
  price: number;
  subtitle: string;
  isbn13:number;
  image: string;
  url:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BookStore';
  products =[
    {
      id:1,
      title:"An Introduction to C & GUI Programming, 2nd Edition",
      subtitle:" Guide to GUI Programming",
      isbn13:9781912047451,
      price:14.92,
      image:"https://itbook.store/img/books/9781912047451.png",
      url:"https://itbook.store/books/9781912047451"
    },
    {
      id:2,
      title:"Snowflake: The Definitive Guide",
      subtitle:"Architecting, Designing, and Deploying on the Snowflake Data Cloud",
      isbn13:9781098103828,
      price:58.90,
      image:"https://itbook.store/img/books/9781098103828.png",
      url:"https://itbook.store/books/9781098103828"
    },
    {
      id:3,
      title:"Python for Data Analysis, 3rd Edition",
      subtitle:"Data Wrangling with pandas, NumPy, and Jupyter",
      isbn13:9781098104030,
      price:36.18,
      image:"https://itbook.store/img/books/9781098104030.png",
      url:"https://itbook.store/books/9781098104030"
    },
    {
      id:4,
      title:"Reliable Machine Learning",
      subtitle:"Applying SRE Principles to ML in Production",
      isbn13:9781098106225,
      price:43.99,
      image:"https://itbook.store/img/books/9781098106225.png",
      url:"https://itbook.store/books/9781098106225"
    },
    {
      id:5,
      title:"Data Visualization with Python and JavaScript, 2nd Edition",
      subtitle:"Scrape, Clean, Explore, and Transform Your Data",
      isbn13:9781098111878,
      price:60.99,
      image:"https://itbook.store/img/books/9781098111878.png",
      url:"https://itbook.store/books/9781098111878"
    },
    {
      id:6,
      title:"Learning Microsoft Power BI",
      subtitle:"Transforming Data into Insights",
      isbn13:9781098112844,
      price:40.46,
      image:"https://itbook.store/img/books/9781098112844.png",
      url:"https://itbook.store/books/9781098112844"
    },
    {
      id:7,
      title:"C++ Software Design",
      subtitle:"Design Principles and Patterns for High-Quality Software",
      isbn13:9781098113162,
      price:47.03,
      image:"https://itbook.store/img/books/9781098113162.png",
      url:"https://itbook.store/books/9781098113162"
    },
    {
      id:8,
      title:"Terraform: Up and Running, 3rd Edition",
      subtitle:"Writing Infrastructure as Code",
      isbn13:9781098116743,
      price:41.99,
      image:"https://itbook.store/img/books/9781098116743.png",
      url:"https://itbook.store/books/9781098116743"
    },
    {
      id:9,
      title:"Flutter and Dart Cookbook",
      subtitle:"Developing Full-Stack Applications for the Cloud",
      isbn13:9781098119515,
      price:50.52,
      image:"https://itbook.store/img/books/9781098119515.png",
      url:"https://itbook.store/books/9781098119515"
    },
    {
      id:10,
      title:"Python Data Science Handbook, 2nd Edition",
      subtitle:"Essential Tools for Working with Data",
      isbn13:9781098121228,
      price:56.16,
      image:"https://itbook.store/img/books/9781098121228.png",
      url:"https://itbook.store/books/9781098121228"
    },
    {
      id:11,
      title:"Raspberry Pi Cookbook, 4th Edition",
      subtitle:"Software and Hardware Problems and Solutions",
      isbn13:9781098130923,
      price:14.99,
      image:"https://itbook.store/img/books/9781098130923.png",
      url:"https://itbook.store/books/9781098130923"
    },
    {
      id:12,
      title:"Azure Maps Using Blazor Succinctly",
      subtitle:"Guide to Azure",
      isbn13:9781642002263,
      price:10.00,
      image:"https://itbook.store/img/books/9781642002263.png",
      url:"https://itbook.store/books/9781642002263"
    },
    {
      id:13,
      title:"Full Stack Quarkus and React",
      subtitle:"Hands-on full stack web development with Java, React, and Kubernetes",
      isbn13:9781800562738,
      price:39.99,
      image:"https://itbook.store/img/books/9781800562738.png",
      url:"https://itbook.store/books/9781800562738"
    },
    {
      id:14,
      title:"Mathematics for Game Programming and Computer Graphics",
      subtitle:"Explore the essential mathematics for creating, rendering, and manipulating 3D virtual environments",
      isbn13:9781801077330,
      price:49.99,
      image:"https://itbook.store/img/books/9781801077330.png",
      url:"https://itbook.store/books/9781801077330"
    },
    {
      id:15,
      title:"Architecting and Building High-Speed SoCs",
      subtitle:"Design, develop, and debug complex FPGA-based systems-on-chip",
      isbn13:9781801810999,
      price:32.99,
      image:"https://itbook.store/img/books/9781801810999.png",
      url:"https://itbook.store/books/9781801810999"
    },
    {
      id:16,
      title:"Web Development with Julia and Genie",
      subtitle:"A hands-on guide to high-performance server-side web development with the Julia programming language",
      isbn13:9781801811132,
      price:39.99,
      image:"https://itbook.store/img/books/9781801811132.png",
      url:"https://itbook.store/books/9781801811132"
    },
    {
      id:17,
      title:"Java Memory Management",
      subtitle:"A comprehensive guide to garbage collection and JVM tuning",
      isbn13:9781801812856,
      price:34.99,
      image:"https://itbook.store/img/books/9781801812856.png",
      url:"https://itbook.store/books/9781801812856"
    },
    {
      id:18,
      title:"Test-Driven Development with C++",
      subtitle:"A simple guide to writing bug-free Agile code",
      isbn13:9781803242002,
      price:44.99,
      image:"https://itbook.store/img/books/9781803242002.png",
      url:"https://itbook.store/books/9781803242002"
    },
    {
      id:19,
      title:"Software Test Design",
      subtitle:"Write comprehensive test plans to uncover critical bugs in web, desktop, and mobile apps",
      isbn13:9781804612569,
      price:44.99,
      image:"https://itbook.store/img/books/9781804612569.png",
      url:"https://itbook.store/books/9781804612569"
    },
    {
      id:20,
      title:"Microservices with Go",
      subtitle:"Building scalable and reliable microservices with Go",
      isbn13:9781804617007,
      price:29.99,
      image:"https://itbook.store/img/books/9781804617007.png",
      url:"https://itbook.store/books/9781804617007"
    }
  ]  

  cartItem:Array<Product> =[]
  total:number =0

  insertProduct(e:Product){
    this.cartItem.push(e)
    this.total = Math.floor(this.total +e.price);
  }

  removeItem(id:number){
    let itemIndex = this.cartItem.findIndex(obj => obj.id === id)
    this.total =Math.floor(this.total - this.cartItem[itemIndex].price)
    this.cartItem.splice(itemIndex,1)
  }
}
