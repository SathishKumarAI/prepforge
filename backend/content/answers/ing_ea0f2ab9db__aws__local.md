---
qid: ing_ea0f2ab9db__aws__local
question: How does RAG work? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 489
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:40-05:00'
sources: []
---

**Answer (Amazon style)**  

> *“How does RAG work?”*  

**Situation:** In my last role I led a proof‑of‑concept for an enterprise FAQ bot that needed to answer 10,000+ domain questions with sub‑second latency while keeping the model size under 1 GB.  

**Task:** Design a Retrieval‑Augmented Generation (RAG) pipeline that balances accuracy, cost, and availability.  

**Action:**  
1. **Embed & Index** – I used Amazon Bedrock to generate sentence embeddings for all FAQ documents stored in S3, then populated an OpenSearch cluster (dedicated domain with 2 m4.large.search nodes). This gave me *≈ 0.99 cosine‑similarity recall* on a held‑out test set.  
2. **Retrieval** – A Lambda@Edge function queried the cluster at request time, returning the top‑3 passages in < 30 ms.  
3. **Generation** – The same Lambda invoked Bedrock’s `anthropic.claude-3-haiku` model with the retrieved snippets as prompt context, producing answers in ~ 200 ms.  
4. **Caching & Scaling** – CloudFront cached the final JSON responses; auto‑scaling policies kept CPU < 70 % during peak traffic (up to 5k QPS).  

**Result:** The bot answered 92 % of user queries correctly, cut latency from 1.2 s to 0.25 s, and reduced AWS spend by 35 % compared with a monolithic LLM approach.  

*Leadership Principles:* **Customer Obsession** – delivered fast, accurate answers; **Ownership & Dive Deep** – engineered end‑to‑end pipeline, tuned indexing and prompt engineering for measurable gains.  

Bar‑raiser notes: clear ownership of each component, quantified impact (latency, cost), deep dive into embedding choice, and a post‑mortem on why we chose OpenSearch over DynamoDB for similarity search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
