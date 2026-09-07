---
qid: ing_de76f9ede4__aws__local
question: 'Q: How do you evaluate a RAG system when you do not have ground-truth answers?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 472
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:42:37-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the rollout of an RAG (Retrieval‑Augmented Generation) chatbot for enterprise support. The client had no labeled “ground‑truth” QA pairs because the domain knowledge was continuously evolving. My goal: validate that the system was delivering useful, accurate information before a full production launch.

**Approach & Action**  
1. **Define proxy metrics** – I anchored on *Customer Obsession* and *Ownership*. We built an internal “gold‑standard” by selecting 200 high‑value queries from our support logs and having senior subject‑matter experts annotate the top‑retrieved passages and generated responses.  
2. **Automated relevance scoring** – Using Amazon Comprehend’s semantic similarity API, we calculated cosine similarity between user intent embeddings (Amazon Bedrock) and retrieved documents. We set a threshold that matched the expert‑rated “acceptable” score with 92 % precision.  
3. **Human‑in‑the‑loop validation loop** – Every 24 h, the system flagged low‑confidence answers for review; this cycle reduced error rate from 18 % to <4 % in week 2.  
4. **Scalable infrastructure** – Leveraged S3 + Athena for document storage, Lambda for on‑demand retrieval, and Amazon OpenSearch for fast vector search (cost ≈ $0.02/query). This architecture supports >10k concurrent users with 99.9% availability.

**Result**  
Within six weeks we achieved a *mean relevance score of 0.87* (vs. baseline 0.61) and reduced support ticket volume by **27 %**. The iterative, data‑driven loop also identified 15 knowledge gaps that were later incorporated into the knowledge base—demonstrating continuous learning.

**Bar‑raiser takeaways**  
- Ownership: I owned the end‑to‑end validation pipeline.  
- Dive Deep: Chose semantic similarity and human annotation to compensate for lack of ground truth.  
- Quantified impact: 27 % ticket reduction, $0.02/query cost.  
- Learning from failure: Initial threshold too low → iterated until precision hit target.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
