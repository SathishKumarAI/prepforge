---
qid: ing_91ea2d5499__star__local
question: 'Explain: In our search systems, for example, the — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 322
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:24:42-05:00'
sources: []
---

**Situation** – When I joined the Search Ranking team at a mid‑size e‑commerce platform, our click‑through rate (CTR) for product recommendations was stuck at 2.1 % on mobile, far below industry benchmarks. The existing rule‑based ranking engine had been in place for years and was hard to tweak without risking other metrics.

**Task** – I was tasked with designing a machine learning model that could learn from user interaction data to surface higher quality results, while keeping latency under 80 ms so the search page stayed snappy.

**Action** – I built a lightweight gradient‑boosted decision tree (XGBoost) pipeline. First, I engineered features like dwell time, scroll depth, and semantic similarity between query tokens and product titles using Sentence‑Transformers. To satisfy the latency constraint, I distilled the model into a shallow neural net with TensorFlow Lite and cached the embeddings in an in‑memory key‑value store. I also implemented A/B testing infrastructure that rolled out predictions to 10 % of traffic initially, monitoring for bias and stability.

**Result** – Within two months, CTR rose from 2.1 % to 3.6 % (a 71 % lift), while latency stayed at 75 ms on average. I learned the importance of balancing model complexity with real‑time constraints, and that feature engineering—especially semantic embeddings—can dramatically improve relevance without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
