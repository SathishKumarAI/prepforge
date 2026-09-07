---
qid: ing_32b1fdf068__aws__local
question: Break down the latency and cost budget of a RAG query. What do you optimise
  first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 445
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:19:52-05:00'
sources: []
---

**Situation & Task**  
I led a team that built a Retrieval‑Augmented Generation (RAG) pipeline for a SaaS product used by 200k daily active users. The goal was to keep query latency < 400 ms and cost <$0.01 per request while delivering accurate answers.

**Action – Design & Optimization**  
1. **Data Store Layer** – Chose Amazon OpenSearch with *dedicated node types* (memory‑optimized) for the vector index; this reduced token lookup time by 70 %.  
2. **Embedding Service** – Deployed a lightweight SageMaker endpoint using an *ONNX* model, scaling via Lambda’s provisioned concurrency to guarantee < 50 ms inference.  
3. **Generation Layer** – Used Amazon Bedrock’s GPT‑4o with *prompt compression* (≈ 30 % fewer tokens), cutting generation cost from $0.004 → $0.0025 per call.  
4. **Caching & Throttling** – Implemented a Redis cache (ElastiCache) for the top 10k most frequent queries; hit‑rate rose to 85 %, slashing OpenSearch traffic by 60 %.  

**Result**  
- Latency dropped from 1.2 s to **320 ms** (−73 %).  
- Cost per request fell from $0.0065 to **$0.002** (−69 %).  
- User satisfaction score improved from 4.1/5 to 4.6/5.

**Reflection**  
I first optimized the *data‑store layer* because query latency is dominated by retrieval time; a fast index yields immediate gains before spending on generation. I learned that early caching can yield disproportionate savings, and that quantifying each component’s cost lets us focus effort where it matters most.

> **Leadership Principles:** *Customer Obsession*, *Dive Deep* (data‑driven decisions), *Ownership* (end‑to‑end pipeline).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
