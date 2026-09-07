---
qid: ing_667bd3946b__aws__local
question: 'Explain: How It Works — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 361
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:16:45-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to build a high‑traffic URL shortener for an ad‑tech partner that expected **10M redirects/day** and needed 99.999% availability.  

**Action – Design**  
* **API Layer:** API Gateway + Lambda (Python) → stateless, auto‑scales, low cold‑start latency (<200 ms).  
* **Short ID Generation:** Use a *Base62* counter stored in DynamoDB with `AutoIncrement` via PartiQL; guarantees uniqueness and O(1) writes.  
* **Redirect Service:** CloudFront + Lambda@Edge to resolve the short key from DynamoDB, then issue an HTTP 301. Edge caching keeps most hits at the edge (≈70 % cache hit).  
* **Analytics & Monitoring:** Streams → Kinesis Data Firehose → Redshift for real‑time dashboards; CloudWatch Alarms on latency and error rates.  

**Result**  
- Achieved **0.00002 s average redirect time** and 99.999% uptime in the first year, exceeding SLA by 5×.  
- Cost per redirect dropped from $0.05 to **$0.002** after moving to Lambda@Edge and DynamoDB on-demand.  

**Learning & Ownership**  
I led a cross‑functional “failure drill” that exposed a race condition in ID generation; fixing it saved an estimated **$3M/year** in potential duplicate URLs. This deep dive exemplified *Ownership* and *Dive Deep*, core Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
