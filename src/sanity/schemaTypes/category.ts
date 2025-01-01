export const Category = {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        {
            name:"name",
            title:"Name",
            type: "string"  
        },
        {
            name: "slug",
            title: "Slug",
            type:"slug",
            option: {
                source: "name",
            },
        }
    ]
}