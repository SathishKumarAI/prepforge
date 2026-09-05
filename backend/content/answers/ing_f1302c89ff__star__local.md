---
qid: ing_f1302c89ff__star__local
question: 'Explain: Production RAG at Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 359
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:30:38-05:00'
sources: []
---

**Situation:**  
At my last company we launched a chatbot for the enterprise support portal that needed to pull up-to-date policy documents and internal knowledge base entries in real time. The user traffic was expected to hit 20 k concurrent sessions during peak hours, so latency had to stay below 200 ms.

**Task:**  
I had to design a production RAG (Retrieval‑Augmented Generation) pipeline that could serve those requests at scale while keeping costs under our $5K/month budget and ensuring the assistant never returned stale or conflicting policy snippets.

**Action:**  
1. Built an Elasticsearch cluster with sharded, replicated indices for policy PDFs, converting them to dense embeddings using Sentence‑Transformers.  
2. Implemented a vector search layer (FAISS on GPU nodes) that returned the top‑5 relevant passages per query, caching frequent queries in Redis for 30 s.  
3. Wrapped the retrieved snippets into prompt templates fed to an OpenAI GPT‑4o model via LangChain, adding a “source citation” field so users could verify each answer.  
4. Deployed the service on Kubernetes with autoscaling, using Prometheus/Alertmanager to trigger additional GPU pods when latency exceeded 180 ms.

**Result:**  
Latency averaged 145 ms under peak load; error rate dropped from 12% to 2%. The system processed 35k requests/day for just $3.8K/month. I learned how to balance retrieval precision, model prompt engineering, and infrastructure scaling to keep a RAG system responsive and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
