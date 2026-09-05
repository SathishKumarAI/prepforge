---
qid: ing_69ec1b0d00__eli5__local
question: 'Explain: Database Tier — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 229
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:23:42-05:00'
sources: []
---

Imagine your machine‑learning model is a busy kitchen that needs to serve many customers at once. The **database tier** is the pantry where all ingredients (training data, feature tables, labels) are stored. **Scalability** means making sure the pantry can keep up with more cooks and larger recipes without slowing down.

A simple way to scale the pantry is by adding more shelves (horizontal scaling). Each shelf holds a portion of the ingredients; when one gets full, you bring in another. You also split the recipe book into sections (sharding) so each cook only looks at the part they need. If a single shelf becomes too heavy, you can replace it with lighter ones or add more workers to carry items.

In ML systems this translates to distributing data across many database servers, partitioning tables by key, and replicating copies for read‑heavy workloads. The goal: keep every “cook” (model training job) fed quickly, no matter how many recipes are being cooked simultaneously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
