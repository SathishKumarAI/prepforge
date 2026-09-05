---
qid: ing_968e7768ab__star__local
question: What is a reranker, and why add one after vector search?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 280
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:06-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we built a document retrieval engine for compliance queries. Users typed natural language questions and the system returned a list of PDFs ranked by cosine similarity against an embedding index.

**Task** – After deploying, analysts noticed that while the top‑10 hits were relevant overall, important documents were buried below highly similar but less useful ones. The goal was to boost precision at rank 1–3 without sacrificing recall or adding latency.

**Action** – I introduced a reranker: a lightweight BERT‑based model fine‑tuned on pairs of user queries and candidate document snippets. First, the vector search produced 20 candidates (speed: <30 ms). Then the reranker re‑ordered them using cross‑entropy loss on manually labeled relevance data, leveraging the query context to discriminate subtle differences. I deployed it as a separate microservice behind an async queue so the initial page load stayed fast.

**Result** – Precision@3 jumped from 0.62 to 0.81 (a 30 % lift), and user satisfaction scores rose by 18 %. The reranker added only ~15 ms per request, well within our SLA, and taught me how hybrid ranking balances retrieval speed with deep semantic understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
