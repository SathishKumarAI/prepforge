---
qid: ing_6fcb066125__star__local
question: 'Explain: Legal Retrieval Dataset — BigLaw Bench Deep Dive: Retrieval |
  Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 300
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:25-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a legal research assistant for the litigation team. We had a massive internal repository of court opinions and statutes but search results were slow and often irrelevant because our keyword engine didn’t understand legal context.

**Task** – My goal was to design a retrieval system that could surface the most pertinent cases in under 2 seconds, improving lawyer productivity by at least 30%.

**Action** – I started by curating a *Legal Retrieval Dataset* from BigLaw Bench: we extracted 120k annotated case passages, each labeled with citation relevance and legal topic tags. Using ElasticSearch’s dense vector plugin, I trained a transformer (LegalBERT) fine‑tuned on the dataset to generate embeddings for both queries and documents. I then implemented approximate nearest neighbor search via HNSW, tuned recall/precision trade‑offs in the pipeline, and added a post‑filter that matched jurisdiction metadata.

**Result** – The new system cut average query latency from 4.7 s to 1.3 s and increased top‑5 precision from 45% to 78%, yielding a 32% boost in the team’s daily research throughput. I learned that domain‑specific fine‑tuning plus efficient ANN indexing is key for high‑stakes legal retrieval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
