---
qid: ing_1cc4769fd0__aws__local
question: 'Q: A knowledge base of 50,000 documents needs Contextual Retrieval. How
  do you manage the ingestion cost?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 486
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:31:23-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that had to ingest 50 k corporate policy documents into an AI‑powered knowledge base while keeping the monthly ingestion cost below $3 K. The goal was to enable contextual retrieval for our internal helpdesk bot with sub‑second latency.

**Action**  
1. **Data‑flow design** – I split the pipeline into three stages: (a) *Ingestion* via AWS Glue crawlers that only scan new or updated files, (b) *Transformation* using Amazon SageMaker Processing jobs to run a lightweight OpenAI embeddings model, and (c) *Storage* in an Amazon DynamoDB table keyed by document ID with the embedding vector stored in an attribute of type `BLOB`.  
2. **Cost control** – Instead of a single large batch job, I scheduled incremental Glue crawlers that processed ~5 k documents per run. This reduced the number of SageMaker processing jobs from 1 × 50 k to 10 × 5 k, cutting compute time by ~70 %.  
3. **Optimization** – I enabled *SageMaker Spot Instances* (80 % discount) and used a pre‑built `text-embedding-ada-002` model via the AWS Bedrock endpoint, which costs $0.0004 per 1K tokens versus running a custom GPU cluster.

**Result**  
- **Cost**: Ingestion cost fell from an estimated $12 K/month to $2.8 K/month (a 77 % reduction).  
- **Latency**: Retrieval queries returned results in <250 ms on average, meeting SLA requirements.  
- **Scalability**: The architecture supports linear growth; adding 10 k documents only adds one more Glue crawler run and a proportional SageMaker Spot job.

**Reflection (Bar‑raiser notes)**  
I demonstrated *Ownership* by redesigning the pipeline from scratch, *Dive Deep* into cost metrics and AWS pricing models, and *Deliver Results* with concrete savings. The failure point was an initial over‑provisioned GPU cluster; I learned to benchmark spot vs. on‑demand early in the design phase.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
