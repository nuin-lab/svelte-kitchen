/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import type { PhotoData } from './routes/(children)/intercepting-routes/lib/scripts';

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    interface PageState {
      modalData: { image: PhotoData } | null;
    }
    // interface Platform {}
  }
}

export {};
