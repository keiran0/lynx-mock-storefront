import { useState, useEffect } from "react" 
import ProductPreview from "./ProductPreview";
import type { StoreItem } from "../types";

export default function Content() {

    const url = "https://dummyjson.com/products?limit=40&skip=0";

    const [ storeContent, setStoreContent ] = useState<StoreItem[]>([]); 

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.products)
                setStoreContent(data.products);
            })
            .catch(err => console.error(err))
    }, [])


    return <view className="h-full">
        <text>Shop</text>
        <view className="h-[calc(100vh-80px)]">
            <list 
                className="h-full"
                style="height:100%;"
                list-type="waterfall"
                span-count={2}
                scroll-orientation="vertical"
                scroll-y="true"
            >
                {storeContent.map(item => <ProductPreview itemKey={item.id} storeItem={item} />)}
            </list>
        </view>

    </view>
}
