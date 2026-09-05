---
qid: ing_6a324b5dd1__star__local
question: 'Explain: RAGAS Framework and Metrics — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 388
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:59:57-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a conversational AI that could pull up-to-date policy documents during client calls. The internal team was worried the retrieval module would return stale or irrelevant information, hurting user trust.

**Task** – My goal was to design an end‑to‑end evaluation pipeline that measured both how well the system retrieved relevant passages and how accurately those passages were used in generated responses, all within a single reproducible framework.

**Action** – I introduced RAGAS (Retrieval-Augmented Generation Assessment System), building on its three core metrics: Retrieval Precision@k, Relevance Score, and Faithfulness (BLEURT‑based). First, I curated a benchmark set of 1,200 user queries paired with gold passage sets from the policy database. Using Elasticsearch for retrieval, I logged top‑10 hits per query. For each generated answer, I ran a transformer‑based entailment model to compute Faithfulness against the source passages. Finally, I scripted a CI pipeline that auto‑runs these metrics on every new model checkpoint, visualizing trends in Grafana.

**Result** – The evaluation revealed a 15 % precision drop when we switched from BM25 to dense embeddings, prompting us to fine‑tune the encoder with domain‑specific data. After re‑training, Precision@10 rose to 88 %, Faithfulness improved by 12 %, and user satisfaction scores climbed from 3.6/5 to 4.4/5 in post‑deployment surveys. I learned that a unified metric suite like RAGAS turns subjective concerns into actionable data, enabling rapid iteration on both retrieval and generation components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
