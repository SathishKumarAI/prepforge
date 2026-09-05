---
qid: ing_717c54066a__eli5__local
question: 'Explain: Queues versus streams — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 198
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:36:15-05:00'
sources: []
---

Think of a **queue** like a line at a bakery where customers wait their turn. Each person (a data task) gets served one after another; the line is *ordered* and no one jumps ahead. A **stream**, on the other hand, is like a news ticker that keeps pushing new headlines continuously—data flows in as soon as it arrives, without waiting for the previous item to finish.

At Meta, asynchronous computing uses both: queues hold jobs that must be processed in a strict order (e.g., user‑profile updates), while streams feed real‑time signals (like live video frames) straight into models. The key learning is that mixing them lets systems stay responsive—streams keep the data pipeline humming, and queues ensure reliability by preserving order when needed. This balance keeps services fast yet consistent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
