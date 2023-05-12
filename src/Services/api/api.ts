import axiosInstance from "./axios"

interface company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

interface user {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    company: company;
    address: address;
    website: string;
}

export const getUsers = async () => {
    try {
        const response = await axiosInstance.get<user[]>('/users');
        return response.data;
    } catch(e) {
        console.error('Get Users Failed')
    }
}