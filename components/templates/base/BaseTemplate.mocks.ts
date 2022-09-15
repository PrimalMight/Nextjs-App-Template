// for testing purposes mocking props to quickly test and develop components

import { IBaseTemplate } from './BaseTemplate';

const base: IBaseTemplate = {
  sampleTextProp: 'Hello world!',
};

export const mockBaseTemplateProps = {
  base,
};
