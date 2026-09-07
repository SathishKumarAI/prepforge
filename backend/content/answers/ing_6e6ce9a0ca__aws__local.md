---
qid: ing_6e6ce9a0ca__aws__local
question: 'Explain: Token-Based Authentication (JWT) — Stateful vs. Stateless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 446
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:46-05:00'
sources: []
---

**Situation & Task**  
While launching a high‑traffic recommendation engine for our e‑commerce platform, I had to decide how to secure API access. The goal was to keep latency under **50 ms** while scaling to 10M concurrent users.

**Action – Design Choices**  
I evaluated two JWT strategies:

| Architecture | Statefulness | AWS Services | Pros / Cons |
|--------------|--------------|--------------|-------------|
| **Stateless (JWT‑only)** | No session store | Amazon Cognito + API Gateway | *Pros:* 100 % horizontal scalability, zero‑cost per request. *Cons:* Revocation requires blacklist in DynamoDB → extra latency. |
| **Stateful (JWT + Redis cache)** | Session metadata stored | Amazon ElastiCache (Redis) + Lambda | *Pros:* Instant revocation, fine‑grained token expiry. *Cons:* Added cost (~$0.04/instance/hour), limited scalability if not sharded. |

I chose **stateless** for core product APIs to hit the latency target and added a short “refresh” token stored in Cognito’s user pool for revocation.

**Result**  
Post‑deployment, request latency dropped from 70 ms to **48 ms**, uptime improved to **99.999%**, and cost savings were **$12K/month** versus a stateful setup. The team learned that *“less is more”* when the threat model allows short‑lived tokens.

---

### Leadership Principles Highlighted  
- **Customer Obsession:** Prioritized user experience (latency, uptime).  
- **Ownership & Dive Deep:** Analyzed trade‑offs and quantified impact with real metrics.  

**Bar‑raiser takeaway:** The answer shows ownership of the problem, deep dive into AWS services, clear cost/scale trade‑offs, and a data‑driven success story.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
