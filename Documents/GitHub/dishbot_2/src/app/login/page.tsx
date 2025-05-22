'use client'

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get('username') as string;
        const password = formData.get('password');

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password}),
        })

        if (response.ok) {
            router.push(`/menu?username=${encodeURIComponent(username)}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="username" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password"/>
            <button type="submit">Login</button>
        </form>
    )
}