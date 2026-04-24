import data from "./Component/Data2.json" with { type: "json" };


Object.entries(data.amenities).map(([category,item])=>{
    console.log(category);
    item.map((name)=>console.log(name.name));
})