export interface PlanPeriodInterface {
    monthly: number
    yearly: number
}

export interface BenefitsInterface {
    period: string
    benefit: string
}

export interface PlanInterface {
    id: number
    name: string
    icon: string
    price: PlanPeriodInterface
    benefits?: BenefitsInterface
}

export interface AddOnsInterface {
    id: number
    name: string
    description: string
    price: PlanPeriodInterface
}

export interface PlanDetailsInterface {
    name?: string
    email?: string
    phone?: string
    plan?: PlanInterface
    period?: string
    addOns?: AddOnsInterface[]
    totalPrice?: number
}