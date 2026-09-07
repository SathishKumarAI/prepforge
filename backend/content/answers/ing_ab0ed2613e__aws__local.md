---
qid: ing_ab0ed2613e__aws__local
question: 'Explain: Document Ingestion Pipeline — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 454
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:53:23-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a **Document Ingestion Pipeline for an enterprise RAG (Retrieval‑Augmented Generation) system** that needed to process 10 M PDFs + HTMLs per month, index them in real‑time, and serve queries with <200 ms latency. The goal was to replace the legacy batch job that took >12 h per cycle.

**Action**  
1. **Architecture** – Event‑driven ingestion via *S3* + *SQS* → *Lambda* (OCR & metadata extraction) → *Step Functions* orchestrating *Amazon Textract*, *Comprehend* and *Kendra*.  
2. **Indexing** – Store embeddings in *Pinecone* managed service, backed by *DynamoDB* for document‑level metadata; use *Kinesis Data Firehose* to stream updates into OpenSearch for full‑text search.  
3. **Scalability & Availability** – Lambda concurrency set to 5 k, auto‑scaling via SQS queue depth; Kendra cluster in a multi‑AZ VPC with cross‑region read replicas.  
4. **Cost Control** – Adopted *Spot Instances* for Textract bursts, reserved capacity for OpenSearch, and scheduled cold‑layer archival to Glacier for 80 % of the data.

**Result**  
- Reduced ingestion time from 12 h to <30 min (96 % faster).  
- Query latency dropped from 1.2 s to 180 ms, improving user satisfaction scores by 42 %.  
- Operational cost fell 35 % YoY due to efficient resource usage.

**Reflection** – I owned the end‑to‑end pipeline, dove deep into each AWS service’s limits, and iterated on failure modes (e.g., OCR errors). The experience sharpened my ability to balance speed, reliability, and spend—exactly what a bar‑raiser expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
