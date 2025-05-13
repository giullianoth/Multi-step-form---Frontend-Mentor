import type { PlanInterface } from "../interfaces/Plan";
import iconArcade from "/images/icon-arcade.svg"
import iconAdvanced from "/images/icon-advanced.svg"
import iconPro from "/images/icon-pro.svg"

export const Plans: PlanInterface[] = [
    {
        id: 1,
        name: "Arcade",
        icon: iconArcade,
        price: {
            monthly: 9,
            yearly: 90
        },
        benefits: {
            period: "yearly",
            benefit: "2 months free"
        }
    },
    {
        id: 2,
        name: "Advanced",
        icon: iconAdvanced,
        price: {
            monthly: 12,
            yearly: 120
        },
        benefits: {
            period: "yearly",
            benefit: "2 months free"
        }
    },
    {
        id: 3,
        name: "Pro",
        icon: iconPro,
        price: {
            monthly: 15,
            yearly: 150
        },
        benefits: {
            period: "yearly",
            benefit: "2 months free"
        }
    },
]