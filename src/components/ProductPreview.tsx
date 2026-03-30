import type { StoreItem } from "../types";


export default function ProductPreview({ storeItem, itemKey }: { storeItem : StoreItem, itemKey : number}) {

    return (
        <list-item className="p-2" item-key={itemKey.toString()}>
            <text className="text-sm">{storeItem.title}</text>
            <text className="text-xs">${storeItem.price}</text>
            <image
                src={storeItem.thumbnail}
                className="rounded-lg mb-2 h-8 w-8"
            />
        </list-item>
    )
}
