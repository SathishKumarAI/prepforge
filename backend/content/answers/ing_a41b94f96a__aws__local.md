---
qid: ing_a41b94f96a__aws__local
question: 'Explain: Terminology — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 524
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:33-05:00'
sources: []
---

**Situation & Task**  
I was asked to redesign the live‑comment feature for a global streaming platform that served **10 M concurrent viewers** during peak events. The existing monolith caused 2 s latency spikes and dropped ~15 % of comments under load.

**Action (Design)**  
1. **Ingress** – API Gateway + Lambda (Node.js) to validate & enqueue comment payloads into **Amazon SQS FIFO** (deduplication).  
2. **Processing** – A fleet of ECS Fargate tasks consume SQS, apply profanity filter (AWS Comprehend Custom Classifier), and write sanitized comments to a **sharded DynamoDB table** (`streamId#partition`).  
3. **Real‑time delivery** – Comments are published to an **Amazon Kinesis Data Stream**; downstream Lambda shards stream data into **Amazon CloudFront Edge Functions** that push updates via WebSocket API (API Gateway) to clients.  
4. **Scalability & Availability** –  
   * SQS + Kinesis auto‑scale, 99.999 % SLA.  
   * DynamoDB global tables across 3 AZs for low latency (<50 ms).  
   * Lambda concurrency limits prevent thundering herd.  
5. **Cost** – Serverless components keep idle cost near zero; only pay for reads/writes and data transfer (~$0.25 per 1 M comments).

**Result**  
- Latency dropped from 2 s to <200 ms (99th percentile).  
- Comment loss fell below 0.01%.  
- Cost reduced by **35 %** compared to the monolith.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered a seamless, low‑latency experience for millions of viewers.  
- *Ownership & Dive Deep*: Built and tuned each component, measured every metric, and iterated until SLA met.

**Bar‑raiser Insight**  
The interviewer will look for:  
1. Ownership – clear ownership of each service and its failure modes.  
2. Dive deep – justification of sharding strategy, DynamoDB capacity units, and Kinesis shard count.  
3. Quantified impact – concrete latency & cost numbers.  
4. Learning from failure – mention fallback to SQS DLQ and retry logic for transient errors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
