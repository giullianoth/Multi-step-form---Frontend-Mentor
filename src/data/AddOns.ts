import type { AddOnsInterface } from "../interfaces/Plan";

export const AddOns: AddOnsInterface[] = [
    {
        id: 1,
        name: "Online service",
        description: "Access to multiplayer games",
        price: {
            monthly: 1,
            yearly: 10
        }
    },
    {
        id: 2,
        name: "Larger storage",
        description: "Extra 1TB of cloud service",
        price: {
            monthly: 2,
            yearly: 20
        }
    },
    {
        id: 3,
        name: "Customizable profile",
        description: "Custom theme on your profile",
        price: {
            monthly: 2,
            yearly: 20
        }
    },
]