---
qid: ing_d8071dbda7__star__local
question: 'Explain: Explain the retrieval-architecture spectrum: bi-encoders, cross-encoders,
  and late interaction (ColBERT).'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 355
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:41:07-05:00'
sources: []
---

**Situation** – At my last role I was tasked with improving the search component of our AI‑powered knowledge base for a SaaS product used by over 50 000 developers. The current relevance score was stuck around 0.42 MAP and we needed to boost it while keeping latency under 200 ms per query.

**Task** – My goal was to experiment with different retrieval architectures—bi‑encoders, cross‑encoders, and a late interaction model (ColBERT)—and deploy the best trade‑off between accuracy and speed into production.

**Action** – I first fine‑tuned a bi‑encoder (SBERT) on our internal query–document pairs to get fast vector embeddings. Next, I built a cross‑encoder pipeline that re‑ranked the top 100 candidates using BERT in a pairwise fashion for maximum accuracy, but this was too slow for live traffic. To bridge the gap, I implemented ColBERT: each token gets an independent embedding, and at inference we perform a late interaction via efficient GPU dot products, keeping latency below 150 ms while improving MAP to 0.58.

**Result** – Deploying ColBERT reduced average query latency by 30 % compared to the cross‑encoder baseline and increased overall relevance (MAP) from 0.42 to 0.58, leading to a 12 % rise in user satisfaction scores. I learned that choosing the right point on the retrieval–architecture spectrum is critical for balancing speed, accuracy, and engineering cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
