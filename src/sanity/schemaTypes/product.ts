export const Product= {
    name:"Product",
    title:"Product",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"

        },
        {
            name :"slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
            },
        },
        {
            name :"price",
            title: "Price",
            type: "number",
        },
        {
            name: "Category",
            title: "Category",
            type:"reference",
            to:[{type: 'category'}]
        },
        {
            name:"image",
            title: "Image",
            type:"image"
        }
    ]
}