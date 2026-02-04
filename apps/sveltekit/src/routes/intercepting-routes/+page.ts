import { getAllImages } from './lib/scripts';

// Types
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return { images: getAllImages() };
};
