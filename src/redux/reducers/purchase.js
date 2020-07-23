const init = {
    cart: []
}

const cartReducer = function (state = init, { type, payload }) {
    switch (type) {
        case "CART_UPDATE_FROM_SERVER":
            console.log("payload", payload)

            const itemsFromServer = payload.items.reduce((acc, item) => {
                for (let i = 0; i < acc.length; i++) {
                    if (acc[i].event._id == item._id) {
                        acc[i].count++;
                        console.log(acc[i]);
                        return acc;
                    }
                }
                acc.push({ event: item, count: 1 });
                return acc;
            }, [])

            console.log("foo", itemsFromServer)
            return { ...state, cart: itemsFromServer }
        case "RESET":
            return { ...init }
        case "CART_UPDATE_FROM_LOCAL":
            let found = false;
            state.cart.map((item, index) => {
                if (payload.event._id == item.event._id) {
                    state.cart[index].count += payload.count
                    found = true;
                }
            })
            if (!found) {
                state.cart.push(payload)
            }
            console.log("after updte", state.cart);
            return { ...state, cart: state.cart }
        case "RESET":
        default:
            return state
    }
}

export default cartReducer