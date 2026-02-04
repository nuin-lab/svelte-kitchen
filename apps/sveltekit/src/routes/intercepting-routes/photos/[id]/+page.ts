import { error } from '@sveltejs/kit';

import { getImage } from '../../lib/scripts';

// Types
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const id = parseInt(params.id, 10);

  if (id) {
    const image = getImage(id - 1);

    if (image) {
      return { image };
    }
  }

  error(404, 'Not Found');
};
