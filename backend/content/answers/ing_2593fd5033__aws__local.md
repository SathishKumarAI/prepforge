---
qid: ing_2593fd5033__aws__local
question: 'Your corpus is full of near-duplicates: doc versions, boilerplate, quoted
  email threads. How do you handle deduplication?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 509
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:51:11-05:00'
sources: []
---

**Situation / Task**  
In my previous role I managed a public‑web crawl corpus that grew to **12 TB** of HTML and PDFs. Roughly 35 % were near‑duplicates (doc revisions, boilerplate headers, email threads). If left unchecked, storage costs ballooned and downstream NLP models suffered from data leakage.

**Action**  
I built an end‑to‑end dedup pipeline that ran nightly on AWS:

| Step | Service & Technique | Why |
|------|---------------------|-----|
| Ingest | **S3 + Lambda** (trigger per object) | Serverless, scales with traffic |
| Feature extraction | `tf-idf` shingles → **hashing** (SHA‑256) | Fast, collision‑safe for exact matches |
| Similarity detection | MinHash LSH via **DynamoDB Streams** → **Kinesis Data Analytics** | Captures near duplicates (Jaccard > 0.8) |
| Dedup action | Lambda writes a “dedupe‑marker” to DynamoDB; S3 Lifecycle moves marked objects to an *archive* bucket | Cost‑effective, auditable |

We added a **metadata table** in Athena for quick analytics and used **AWS Step Functions** to orchestrate retries. The system processed 1 M files per run, reducing the active corpus from 12 TB to 7 TB—**a 42 % cost saving** (~$3k/month). Accuracy was > 99.5 % for exact matches and 96 % for near duplicates, verified against a hand‑labeled sample.

**Result**  
The deduplication reduced storage costs by **$36k annually**, freed up compute for downstream models, and improved model precision by 4 % (validated on a test set). I presented the design at our quarterly tech forum; it was adopted company‑wide.  

**Leadership Principles**  
- **Customer Obsession / Ownership** – I treated internal users as customers, ensuring they paid only for unique data.  
- **Dive Deep & Bias for Action** – Built a robust, automated pipeline with measurable metrics and rapid iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
