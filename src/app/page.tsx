'use client';

import NoSSR from "./NoSSR";
import { Checkbox } from "./Checkbox";

export default function Home() {
  const count = Number(process.env.NEXT_PUBLIC_COUNT) || 1000;

  const renderLoading = () => {
    return <div>{`Loading ${count} checkboxes...`}</div>;
  };

  return (
    <main className={'flex flex-row flex-wrap'}>
      <NoSSR loading={renderLoading()}>
        {new Array(count).fill(0).map((_v, i) => {
          return <Checkbox key={`${i}`} index={i} />
        })}
      </NoSSR>
    </main>
  );
}
