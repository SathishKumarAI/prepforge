---
qid: ing_51e8bb7c9c__aws__local
question: 'Explain: Using Pre-Built Agents from Agent Pack — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 520
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:30:22-05:00'
sources: []
---

**Situation / Task**  
When I joined a startup building an AI‑powered customer support chatbot, we had to get the first version into production within 8 weeks. The team was new to Haystack and had limited ML expertise, so we needed a quick win that still allowed us to iterate later.

**Action**  
I scoped out the **Agent Pack** from Haystack, which bundles pre‑built retrieval‑augmented agents (FAQ, knowledge‑base search, RAG). I set up an end‑to‑end pipeline on AWS:

| Component | Service | Reason |
|-----------|---------|--------|
| Document ingestion | S3 + Glue | Durable storage & ETL |
| Vector store | Amazon Q | Managed vector DB, auto‑scaling |
| Inference | SageMaker Endpoint (OpenAI GPT‑4) | Low latency, pay‑as‑you‑go |
| Orchestration | Step Functions | Retry logic, observability |
| Monitoring | CloudWatch + X-Ray | Latency & error metrics |

I defined a **“customer intent → retrieval → response”** flow, configured the Agent Pack to use Q for vector search and SageMaker for generation. I added a Lambda layer to translate user queries into structured prompts.

To measure impact, I ran A/B tests against our legacy rule‑based bot. Results after 2 weeks:

* **Accuracy (intent match)**: ↑ 34 %  
* **Average response time**: ↓ 42 ms  
* **Operational cost**: $0.03 per request vs $0.08 previously  

I documented the pipeline in Terraform, enabling rapid rollback and repeatable deployments.

**Result**  
We launched the MVP on day 21, achieved a 90 % customer satisfaction score within the first month, and reduced engineering hours by **40 %** compared to building a custom model from scratch.

---

### Leadership Principles Reflected

* **Customer Obsession** – Delivered faster, higher‑quality answers that directly improved CSAT.  
* **Ownership & Dive Deep** – Designed an end‑to‑end AWS architecture, quantified every metric, and iterated on failures (e.g., swapping Q for OpenSearch when latency spiked).  

This story shows I can *own* a solution, *dive deep* into technical trade‑offs, and produce measurable business value—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
