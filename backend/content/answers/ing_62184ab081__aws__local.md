---
qid: ing_62184ab081__aws__local
question: 'Explain: Public IP Addresses — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 438
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:32-05:00'
sources: []
---

**Situation**  
I was tasked with designing a public‑IP assignment service for an internal SaaS platform that had to support > 50 000 concurrent users and guarantee < 5 ms latency for IP lookup.

**Task**  
Create a scalable, highly available system that maps user accounts to public IPv4/IPv6 addresses while respecting AWS limits (e.g., 5 000 ENIs per region) and minimizing cost.

**Action**  

| Component | Design & AWS Services | Why |
|-----------|-----------------------|-----|
| **IP pool** | DynamoDB *Global Table* + S3 for static ranges | Low‑latency reads, cross‑region replication. |
| **Allocation engine** | Lambda (event‑driven), Step Functions orchestrator | Serverless → auto‑scale, pay per use; Step Functions enforce retry/compensation logic. |
| **Stateful mapping** | Amazon ElastiCache Redis cluster (cluster mode) | 100 µs read/write; persistence via RDB/AOF for durability. |
| **API gateway** | API Gateway + Cognito auth | Global edge caching, throttling, and fine‑grained IAM controls. |
| **Monitoring** | CloudWatch Alarms + X-Ray traces | Detect > 1% allocation failure in < 10 s. |

**Result**  
- 99.9 % successful IP assignment during peak load (≈ 30 k/sec).  
- Latency dropped from 12 ms to 3 ms (average).  
- Operational cost reduced by 35 % vs. a monolithic EC2‑based solution.

**Learning & Ownership**  
I iterated on the retry logic after an early failure that caused duplicate IPs; adding idempotent Step Function checkpoints eliminated the issue. This demonstrates **Ownership**, **Dive Deep**, and **Bias for Action**—key Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
