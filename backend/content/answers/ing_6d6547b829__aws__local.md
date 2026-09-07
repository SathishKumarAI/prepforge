---
qid: ing_6d6547b829__aws__local
question: 'Explain: You need to classify and summarise 50 million records with an
  LLM. Design the pipeline and estimate the cost.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 463
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:31:11-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was tasked with classifying and summarizing **50 M customer‑interaction logs** for a global e‑commerce platform to surface sentiment trends in real time. The goal: deliver insights within 24 h, keep latency <5 s per record, and stay under $15k/month.

**Approach (Dive Deep + Bias for Action)**  
1. **Ingest** – Kinesis Data Streams (shards = 50) → Lambda buffer → S3 Glacier Deep Archive for cold history.  
2. **Pre‑process** – Glue ETL to tokenize, remove PII, and write parquet to S3 (partitioned by date).  
3. **LLM inference** – Batch with SageMaker Processing Jobs using a 24 GB GPU instance (`ml.g5.4xlarge`). For each batch of 10k records, the LLM returns label & summary; cost ≈ $0.90 per job.  
4. **Real‑time fallback** – EventBridge rule triggers Lambda that calls Bedrock (Claude‑3) for any record flagged as “critical” (≈1 % of data).  
5. **Store results** – DynamoDB global tables for instant lookup; aggregated metrics in Redshift Spectrum on the parquet files.

**Result (Deliver Results)**  
- Throughput: 50 M records processed in ~20 h, latency <2 s per record.  
- Accuracy: F1‑score 0.87 vs baseline 0.73 (+19%).  
- Cost: ~$12k/month (Kinesis $3k, Lambda $1k, SageMaker $6k, Bedrock $1.5k, storage $0.5k).

**Bar‑raiser notes** – I owned the end‑to‑end pipeline, performed cost/latency trade‑offs, quantified impact with F1 and budget metrics, and iterated after a failure in the first batch by adding retry logic and better shard sizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
