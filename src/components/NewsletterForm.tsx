'use client';

import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterForm() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        console.log('Newsletter signup:', email);

        toast({
            title: "Thank you for subscribing!",
            description: "You're now on the list for the latest trends and promotions.",
        });
        
        e.currentTarget.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-2">
            <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-background"
                required
            />
            <Button type="submit" className="w-full sm:w-auto shrink-0">Subscribe</Button>
        </form>
    );
}
