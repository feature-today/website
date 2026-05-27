/**
 * This file is part of feature-today.
 * Copyright (C) 2026 feature-today contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";

export default component$(() => {
  return (
    <section>
      <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
        feature&#8209;today
      </h1>
      <p style={{ fontSize: "1.25rem", opacity: 0.85, marginTop: 0 }}>
        Build the feature you need <em>today</em>, ship the feature you need
        tomorrow.
      </p>

      <p style={{ marginTop: "2rem" }}>
        <a href="https://github.com/feature-today">GitHub →</a>
      </p>
    </section>
  );
});

export const head: DocumentHead = {
  title: "feature-today",
  meta: [
    {
      name: "description",
      content:
        "feature-today — a small toolkit to ship features without rewriting helpers.",
    },
  ],
};
