---
qid: ing_46d7d08b96__eli5__local
question: 'Explain: Advantages and disadvantages of write-through'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 259
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:29:23-05:00'
sources: []
---

Imagine a busy kitchen where the chef (your computer) keeps a copy of every ingredient (data) in a small counter drawer (cache). **Write‑through** means that whenever the chef puts an ingredient into the drawer, he also writes it down on the pantry list at the same time.  

**Advantages**

1. **Freshness** – The pantry list is always up to date; if the kitchen breaks or restarts, no data is lost because everything has already been recorded.
2. **Simplicity** – No extra step of later reconciling what was in the drawer with what’s on the list.

**Disadvantages**

1. **Speed hit** – Each time an ingredient is added to the drawer, the chef must also write it down, so every “write” takes longer.
2. **Wear and tear** – The pantry list (usually a slower storage medium) gets hammered more often, which can reduce its lifespan.

In short, write‑through keeps data safe and consistent but slows writes and stresses the long‑term storage device.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
