---
qid: ing_7f0f18133d__eli5__local
question: 'Explain: Supported on-heap cache types — Caching'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 289
total_tokens: 448
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:58:11-05:00'
sources: []
---

Imagine your machine‑learning model is a chef who needs quick access to ingredients while cooking. The “on‑heap cache” is the kitchen counter where the chef keeps the most useful items so they don’t have to go back to the pantry every time.

There are three common types of on‑heap caches:

1. **In‑memory key–value store** – Think of a spice rack that lets you grab any spice by name instantly. It’s fast but can hold only what fits on the counter.
2. **Least‑Recently‑Used (LRU) cache** – Like a rotating shelf: when it fills up, the item you haven’t used in a while slides out to make room for a new one. This keeps the most relevant data close at hand.
3. **Write‑back buffer** – Picture a temporary mixing bowl where you keep ingredients that will later be added to the pantry. The chef writes changes here first and only updates the main storage when it’s convenient, reducing constant trips.

These caches live in the program’s memory (the “heap”), so they’re quick but limited by RAM size. They help your model fetch and store intermediate results without slowing down, just as a well‑organized kitchen keeps cooking smooth and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
