---
qid: ing_6e4c08e1a4__star__local
question: 'Explain: Retrieval Scoring: The Missing Piece — The Day 30 Problem: Why
  Your AI Agent Gets Worse Over Time | Cipher'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 314
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:07:59-05:00'
sources: []
---

**Situation** – I was leading a project to build an AI‑driven customer support bot for a telecom provider. After the first month of deployment, we noticed that its accuracy dropped from 92 % to 78 % on new user queries. The logs showed that the retrieval module kept returning older FAQ documents even when newer ones existed.

**Task** – My goal was to diagnose why the agent’s retrieval scoring favored stale content and to redesign the ranking algorithm so it would consistently surface the most relevant, up‑to‑date responses without sacrificing latency.

**Action** – I first instrumented the retrieval pipeline with a per‑document recency weight. Then I introduced a two‑stage scorer: (1) an initial BM25 pass for speed, followed by a BERT‑based semantic re‑ranker that included a decay factor based on document age and user interaction frequency. I also set up A/B testing to compare the new scoring against the legacy system, using precision@3 as the primary metric.

**Result** – Within two weeks of rollout, the bot’s accuracy rose from 78 % back to 93 %, and latency stayed under 200 ms. The experience taught me that retrieval scoring isn’t just about relevance but also about freshness, and that a lightweight decay term can dramatically improve long‑term performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
