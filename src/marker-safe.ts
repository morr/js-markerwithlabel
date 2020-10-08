/**
 * Copyright 2020 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { extend } from "./util";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MarkerSafe extends google.maps.Marker {}

/**
 * @ignore
 */
export class MarkerSafe {
  constructor(options: google.maps.MarkerOptions) {
    extend(MarkerSafe, google.maps.Marker);
    google.maps.Marker.call(this, options);
  }
}
