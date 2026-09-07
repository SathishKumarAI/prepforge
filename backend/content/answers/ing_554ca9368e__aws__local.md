---
qid: ing_554ca9368e__aws__local
question: 'Explain: Data & context strategy — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 516
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:39:07-05:00'
sources: []
---

**Situation / Task**  
At a 10‑k‑employee fintech, senior analysts spent 30 % of their week searching disparate data lakes for regulatory documents and market insights to answer client queries. I was tasked with building an *Enterprise RAG (Retrieve‑Augment‑Generate) Assistant* that could ingest context from internal knowledge bases and external feeds, then produce accurate, policy‑compliant responses.

**Action**  
1. **Data & Context Layer** – Ingested all structured data into a single Lakehouse on Amazon S3, catalogued with Glue, and stored high‑velocity logs in DynamoDB.  
2. **Retrieval Engine** – Deployed an embedding index in Amazon OpenSearch Service (tuned for semantic search) using embeddings from Bedrock’s *Titan* model.  
3. **Augmentation & Generation** – Built a serverless Lambda pipeline that feeds retrieved snippets to Bedrock’s *Claude 3 Opus* via the RAG API, enforcing policy constraints with a custom Post‑Processing layer in Step Functions.  
4. **Governance** – Integrated Lake Formation for fine‑grained access and automated audit logs in CloudTrail.

**Result**  
- Query latency dropped from 12 s to <1 s (90 % reduction).  
- Analyst productivity rose by 45 %, freeing 2.5 full‑time equivalents.  
- Cost per query fell to $0.02, a 60 % savings over the legacy on‑prem solution.

**Reflection & Learning**  
I practiced *Dive Deep* by iterating on embedding dimensions and observing perplexity metrics; when latency spiked, I re‑partitioned OpenSearch shards—showing true ownership. The bar‑raiser would note my quantitative impact, the end‑to‑end AWS stack (S3, Glue, DynamoDB, OpenSearch, Bedrock, Lambda), and how I learned from a 10 % performance regression by adding an intermediate caching layer.

**Leadership Principles Anchored**  
- **Customer Obsession** – Delivered instant insights to analysts.  
- **Ownership** – Took full responsibility for data integrity, cost, and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
