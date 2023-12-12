import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        // console.log(newCategory);
        setCategories([newCategory, ...categories]);

    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* Listado de gif */}

            {
                categories.map(category => (
                    <GifGrid key={category}
                        category={category} />
                ))
            }
        </>
    )
}


