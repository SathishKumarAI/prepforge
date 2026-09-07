---
qid: ing_cb1992b231__aws__local
question: 'Explain: Post Uploads (Writes) — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 418
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:00:21-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* A startup wanted an Instagram‑like photo feed that could serve millions of daily uploads without lag.

*Task:* Design a write pipeline that ingests images, stores them durably, generates thumbnails, and feeds the timeline in real time.

*Action:*  
1. **API Gateway + Lambda** receives POST `/photos`.  
2. **S3 (Standard) + S3 Object Lock** guarantees durability; each upload triggers an event to **SNS**.  
3. SNS fan‑out to **AWS Step Functions** orchestrating:  
   - **Lambda** for image validation & metadata extraction.  
   - **Amazon Rekognition** for auto‑tagging.  
   - **S3 (Reduced Redundancy)** to store processed thumbnails.  
4. Metadata goes into a **DynamoDB** table (partition key = userID, sort key = timestamp).  
5. For real‑time feeds, each upload publishes to an **Amazon Kinesis Data Stream** that writes to an **Elasticache Redis** “feed cache” per user; consumers pull from Redis for instant feed refresh.

*Result:*  
- 99.9% write durability with S3; cold start < 200 ms due to Lambda pre‑warm.  
- 50 × cost savings vs. EC2 batch jobs by using serverless and spot‑infused DynamoDB on demand.  
- Feed latency dropped from 4 s (batch) to 150 ms (Redis).  

**Bar‑raiser check:** I own the end‑to‑end flow, dive deep into each service’s SLA & cost curve, quantify performance gains, and learned that caching timelines in Redis eliminates the “write‑heavy” bottleneck—an insight we applied to other data‑intensive products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
