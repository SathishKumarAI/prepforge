---
qid: ing_2ffc09833b__aws__local
question: 'Explain: Query Routing and Classification — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 431
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:13:33-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with launching a *Production Retrieval‑Augmented Generation (RAG)* service that had to answer millions of user queries per day while keeping latency under 200 ms and cost below $1M/month.

**Action**  
I built a two‑stage routing layer:  
1. **Classification** – a lightweight transformer (DistilBERT) hosted on **Amazon SageMaker Endpoint** with *Auto Scaling* to keep CPU usage <70%. It tags each query into one of 20 domain buckets, sending the token to the appropriate **AWS Lambda** function.  
2. **Query Routing** – each Lambda invokes an **Elasticsearch (OpenSearch)** cluster partitioned by domain. I used *index aliases* for zero‑downtime rebalancing and *dedicated read replicas* in a multi‑AZ VPC to guarantee 99.9 % availability.

To keep costs low, I leveraged **SageMaker Neo** to compile the model to run on **AWS Inferentia** instances, cutting inference time by 4× and saving ~30 % versus GPU. For cold starts, I prewarmed Lambda with a scheduled “warm‑up” event.

**Result**  
The system handled 12 M queries/day, achieving 95 % of them in <200 ms. Latency dropped from 350 ms to 180 ms (40 % improvement). Cost fell to $840k/month, a 20 % reduction versus the legacy architecture.

**Learnings**  
I practiced *Ownership* by iterating on both ML and infra components, and *Dive Deep* when profiling GPU vs Inferentia performance. I also instituted an automated “fail‑fast” test that logs any routing mismatch, ensuring continuous delivery of accurate results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
