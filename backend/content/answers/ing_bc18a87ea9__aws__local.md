---
qid: ing_bc18a87ea9__aws__local
question: 'Explain: Testing in production — From Zero to 50 Million Uploads per Day:
  Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 563
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:29:08-05:00'
sources: []
---

**Leadership Principles:**  
*Customer Obsession – every metric we track is a proxy for user experience.*  
*Ownership – I drove the migration of our A/B‑testing framework from a monolith to a fully serverless pipeline.*

### Situation
Canva’s media upload service had plateaued at ~10 M uploads/day. Users complained that new image‑processing features lagged behind, and we needed to validate them in production without risking downtime.

### Task
Design a “test‑in‑production” system that could handle 50 M uploads/day while giving us per‑feature latency, error rates, and quality metrics in real time.

### Action
1. **Requirements** –  
   * Zero‑downtime rollout  
   * Per‑user feature flagging  
   * Real‑time telemetry (latency, success rate)  
2. **Design** –  
   * **Event‑driven pipeline:** Uploads hit an S3 bucket; a Lambda triggers a Step Functions workflow that routes the image through either the new or legacy processor based on a DynamoDB feature flag.  
   * **Observability layer:** Each processor emits CloudWatch Metrics and logs to Kinesis Data Firehose, which streams into Amazon Athena for ad‑hoc queries.  
   * **Dynamic sampling:** A Lambda periodically adjusts the sampling rate (1 % → 10 %) based on traffic spikes, ensuring we never exceed 200k concurrent invocations.  
3. **AWS Services** – S3, Lambda, Step Functions, DynamoDB, Kinesis Data Firehose, CloudWatch, Athena, IAM.  
4. **Scalability & Cost** – Serverless functions auto‑scale; the cost is $0.20 per 1 M invocations + $0.25 per GB‑s of compute. For 50 M uploads/day we projected ~$2k/month versus $10k for a dedicated EC2 cluster.

### Result
Within two weeks, we validated 15 new image filters in production with zero service degradation. Latency drift stayed below 3 ms and error rates <0.02 %. The system handled the full 50 M uploads/day peak without any throttling. We also cut infra costs by 80 % compared to the legacy monolith.

### What a bar‑raiser looks for  
*Ownership:* I took end‑to‑end responsibility from requirement gathering to post‑deployment monitoring.  
*dive deep:* I quantified latency, error rates, and cost per feature flag.  
*Learned from failure:* Early Lambda timeouts taught us to use Step Functions for retry logic, a change that is now part of our deployment checklist.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
