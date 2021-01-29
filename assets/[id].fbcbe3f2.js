import{d as t,c as e,_ as a,e as l,i as s,g as o,u as r,h as d}from"./index.7c338284.js";import{_ as n}from"./Button.f18525ee.js";var c=t({render(){let t;return e("div",null,[e(a,null,(o=t=e("section",{class:"overflow-hidden text-gray-600 body-font"},[e("div",{class:"p-8 mx-auto"},[e("div",{class:"flex flex-wrap mx-auto lg:flex-wrap-nowrap"},[e("div",{class:"lg:w-1/2"},[e("img",{alt:"",class:"rounded-xl lg:hidden",src:this.product.squareImage},null),e("img",{alt:"ecommerce",class:"hidden rounded-xl lg:block",src:this.product.verticalImage},null)]),e("div",{class:"space-y-8 lg:w-1/2 lg:mt-0"},[e("div",{class:"flex"},[e("h1",{class:"mb-1 text-3xl font-medium text-gray-900 title-font"},[this.product.name])]),e("p",{class:"leading-relaxed"},[this.product.description]),e("div",{class:"flex justify-between"},[e("span",{class:"text-2xl font-medium text-gray-900 title-font"},[l("$"),this.product.price]),e(n,{action:this.addToCart},{default:()=>"Add To Cart",icon:()=>e("svg",{class:"w-5 h-5 text-gray-50",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"},null)])})])])])])]),"function"==typeof o||"[object Object]"===Object.prototype.toString.call(o)&&!s(o)?t:{default:()=>[t]}))]);var o},components:{Layout:a,Button:n},setup:()=>{const t=d(),e=Number(t.params.id)-1,{product:a}=o(e),{addToCart:l}=r();return{product:a,addToCart:()=>{l(e)}}}});export default c;