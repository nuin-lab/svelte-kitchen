/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { error } from '@sveltejs/kit';

import { getImage } from '../../lib/scripts';

// Types
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  if (/^\d+$/.test(params.id)) {
    const id = Number(params.id);

    if (id > 0) {
      const image = getImage(id - 1);

      if (image) {
        return { image };
      }
    }
  } else {
    error(400, 'Bad Request: "id" must be an integer');
  }

  error(404, 'Not Found');
};
