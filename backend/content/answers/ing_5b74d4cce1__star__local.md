---
qid: ing_5b74d4cce1__star__local
question: Why Not Just Use LLM for Everything? — Recommendation Engine
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 313
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:19-05:00'
sources: []
---

**Situation:** At my previous e‑commerce startup we launched a new product line and wanted to boost cross‑sell revenue. The analytics team had built an LLM‑based recommendation bot that could generate personalized suggestions from customer chat logs, but it was slow and costly to run at scale.

**Task:** I needed to design a lightweight recommendation engine that could deliver real‑time suggestions for the top 10% of high‑value customers while keeping latency under 50 ms and infrastructure costs below $0.02 per request.

**Action:** I implemented a hybrid model: a shallow gradient‑boosted tree (XGBoost) trained on explicit features (purchase history, time since last buy, category affinity) served as the core predictor, then fed its output into a fine‑tuned LLM only for edge cases where confidence was low. We used Redis for caching frequent user vectors and TensorRT to optimize inference on GPUs. I also set up A/B tests to compare click‑through rates against the pure LLM approach.

**Result:** The hybrid engine cut response time from 300 ms to 35 ms, reduced inference cost by 70%, and increased cross‑sell revenue by 18% over two months. I learned that targeted use of LLMs—only when needed—maximizes performance while keeping resources in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
