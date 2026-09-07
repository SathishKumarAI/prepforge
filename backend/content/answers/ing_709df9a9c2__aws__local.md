---
qid: ing_709df9a9c2__aws__local
question: 'Explain: Scaling & ops — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 503
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:03-05:00'
sources: []
---

**Situation (S)** – I led the “Meeting Assistant” project at a SaaS firm that needed to process > 200k minutes of audio per day from corporate meetings and generate searchable summaries for 5,000 users.  

**Task (T)** – Deliver an end‑to‑end pipeline that scales horizontally, guarantees < 2 s latency on transcription requests, and reduces ops overhead by 70 %.  

**Action (A)** –  
1. **Architecture**:  
   * **S3 + EventBridge** → trigger **Lambda** for chunking audio into 30 s segments.  
   * **Transcribe Streaming** (AWS Transcribe) → real‑time speech‑to‑text, routed to **Kinesis Data Streams**.  
   * **Lambda** processes events, sends text to **SageMaker Endpoint** running a distilled BERT model for summarization.  
   * Results stored in **DynamoDB** with TTL; indexed by user & meeting ID.  
2. **Scalability/Availability**:  
   * Lambda concurrency auto‑scales (up to 10k invocations/sec).  
   * Kinesis shards tuned to 1 MB/s per shard → 5 shards = 5 MB/s, covering peak load.  
3. **Cost & Ops**:  
   * Spot instances for SageMaker inference lowered spend by 40 %.  
   * CloudWatch + X-Ray auto‑alert on error rates; Lambda retries capped at 2 to avoid back‑pressure.  

**Result (R)** – Achieved < 1.8 s average end‑to‑end latency, processed 220k minutes/day with a 99.9 % success rate, and cut ops hours from 120/hr to 35/hr. The solution was adopted company‑wide, earning the “Invent & Simplify” award.  

**Leadership Principles Highlighted**  
* **Customer Obsession** – Delivered instant, accurate summaries that boosted user productivity by 30 %.  
* **Dive Deep** – Tuned every component (shard count, Lambda memory) based on real telemetry, iterating until SLA met.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
