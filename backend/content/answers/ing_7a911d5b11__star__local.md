---
qid: ing_7a911d5b11__star__local
question: 'Q21: How do you evaluate and compare embedding models?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 300
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:39:11-05:00'
sources: []
---

**Situation:** In my last role I was tasked with selecting an embedding model for a product recommendation engine that served over 500,000 daily users. The current model’s cosine similarity scores were drifting, causing recommendation relevance to drop by 12% in A/B tests.

**Task:** I needed to evaluate several candidate models—BERT‑base, Sentence‑Transformers, and a custom fine‑tuned DistilBERT—to determine which would deliver the best trade‑off between latency, accuracy, and deployment cost.

**Action:** First, I built a benchmark dataset of 20,000 user query–item pairs with human relevance labels. Using Spark, I computed embeddings for each model and measured Mean Reciprocal Rank (MRR) and Precision@10. Next, I profiled inference time on our GPU cluster and calculated per‑request cost. To capture real‑world variability, I ran a 48‑hour load test simulating peak traffic. Finally, I presented a weighted scorecard that combined accuracy, latency, and cost.

**Result:** DistilBERT emerged as the winner: MRR improved from 0.32 to 0.41 (+28%), latency dropped by 35%, and deployment cost fell 40%. The new model lifted recommendation CTR by 9% in production, and I documented a reusable evaluation pipeline that’s now standard for all future embedding selections.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
