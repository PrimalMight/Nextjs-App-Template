// for testing purposes mocking props to quickly test and develop components

import { ICatCard } from './CatCard';

const base: ICatCard = {
  tag: 'Felines',
  title: "What's new in Cats",
  body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Squi perferendis molestiane non nemo doloribus.',
  author: 'Alex',
  time: '2h ago',
};

export const mockCatCardProps = {
  base,
};
