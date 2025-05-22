'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function MenuClient({ onUsernameFound }: { onUsernameFound: (username: string) => void }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const username = searchParams.get("username");
    if (username) {
      onUsernameFound(username);
    }
  }, [searchParams, onUsernameFound]);

  return null;
}