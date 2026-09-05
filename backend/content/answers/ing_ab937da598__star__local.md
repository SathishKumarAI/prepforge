---
qid: ing_ab937da598__star__local
question: 'Explain: Just-in-Time Retrieval — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 312
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:15:46-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had a recommendation engine that served loan offers in real time. The model was great, but the latency kept us from meeting our 300 ms SLA because every request required pulling user transaction history from multiple microservices.

**Task** – I needed to reduce end‑to‑end latency by 70% without sacrificing recommendation quality or increasing infrastructure costs.

**Action** – I introduced Just‑in‑Time (JIT) Retrieval with Context Engineering. First, I mapped the minimal contextual features that the model actually used: last credit score change, recent payment streak, and a rolling 30‑day balance mean. Then I built an in‑memory cache layer powered by Redis Streams that only populated these fields when a new transaction arrived—essentially “just‑in‑time.” For context engineering, I created a lightweight feature store that normalised the data on ingestion, applied delta updates, and served the pre‑computed features directly to the inference API. I also added a fallback static snapshot for cold starts.

**Result** – Latency dropped from 420 ms to 120 ms, comfortably under our SLA, while recommendation accuracy (AUC) improved by 3%. The team learned that careful feature selection and real‑time caching can deliver big performance gains without heavy hardware investment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
