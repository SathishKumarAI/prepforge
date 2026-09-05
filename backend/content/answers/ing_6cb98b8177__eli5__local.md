---
qid: ing_6cb98b8177__eli5__local
question: 'Explain: Disadvantage(s): failover — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 320
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:28:40-05:00'
sources: []
---

Think of a huge library that keeps every book on many shelves so if one shelf breaks you can still read the story from another. That’s what *fail‑over* does for data systems – it copies information to backup servers so users never see a dead link.

**Why it hurts a machine‑learning project**

1. **More moving parts** – Every copy must stay in sync. When a model is retrained, you have to push the new weights to every replica. A missed update means some workers are using old numbers and produce wrong predictions.

2. **Higher cost** – Extra servers mean more electricity, cooling, and maintenance bills. In a research lab where budgets are tight, that extra spend can be hard to justify.

3. **Stale reads** – If the primary server is busy, a backup might answer a request with slightly older data. For a model that needs the freshest training statistics, even a one‑second lag can reduce accuracy.

4. **Complex debugging** – When something goes wrong, you have to trace whether the issue happened on the main node or one of the backups. The more copies you keep, the harder it is to pinpoint the culprit.

So while fail‑over gives robustness, it also adds layers of complexity and cost that can slow down experimentation and inflate budgets—especially in fast‑moving machine‑learning workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
