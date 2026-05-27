/**
 * This file is part of feature-today.
 * Copyright (C) 2026 feature-today contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Vercel Edge runtime entry. Wraps the Qwik Router app inside the Vercel Edge
 * middleware so requests can be served from edge functions.
 */

import { createQwikRouter } from "@qwik.dev/router/middleware/vercel-edge";
import render from "./entry.ssr";

export default createQwikRouter({ render });
