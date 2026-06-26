'use client';

import { useEffect, useState } from 'react';

function formatCurrentDate() {
 return new Date().toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
 });
}

export function CurrentDate() {
 const [date, setDate] = useState('');

 useEffect(() => {
  setDate(formatCurrentDate());
 }, []);

 return <>{date}</>;
}
