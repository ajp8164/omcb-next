'use client';

import { Checkbox } from "./Checkbox";

export default function Home() {
  const count = process.env.NEXT_PUBLIC_COUNT || 1000;

  return (
    <main className={'flex flex-row flex-wrap'}>
      {new Array(count).fill(0).map((_v, i) => {
        return <Checkbox key={`${i}`} index={i} />
      })}
    </main>
  );
}
