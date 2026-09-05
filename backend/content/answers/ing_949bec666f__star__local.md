---
qid: ing_949bec666f__star__local
question: 'Explain: Customer Outcomes — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 357
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:30:09-05:00'
sources: []
---

**Situation** – At my previous role I joined a SaaS startup building an AI‑powered knowledge hub for enterprises. The product was still early in the beta phase and we had a clear metric: “time to first insight” for users, which was hovering at 12 hours—too long for our target customers who needed instant answers.

**Task** – My goal was to reduce that time by at least 50% while keeping the model’s precision above 90%. I needed to redesign the recommendation pipeline and improve data ingestion speed without overloading the server budget.

**Action** – First, I profiled the existing inference stack with PyTorch ONNX Runtime and identified bottlenecks in the embedding lookup. I switched from a pure SQL store to an in‑memory Redis cache for embeddings, cutting retrieval latency by 70%. Next, I implemented a lightweight feature‑selection layer using SHAP values to prune irrelevant features before feeding them into the transformer model, which reduced batch size and GPU memory usage. Finally, I set up A/B testing with Optimizely to roll out incremental changes while monitoring precision metrics in real time.

**Result** – The “time to first insight” dropped from 12 hours to 4 hours—a 66% improvement—while accuracy stayed at 92%. User satisfaction scores rose by 18 points on our internal NPS survey, and we secured an additional $2 M in Series B funding. I learned that marrying model efficiency with production engineering can deliver tangible customer value faster than incremental feature tweaks alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
