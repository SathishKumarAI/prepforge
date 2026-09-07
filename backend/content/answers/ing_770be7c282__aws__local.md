---
qid: ing_770be7c282__aws__local
question: 'Explain: Questions and Solutions — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 481
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:54:33-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked by the product team to redesign the “URL lookup” micro‑service for a global content platform that served >10 M users/day. The goal: cut latency from 350 ms → <100 ms while keeping 99.999% availability.

**Action – Design & AWS Services**  
1. **Client → CloudFront CDN** (edge caching, low‑latency DNS).  
2. **CloudFront → API Gateway** (request validation, throttling).  
3. **API Gateway → Lambda@Edge + DynamoDB Global Tables** for real‑time lookup of canonical URLs and redirects.  
4. **Lambda** writes cache‑hit metrics to CloudWatch; a scheduled **Glue job** aggregates logs into Redshift for analytics.  
5. **Auto‑Scaling & Multi‑AZ**: API Gateway + Lambda automatically scale; DynamoDB Global Tables provide cross‑region consistency with minimal replication lag (<50 ms).  

*Scalability*: Horizontal scaling of Lambda and DynamoDB partitions handles burst traffic.  
*Availability*: Multi‑AZ, failover in CloudFront, and DynamoDB’s built‑in replication guarantee 99.999%.  
*Cost*: Serverless reduces idle spend; only pay for request count (~$0.2k/month).  

**Result**  
Latency dropped to **78 ms** (30% improvement), traffic handled 1.5× peak load, and cost fell by **35%** YoY. I iterated on the design after a brief outage caused by stale DNS entries; adding Route 53 health checks eliminated the issue.

---

> **Leadership Principles Highlighted**  
> • *Customer Obsession* – delivering faster page loads for millions of users.  
> • *Ownership* – owning the end‑to‑end flow from browser to data lake.  
> • *Dive Deep* – analyzing CloudWatch metrics, tracing Lambda cold starts, and tuning DynamoDB throughput.  

**Bar‑raiser check:** I showcased ownership (full lifecycle), deep technical dive (latency breakdown), quantified impact (metrics), and a clear learning loop after the outage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
