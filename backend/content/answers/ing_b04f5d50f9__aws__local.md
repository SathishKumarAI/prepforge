---
qid: ing_b04f5d50f9__aws__local
question: 'Explain: Flow: Redirecting to Original URL — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 482
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:56-05:00'
sources: []
---

**Situation & Task**  
I led a sprint at my previous company to replace a legacy URL‑shortener that suffered from *99.9 %* downtime and a growing customer base (≈ 2 M active users). The goal: redesign the system so it can handle 10× traffic, guarantee instant redirects, and support “original URL” audit trails for compliance.

**Action – Design & Technical Choices**  
1. **API Gateway → Lambda** (stateless redirect service) – *latency < 30 ms*, *scalable* via auto‑scale.  
2. **DynamoDB** for mapping short→original URLs, partitioned by hash of the short code; provisioned read/write capacity with on‑demand fallback to avoid throttling.  
3. **S3 + CloudFront** for static landing pages (e.g., analytics dashboards).  
4. **EventBridge → Lambda** to capture each redirect event and stream to Kinesis Data Streams, feeding an Athena/Redshift lake for audit logs.  
5. **WAF & Shield** for DDoS protection; *cost* ≈ $0.02 per 1 M redirects vs. $3.50 with the old monolith.

**Result**  
- Uptime rose from **95 %** to **> 99.999 %** (five nines).  
- Redirect latency dropped 70 % (from 120 ms to 36 ms).  
- Cost savings: **$180K/yr** by moving from EC2‑based service to serverless + managed NoSQL.

**Reflection – Bar‑raiser Lens**  
I owned the failure analysis of the legacy system, dug deep into CloudWatch metrics, and iterated on capacity planning. I quantified impact with SLAs tied to customer retention (Δ +5 % NPS). Post‑mortem revealed that earlier adoption of serverless could have cut costs by 40 %. This loop—owning the problem, diving deep, delivering measurable results, and learning from failure—is what aligns with Amazon’s *Ownership*, *Dive Deep*, and *Deliver Results* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
