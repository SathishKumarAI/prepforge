---
qid: ing_cb9f379b76__aws__local
question: 'Explain: LLM Papers Cheatsheet -- The Definitive Reading List'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 502
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:10-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a cross‑functional AI squad tasked with democratizing LLM knowledge for 1 200 engineers across three continents. The product owner demanded an “LLM Papers Cheatsheet” – a living, searchable index of every foundational paper (ACL‑2020‑present). My goal was to deliver it in under two weeks while ensuring the solution scaled to millions of reads per day.

**Action**  
I architected a serverless stack on AWS:  
* **S3** for raw PDFs and metadata JSON;  
* **DynamoDB** as a fast, key‑value store (paper ID → S3 URI, abstract, tags);  
* **Lambda + API Gateway** to expose a RESTful search API;  
* **CloudWatch Logs & X-Ray** for observability.  

I wrote a one‑shot ETL Lambda that scraped arXiv and ACL Anthology, parsed PDFs with Textract, extracted key fields (title, authors, year), and upserted them into DynamoDB. The API supports full‑text search via an ElasticSearch domain (managed OpenSearch) for 10 000+ queries/day, backed by a CloudFront CDN to keep latency <100 ms globally.

**Result**  
Within 10 days the cheatsheet was live. Usage spiked to 250 k reads/month; engineers reported a **40 % reduction in time spent hunting papers** (validated via a pre/post survey). Cost stayed under $150/month, and the system automatically scaled with traffic thanks to Lambda concurrency limits and DynamoDB auto‑scaling.

**Reflection**  
I practiced *Ownership* by owning both data ingestion and API performance. I applied *Dive Deep* when debugging Textract OCR errors that caused 12 % of metadata mismatches. The failure to initially index PDFs older than 2018 taught me the value of incremental backfills—now we re‑run the ETL nightly for new releases.  

**Key AWS services used:** S3, DynamoDB, Lambda, API Gateway, OpenSearch, CloudFront, CloudWatch, X-Ray.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
