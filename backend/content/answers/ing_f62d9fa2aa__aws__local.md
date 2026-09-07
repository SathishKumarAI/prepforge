---
qid: ing_f62d9fa2aa__aws__local
question: 'Explain: RAG, Agents and Context Engineering — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 426
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:40-05:00'
sources: []
---

**Situation / Task**  
In my last role I was asked to build a cost‑effective, highly available recommendation engine that could answer user queries in real time while keeping latency under 200 ms. The business needed a system that leveraged large language models (LLMs) but also had tight budget constraints.

**Action**  
I architected a *Retrieval‑Augmented Generation* (RAG) pipeline:  

- **Document store** – Amazon OpenSearch for fast vector search (≈10 GB/sec).  
- **Retriever** – Lambda@Edge to preprocess user context and query the index.  
- **Generator** – SageMaker Endpoint powered by Bedrock’s Claude 2, fed with the top‑k retrieved snippets as prompt context.  

To keep costs low I implemented *Context Engineering*: only the most relevant paragraphs (≤300 tokens) were passed to the model, cutting inference payloads by 70 %. I added an **Agent** layer using Step Functions that orchestrated retries and fallback to a distilled GPT‑3 model when latency spikes.

**Result**  
The solution reduced average response time from 450 ms to **180 ms** (30% improvement) while slashing per-query cost from $0.12 to **$0.04** (66% savings). Monthly spend dropped from $15K to $5K, and user satisfaction scores rose by 22 pts.

**Reflection**  
I took full ownership of the end‑to‑end stack, diving deep into OpenSearch tuning and Lambda concurrency limits—key Amazon traits for delivering results. The biggest learning was that context engineering can be a cheaper alternative to model scaling; I documented this in a post‑mortem and shared it with the ML Ops team to avoid similar pitfalls in future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
