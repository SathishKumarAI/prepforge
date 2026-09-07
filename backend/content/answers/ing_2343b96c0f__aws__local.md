---
qid: ing_2343b96c0f__aws__local
question: 'Explain: 🔎 RAG & Retrieval — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 494
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:46:26-05:00'
sources: []
---

**Situation** – While leading a cross‑functional AI team at my previous role, we were asked to build a real‑time FAQ bot for a global e‑commerce platform that needed to answer 120 k queries per minute with <200 ms latency.

**Task** – Deliver an architecture that combines *Retrieval‑Augmented Generation* (RAG) so the model can pull up‑to‑date product data, while keeping cost and reliability under strict SLAs.

**Action**  
1. **Data pipeline**: Ingested nightly catalog updates into a **Amazon Kendra** index (≈ 2 M documents). Kendra’s semantic search returns top‑k passages in <50 ms.  
2. **Generation layer**: Deployed an **Amazon Bedrock** (Claude 3) endpoint behind an **Application Load Balancer**; the prompt concatenates the user query + retrieved passages, limiting token usage to keep GPU cost < $0.02/req.  
3. **Caching & scaling**: Employed **ElastiCache‑Redis** for hot queries and auto‑scales the Bedrock endpoint with Lambda’s *Provisioned Concurrency* (5–10 instances).  
4. **Observability**: Tracked latency, cache hit rate, and cost in CloudWatch dashboards; set alerts when cache miss > 15 %.

**Result** – Latency dropped from 1.2 s to <200 ms, throughput increased by 350 %, and monthly AWS spend fell 40 % (from $12k to $7.2k). The bot handled a 3× traffic spike during Black Friday without any outages.

---

### Leadership Principles  
- **Customer Obsession** – Delivered instant, accurate answers that improved conversion rates by 6 %.  
- **Ownership & Dive Deep** – Designed the end‑to‑end pipeline, tuned every component, and continuously profiled for cost/latency trade‑offs.  

*Bar‑raiser notes*: Looked for evidence of full ownership, data‑driven impact (latency, cost, conversion), deep technical dive into AWS services, and a learning loop from the Black Friday spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
