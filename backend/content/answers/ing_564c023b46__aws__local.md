---
qid: ing_564c023b46__aws__local
question: 'Explain: Interview questions — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 541
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:12-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a feature to answer customer queries in real‑time for an e‑commerce platform. The goal was to reduce support tickets by 30 % and improve NPS from 78 to 88 within six months.

**Action – RAG Architecture**  
I chose a *Retrieval‑Augmented Generation* (RAG) pipeline:  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| **Document store** | OpenSearch (indexing product catalog + FAQ) | Low‑latency full‑text search, auto‑scaling. |
| **Embedding engine** | SageMaker endpoint (Sentence‑BERT fine‑tuned on customer data) | Generates dense vectors for semantic similarity. |
| **Retriever** | Lambda orchestrator → OpenSearch query + cosine‑score filtering | Serverless, cost‑effective; 1 ms per request at 10k QPS. |
| **Generator** | Bedrock (Claude‑3 or GPT‑4o) with prompt “You are a customer support bot” | Fast inference, multi‑turn capability. |
| **Fallback** | DynamoDB cache for most common queries | Reduces latency by 25 % and cuts Bedrock usage by ~15 %. |

I added a *confidence threshold*; if the generator score <0.75 we route to human agent, ensuring quality.

**Result**  
- Support tickets fell 32 %, NPS rose to 89 in 5 months.  
- Cost per query dropped from $0.02 (pure GPT‑4o) to $0.008.  
- System handled peak of 15k concurrent users with 99.9 % availability.

**Reflection & Bar‑raiser cues**  
*Ownership*: I drove the end‑to‑end design and owned post‑launch monitoring.  
*Dive Deep*: I benchmarked vector similarity methods, tuned OpenSearch shard counts, and profiled Lambda memory to hit SLA targets.  
*Quantified Impact*: Metrics above prove business value.  
*Learning from Failure*: Early beta showed hallucinations; we introduced a sanity‑check filter (rule‑based + human‑in‑loop) that cut false positives by 70 %.  

This demonstrates Customer Obsession, Ownership, and Deliver Results—core Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
