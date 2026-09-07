---
qid: ing_da3cd65311__aws__local
question: 'Q78: Someone on your team suggests replacing your entire RAG pipeline with
  a 1M-token context window and just loading all documents every request. How do you
  evaluate this idea?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 415
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:32:01-05:00'
sources: []
---

**Situation** – In my last role as a Lead ML Engineer for an enterprise search product, the team proposed swapping our Retrieval‑Augmented Generation (RAG) pipeline for a single 1 M‑token context window that pulls all documents on every request.

**Task** – I had to evaluate whether this change would improve customer experience without blowing up costs or latency, and if it aligned with Amazon’s *Customer Obsession* and *Ownership* principles.

**Action**  
1. **Quantify impact** – Ran a 30‑day A/B test on our production traffic (≈ 5 M queries/day). The proposed approach increased per‑query token count from ~10k to ~1 M, predicting a 100× rise in compute cost on Amazon SageMaker and a 3–4× latency increase.  
2. **Design alternative** – Built an incremental retrieval system using *Amazon Kendra* for semantic search + *OpenSearch* for vector indexing. Each request pulls only the top‑10 docs (≈ 50k tokens) and feeds them to a fine‑tuned LLM on SageMaker, cutting cost by 70% and latency by 60%.  
3. **Risk & trade‑offs** – Discussed with product owners that the “all documents” approach would degrade relevance due to noise and violate data privacy limits (over‑exposing internal docs).  

**Result** – Adopted the incremental pipeline, reducing infrastructure spend from $120k/month to $36k/month while maintaining a 95 % accuracy on intent classification. The decision was praised for *Ownership* (taking full responsibility for cost & performance) and *Dive Deep* (examining metrics before moving). I documented lessons learned in our internal playbook, ensuring future teams consider scalability first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
