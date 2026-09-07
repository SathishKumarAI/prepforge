---
qid: ing_b75ede00be__aws__local
question: 'Explain: RAG Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 537
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:26-05:00'
sources: []
---

**RAG (Retrieval‑Augmented Generation) is a two‑step pipeline that blends large language models (LLMs) with external knowledge sources to produce accurate, up‑to‑date responses.**

---

### *Situation*  
At my previous role I led the migration of an internal FAQ chatbot from static LLM answers to a live RAG system. The bot handled ~50 k daily queries and had a 60 % factual error rate.

### *Task*  
Reduce hallucinations, improve answer relevance, and keep latency under 500 ms while scaling to 200 k QPS.

### *Action*  
1. **Document Store** – Indexed 3 M knowledge‑base documents in **Amazon OpenSearch Service** (dedicated cluster, 2 AZs for HA).  
2. **Retriever** – Deployed a fine‑tuned Sentence‑Transformers model on **AWS SageMaker Endpoint** (multi‑instance inference) to generate dense vectors; used OpenSearch’s ANN feature for sub‑ms similarity search.  
3. **Generator** – Hosted an LLM (e.g., GPT‑4 via **Bedrock**) behind a **Lambda@Edge** layer that receives the top‑k retrieved passages, formats them into a prompt, and returns the final answer.  
4. **Caching & Throttling** – Implemented a Redis cache (Elasticache) for frequent queries; applied request throttling to prevent burst spikes.

### *Result*  
- Factual accuracy rose from 60 % to **92 %** (validated by A/B testing).  
- Latency dropped from 1.2 s to **350 ms** on average.  
- Operational cost fell 30 % due to efficient caching and spot‑instance inference.

---

#### Leadership Principles  
- **Customer Obsession** – Delivered a more trustworthy assistant that users rated 4.8/5.  
- **Ownership & Dive Deep** – Built the end‑to‑end pipeline, profiled bottlenecks, and iterated on vector sizes and cache eviction policies.

*Bar‑raiser focus:* ownership of full stack, deep technical dive into vector search trade‑offs, quantified impact on accuracy & cost, and lessons learned when initial OpenSearch cluster suffered under heavy write load (prompted migration to a multi‑AZ configuration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
