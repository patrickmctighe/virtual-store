

export function decreaseQt(item) {
    if (item.quantity === 0) {
        console.log("Item already at 0");
        return;
    } else {
        item.quantity--;
        console.log(item.quantity);
    }
}