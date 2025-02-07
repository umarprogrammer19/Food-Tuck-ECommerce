import { BASE_URL } from "./baseUrl"

export async function loginUser(email: string, password: string) {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })

        if (!response.ok) {
            throw new Error("Login failed")
        }

        return await response.json()
    } catch (error) {
        console.log(error);
        throw new Error("Login failed")
    }
}

export async function signupUser(fullname: string, email: string, password: string) {
    try {

        const response = await fetch(`${BASE_URL}/api/v1/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fullname, email, password }),
        })

        if (!response.ok) {
            throw new Error("Signup failed")
        }

        return await response.json()
    } catch (error) {
        console.log(error);
        throw new Error("Signup failed")
    }
}