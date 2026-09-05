---
qid: ing_c07071b0bf__star__local
question: 'Explain: Strong consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 321
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:55:11-05:00'
sources: []
---

**Situation** – At my previous company we built a recommendation engine that served personalized content to 1 M daily active users. The model outputs were stored in a distributed key‑value store (Cassandra) for low‑latency reads, but we noticed occasional stale recommendations when a user updated their preferences.

**Task** – I was tasked with ensuring that every read reflected the latest model inference within 100 ms so that users saw up‑to‑date suggestions while keeping write throughput high.

**Action** – I introduced a strong consistency layer by switching to an eventually consistent store (Cassandra) for writes but added a lightweight transaction coordinator using Paxos‑based consensus on a small cluster of nodes. Every model update was first written to this quorum, then replicated asynchronously to the main Cassandra replicas. We also implemented a versioning scheme: each recommendation carried a monotonically increasing timestamp, and readers performed a read repair if they detected an older timestamp than the latest known. This hybrid approach gave us linearizable reads for critical user paths without sacrificing write scalability.

**Result** – After deployment we saw a 45 % drop in user complaints about stale content and a 12 % lift in click‑through rate on recommendations. I learned that strong consistency can be achieved cost‑effectively by combining quorum writes with lightweight version checks, especially when latency budgets are tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
