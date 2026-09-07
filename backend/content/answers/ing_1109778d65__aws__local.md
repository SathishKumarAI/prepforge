---
qid: ing_1109778d65__aws__local
question: 'Explain: RAG & Retrieval - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 546
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:11-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team that built an AI‑powered customer support chatbot, we needed to reduce the latency of knowledge‑base lookups from 1 s (full‑text search) to <200 ms while keeping cost under $0.01 per query.

**Action**  
I introduced a Retrieval‑Augmented Generation (RAG) pipeline:  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| Encode documents | **Amazon SageMaker** with Sentence‑Transformers | Generates dense embeddings that capture semantic similarity. |
| Store & index | **Amazon OpenSearch Service** (with kNN plugin) | Near‑real‑time indexing, 99.9 % availability, auto‑scaling. |
| Retrieval API | **API Gateway + Lambda** | Serverless, scales to millions of calls; cost ≈ $0.000025 per invocation. |
| Generation | **Amazon Bedrock (Claude/LLM)** | Handles prompt and retrieved snippets for context‑aware responses. |

We added a caching layer in **ElastiCache‑Redis** to serve the top 3 embeddings, cutting downstream latency by 70 %. We also implemented an *auto‑shrink* policy: after 24 h of inactivity, nodes shut down, saving ~30 % on OpenSearch.

**Result**  
Query latency dropped from 1.2 s to **210 ms** (≈ 82 % reduction). User satisfaction scores rose by **12 pp** (from 78 % to 90 %) as measured by post‑chat surveys. Annual cost was kept below $45k, a **25 % savings** over the legacy system.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – we focused on real user metrics and satisfaction.  
- **Ownership** – I drove the full end‑to‑end design, from data prep to deployment, and set up monitoring dashboards for continuous improvement.

### Bar‑Raiser Takeaways  
- **Depth & Dive Deep**: I quantified every trade‑off (latency vs cost) and iterated based on telemetry.  
- **Quantified Impact**: Clear KPIs (latency, NPS, cost).  
- **Learning from Failure**: Initial prototype hit 400 ms; we debugged embedding dimensionality and kNN parameters to achieve the final target.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
