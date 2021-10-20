export interface listOfUsers {
    data: user[],
    page: number,
    pet_page: 6
    total: number,
    total_pages: number
    support: {
        text: string,
        url: string
    },
}

export interface user {
    avatar: string,
    first_name: string,
    id: number,
    last_name: string,
    email: string
}