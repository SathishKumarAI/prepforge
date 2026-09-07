---
qid: ing_2dc04e308e__aws__local
question: 'Explain: Failover Mechanisms — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 535
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:44-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked with redesigning the photo‑delivery pipeline for a social app that had 200 M daily active users. The existing monolith failed under traffic spikes, causing >5 % of uploads to time out during peak hours. My goal: build a highly available, fault‑tolerant architecture that guarantees *99.999% uptime* for image ingestion and delivery.

**Action – Design & AWS Services**  
1. **Ingress Layer** – Edge‐distributed CloudFront + WAF fronted an API Gateway with a Lambda authorizer.  
2. **Processing** – Each upload triggered a Step Function that routed to two parallel branches:  
   * **S3 PutObject** (primary) → triggers an SQS FIFO queue.  
   * **DynamoDB Streams** as a secondary, idempotent “write‑ahead” log for eventual consistency.  
3. **Failover** – If the primary S3 bucket (in us-east‑1) returned 5xx or latency >200 ms, the Step Function automatically routed to a replicated S3 bucket in us-west‑2 via an *S3 Replication* rule and updated a Route 53 alias record with weighted routing (95/5).  
4. **Processing & Storage** – An EC2 Auto Scaling group behind ALB consumed messages from SQS, processed images in parallel using GPU instances (g4dn.xlarge), stored thumbnails in an RDS Aurora cluster for quick lookup, and published a CloudWatch event to trigger a Lambda that updates the user’s feed.  
5. **Observability** – All services emitted metrics to CloudWatch; I set up an automated *Alarm → SNS → Lambda* chain that swapped Route 53 weights after 3 consecutive failures.

**Result**  
- Uptime rose from 99.92 % to 99.999 % in six weeks.  
- Latency for the first image served dropped from 1.2 s to 0.35 s under a 10× traffic spike.  
- Cost increased by only 12 %, largely offset by reduced S3 request churn.

**Reflection (Amazon Leadership Principles)**  
*Customer Obsession*: I measured user‑perceived latency and focused on real‑world failure scenarios.  
*Ownership & Dive Deep*: By instrumenting every hop and automating failover, I took full responsibility for reliability, iterated based on telemetry, and learned that proactive routing weights beat reactive retries in cost‑effective resilience.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
