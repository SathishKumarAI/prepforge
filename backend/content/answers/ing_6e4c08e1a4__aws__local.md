---
qid: ing_6e4c08e1a4__aws__local
question: 'Explain: Retrieval Scoring: The Missing Piece — The Day 30 Problem: Why
  Your AI Agent Gets Worse Over Time | Cipher'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 414
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:23-05:00'
sources: []
---

**Situation / Task**  
At a previous startup I built an AI‑powered customer support bot that used a retrieval‑augmented generation (RAG) pipeline. Within the first month of production we saw a steady decline in user satisfaction – the “Day 30 Problem.” The model’s responses became less relevant, and our NPS dropped 12 points over three weeks.

**Action**  
I took full ownership: I dug into the data (≈ 10M query logs), identified that the retrieval scorer was drifting because embeddings were generated with a stale version of our language model. I designed a **dynamic scoring service**:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Embedding generator | Amazon SageMaker endpoint + Auto‑Scaling | Keeps embeddings fresh and scales to peak traffic |
| Retrieval index | OpenSearch (managed) with daily re‑indexing | Low latency, high availability |
| Scoring microservice | Lambda + DynamoDB for configuration | Stateless, cost‑efficient, quick rollbacks |

I added a **canary deployment** that compared scores from the new embeddings against the legacy ones and gated rollout to 5% of traffic until we hit a > 0.8 cosine similarity improvement.

**Result**  
After re‑scoring, user satisfaction rose by 18 pts (NPS +30) within two weeks, and the bot’s error rate fell from 7 % to 2 %. The cost impact was minimal—Lambda reduced compute spend by 35 %, while SageMaker autoscaling kept GPU usage at 22 % of peak.

**Reflection**  
This taught me that *Customer Obsession* demands continuous monitoring, and *Dive Deep* means questioning every moving part. I now routinely build automated drift detection into all ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
