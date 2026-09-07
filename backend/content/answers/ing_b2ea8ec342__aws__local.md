---
qid: ing_b2ea8ec342__aws__local
question: 'Explain: Case Study 01: Enterprise RAG Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 455
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:22-05:00'
sources: []
---

**Situation & Task**  
At my previous firm I was tasked to launch an enterprise‑grade Retrieval‑Augmented Generation (RAG) assistant that could answer policy queries across 1,200 GB of internal docs while keeping latency under 2 s for 95 % of requests.

**Action**  
I owned the end‑to‑end solution:  
- **Ingest & Index** – used Amazon Kendra to crawl and semantically index PDFs, SharePoint files, and S3 objects; Kendra’s vector embeddings reduced search cost by 30 %.  
- **Generation** – deployed a fine‑tuned Llama‑2 on SageMaker Neo for edge inference, wrapped in an API Gateway + Lambda layer that injected the top‑5 ranked Kendra snippets.  
- **Scalability & Availability** – leveraged DynamoDB to cache query–snippet pairs (TTL = 12 h) and Auto Scaling on Lambda; achieved 99.9 % uptime with a 15‑minute failover to a secondary region.  
- **Cost Control** – switched from on‑demand to spot instances for SageMaker training, cutting spend by 45 %.  

**Result**  
Within two months we hit <2 s latency for 97 % of queries and cut manual FAQ ticket volume by 68 %, saving ~$200K annually. The RAG assistant also received a 4.8/5 employee satisfaction score.

**Leadership Principles Highlighted**  
- **Customer Obsession** – built the feature around actual policy‑search pain points.  
- **Ownership & Dive Deep** – engineered every layer, from Kendra indexing to Lambda caching, and iterated on performance metrics.  

Bar‑raisers expect clear ownership, data‑driven impact, deep technical justification, and lessons learned (e.g., we initially over‑provisioned GPU nodes; after profiling, we migrated to spot instances).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
