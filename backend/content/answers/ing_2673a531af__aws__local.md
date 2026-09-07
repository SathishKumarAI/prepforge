---
qid: ing_2673a531af__aws__local
question: 'Explain: Use IP Allow Lists Carefully — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 616
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:07-05:00'
sources: []
---

**Situation & Task**  
I was leading the redesign of a SaaS platform that exposed webhook endpoints for 12 k partners. The previous “open‑to‑any‑IP” approach caused frequent abuse and two major data breaches (≈ $2 M in remediation). My goal: harden security without hurting partner latency or dev velocity.

**Action – Design & Implementation**  
1. **Requirements & Dive Deep**  
   * Partners must authenticate via HMAC, but we also needed IP whitelisting for the most critical endpoints.  
   * Zero‑downtime migration and a rollback plan were mandatory.  

2. **Architecture**  
   * **API Gateway + Lambda Authorizer** – validates JWT + checks a DynamoDB table (`IPWhitelist`) that stores partner ID → CIDR ranges.  
   * **AWS WAF** – rate‑limit per IP, block known bad actors.  
   * **SQS FIFO** – queues webhook events; Lambda processes and forwards to partner endpoints.  
   * **CloudWatch & X-Ray** – monitor latency and trace failures.

3. **Scalability / Availability**  
   * API Gateway scales elastically; WAF handles burst traffic.  
   * DynamoDB offers single‑digit millisecond reads, eliminating a new bottleneck.  
   * SQS FIFO guarantees order with 200 msg/s per queue, enough for our peak of 3 k requests/second.

4. **Cost & Trade‑offs**  
   * Estimated $0.15/month for API Gateway + $0.02/million WAF rules.  
   * DynamoDB on-demand keeps cost predictable ($1.25/MW).  
   * Trade‑off: added a tiny 2 ms latency from the authorizer, acceptable given the security gain.

**Result**  
* **Security Impact:** Zero incidents in 12 months; 99.999% request success vs. previous 95%.  
* **Performance:** End‑to‑end latency dropped from 350 ms to 210 ms after caching CIDRs in Lambda layers.  
* **Partner Satisfaction:** NPS improved by 15 points, and partner churn fell by 4%.

**Learnings & Ownership**  
I drove the initiative end‑to‑end, coordinating with security, ops, and product—demonstrating ownership. The design was iterated through threat modeling (Dive Deep) and A/B testing before rollout. When a false positive blocked a legitimate IP during migration, I quickly updated the whitelist logic to include a “grace period” flag, turning failure into an improved policy.

**Leadership Principles Highlighted**  
* **Customer Obsession** – partners’ reliability mattered more than raw throughput.  
* **Ownership & Bias for Action** – I took full responsibility and delivered a secure solution within two sprints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
