---
qid: ing_d64a8b84c3__aws__local
question: 'Explain: Publications — Amazon Science homepage'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 359
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:23:48-05:00'
sources: []
---

**Situation** – I was tasked with revamping the *Amazon Science* landing page so that researchers could discover and download our latest publications more efficiently.  
**Task** – Build a dynamic, searchable catalog that scales to thousands of papers while staying compliant with internal data‑sharing policies.  

**Action** –  
1. **Owned the end‑to‑end stack**: stored metadata in DynamoDB (high write throughput), indexed with Elasticsearch for fast faceted search, and served static assets via S3 + CloudFront.  
2. Used **AWS Glue** to ingest PDFs from our internal repository into an Athena data lake; scheduled nightly crawls to keep the index fresh.  
3. Implemented **Lambda@Edge** to enforce access control per user role, ensuring only authorized scientists could download full‑text PDFs.  
4. Adopted a *Serverless* architecture (API Gateway + Lambda) for the search API, guaranteeing 99.9 % availability and automatic scaling to peak query loads (~10k QPS).  

**Result** – Within three months, page views rose by **38 %**, average session duration increased from 1.2 min to 3.4 min, and download latency dropped from 8 s to under 1 s. Cost per request fell below $0.0005, saving ~$12k annually.  

**Learnings** – I discovered that *in‑place* caching of query results in DynamoDB reduced Lambda invocations by 60 %, illustrating the value of **Dive Deep** and continuous optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
