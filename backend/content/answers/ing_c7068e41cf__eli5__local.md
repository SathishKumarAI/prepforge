---
qid: ing_c7068e41cf__eli5__local
question: 'Q: What is "Semantic Drift" in caching, and how do you prevent it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 244
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:51:16-05:00'
sources: []
---

Think of a library that keeps a quick‑look index for every book so readers can find the right page fast. **Semantic drift** happens when that index starts pointing to the wrong part of the story—maybe because the book was updated or rewritten and the index wasn’t refreshed. In caching, it means your stored “shortcut” (the cached data) no longer matches what’s actually on disk; you read old information and get confused.

Preventing drift is like keeping the library’s index in sync with the books:

1. **Set a time‑to‑live** – let each cache entry expire after a short period, forcing a fresh copy before it can become stale.
2. **Version tags** – attach a version number or hash to both the original data and its cached copy; if they mismatch, reload.
3. **Invalidate on write** – whenever you change the source, automatically delete (or update) any related cache entries so no old shortcut lingers.

By regularly refreshing or invalidating caches, you keep your “index” accurate and avoid semantic drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
