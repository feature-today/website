/**
 * This file is part of feature-today.
 * Copyright (C) 2026 feature-today contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { component$ } from "@qwik.dev/core";
import { Slot } from "@qwik.dev/core";

export default component$(() => {
  return (
    <main style={{ maxWidth: "60rem", margin: "0 auto", padding: "2rem 1rem" }}>
      <Slot />
    </main>
  );
});
