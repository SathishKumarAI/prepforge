---
qid: ing_6ce3687476__aws__local
question: 'Explain: Encode the ID — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 616
total_tokens: 854
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:11-05:00'
sources: []
---

**Situation (S)**  
I was tasked with building a URL‑shortening service for a global startup that expected to hit 10 M active users in the next year. The requirement: keep the shortened URLs unique, support custom aliases, and guarantee < 200 ms latency worldwide.

**Task (T)**  
Deliver an end‑to‑end system that can ingest millions of shorten requests per day while staying cost‑effective and highly available.

**Action (A)**  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| **API Gateway + Lambda** | Serverless request handling | Auto‑scales, 99.999 % availability, pay only for invocations. |
| **DynamoDB (partition key = user_id, sort key = hash)** | Fast lookup & idempotent writes | Low latency, built‑in global replication. |
| **Kinesis Data Streams** | Event queue for analytics | Decouples write path from heavy analytics jobs. |
| **S3 + CloudFront** | Static landing pages for custom domains | Edge caching keeps redirect latency < 50 ms globally. |
| **Secrets Manager** | API keys & DB credentials | Least‑privilege, rotation every 90 days. |

*Encoding strategy:*  
- Generate a 7‑character base‑62 string from a counter (`auto_increment`) stored in DynamoDB’s *id_generator* table (partition key = “global”).  
- Use HMAC‑SHA256 to sign the ID; store the signature in the same row for tamper detection.  
- For custom aliases, validate length/char set and write directly to DynamoDB; if conflict, return 409.

**Result (R)**  
- Achieved **99.999 % SLA** with average response < 180 ms.  
- Cost per request dropped from $0.02 (EC2) to <$0.0001 (Lambda + DynamoDB).  
- Scaled to 5 M shorten requests/day without code changes.

---

### Leadership Principles Highlighted
| Principle | Why it matters |
|-----------|----------------|
| **Ownership** | I drove the entire stack, from design to deployment, taking responsibility for latency and cost. |
| **Dive Deep** | Chosen services were justified with performance, availability, and cost trade‑offs; metrics were collected and iterated upon. |

---

### What a Bar‑Raiser Looks For  
- **Quantified Impact:** Latency & cost numbers.  
- **Depth of Knowledge:** Understanding DynamoDB partitioning, Lambda limits, CloudFront edge caching.  
- **Learning from Failure:** I initially used EC2 + RDS and hit scaling limits; the switch to serverless was a hard‑won lesson in choosing right services for traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
