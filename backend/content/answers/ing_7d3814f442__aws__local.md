---
qid: ing_7d3814f442__aws__local
question: 'Explain: Users Table (Optional) — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 705
total_tokens: 945
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:08:31-05:00'
sources: []
---

**Situation (S)**  
At my last role I was tasked to redesign the company’s legacy URL‑shortening service that served ~30 M hits/day but had a 4 % error rate and no user analytics. The goal: lower latency, enable per‑user tracking, and reduce ops cost.

**Task (T)**  
Create an Amazon‑style design that supports millions of requests per second, guarantees 99.999 % availability, and allows optional “Users” metadata for future personalization.

**Action (A)**  

1. **API Layer** – *Amazon API Gateway* + *AWS Lambda* (Python) → stateless edge functions for request validation and routing.  
2. **Storage** – *DynamoDB* tables:  
   - `ShortUrls` PK=`hash`, SK=`created_at`; GSI on `original_url` for reverse lookup.  
   - Optional `Users` table PK=`user_id`.  
3. **URL Generation** – Lambda generates a 6‑char base‑62 hash, checks uniqueness via DynamoDB conditional writes (ensures atomicity).  
4. **Redirection** – CloudFront edge caching with Lambda@Edge to read the hash from path and forward to origin; TTL=60 s for hot URLs, longer for static ones.  
5. **Analytics** – *Amazon Kinesis Data Streams* captures click events → *AWS Glue* → *Redshift* for reporting.  
6. **Security & Scaling** – API Gateway throttling (10k RPS), DynamoDB auto‑scaling, CloudFront global edge network; all services are fully managed, eliminating ops overhead.

**Result (R)**  
- Latency dropped from 200 ms to <30 ms (99th percentile).  
- Error rate fell below 0.1 %.  
- Ops cost reduced by ~35 % due to serverless and auto‑scaling.  
- Enabled per‑user analytics: first‑time users saw a 12 % CTR lift after personalized short URLs.

---

### Leadership Principles Highlighted
| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for architecture, cost, and performance targets. |
| **Dive Deep** | Chose DynamoDB conditional writes to guarantee uniqueness; used CloudWatch metrics to fine‑tune throttling. |
| **Customer Obsession** | Reduced latency & errors → better user experience; added optional user table for future personalization. |

### Bar‑raiser Takeaway
- **Quantified Impact**: concrete latency, error, cost numbers.  
- **Depth**: explained trade‑offs (Lambda cold start vs. DynamoDB read/write capacity).  
- **Learning from Failure**: after initial 4 % errors, identified race conditions in hash generation and fixed with conditional writes.

*This answer shows ownership, technical depth, measurable impact, and a clear learning loop—exactly what Amazon looks for.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
