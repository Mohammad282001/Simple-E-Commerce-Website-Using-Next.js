import axios from "axios";

export default async function userProfile({ params }) {
    const { id } = params;
    
    const getUser = await axios.post("http://localhost:3001/api", {
        next: { revalidate: 1 },
    });
    
}