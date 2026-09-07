---
qid: ing_e6e616a849__aws__local
question: 'Explain: Final Thoughts — How DNS Actually Works - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 393
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:00:23-05:00'
sources: []
---

**Situation (S)**  
In my previous role I led a migration of an on‑prem CDN to CloudFront for a media startup that served 15 M daily requests. During the cutover we discovered intermittent latency spikes caused by DNS resolution failures.

**Task (T)**  
I was tasked with diagnosing and redesigning our DNS strategy so that every request hit the nearest edge with <10 ms resolve time, while keeping costs under $5k/month.

**Action (A)**  
1. **Dive Deep into DNS** – I mapped out the full lookup path: client → recursive resolver → root → TLD → authoritative nameserver.  
2. **AWS Services** – Implemented Route 53 with latency‑based routing, health checks on CloudFront edge locations, and a private hosted zone for internal services.  
3. **Scalability & Availability** – Leveraged Route 53’s global Anycast to ensure 99.999% uptime; added failover to an alternate distribution in case of region outage.  
4. **Cost Control** – Used alias records (no extra queries) and disabled unused public zones, cutting query costs by 28%.  
5. **Monitoring & Feedback Loop** – Integrated CloudWatch metrics with a Lambda that auto‑adjusted routing weights every 10 min based on real traffic.

**Result (R)**  
Post‑migration latency dropped from 45 ms to 8 ms (84% improvement), error rates fell from 0.4 % to <0.01 %, and we saved $1.2k/month on DNS queries.  

*Leadership Principles*: **Customer Obsession** – delivering faster, more reliable content; **Ownership** – owning the end‑to‑end DNS health loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
