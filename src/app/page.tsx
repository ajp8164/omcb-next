'use client';

import { Checkbox } from "./Checkbox";

export default function Home() {
  return (
    <main className={'flex flex-row flex-wrap'}>
      {new Array(200000).fill(0).map((_v, i) => {
        return <Checkbox key={`${i}`} index={i} />
      })}
    </main>
  );
}
