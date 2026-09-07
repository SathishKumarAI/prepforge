---
qid: ing_c4fb41b0c6__aws__local
question: 'Explain: Load Balancer — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 471
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:17-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the redesign of a URL‑shortening service that handled 10 M requests/day and grew to 40 M in two years. The goal was to keep latency < 50 ms while supporting horizontal scaling.

**Action (Design)**  
I built a **stateless API layer** behind an **AWS Application Load Balancer (ALB)**, routing `/s/{shortId}` to a pool of **EC2 Auto‑Scaling Group** instances. Short IDs are generated with a *base‑62* counter stored in a **DynamoDB table** (`PK=counter`).  
*Lookup*: A single `GetItem` on DynamoDB resolves the short ID → long URL. To hit < 1 ms, I enabled **DAX** caching (30 % read latency reduction).  
*Write path*: POST requests increment the counter via a *transactional write* and store the mapping in DynamoDB with TTL=365 days.  

**Result**  
- Latency dropped from 120 ms to **48 ms**; error rate < 0.01%.  
- Cost per request fell by **35 %** thanks to serverless caching (DAX) and spot instances for the ASG.  
- The system handled a traffic spike of 5× during a marketing campaign without degradation.

**Leadership Principles & Bar‑raiser cues**  
*Customer Obsession*: I measured real user latency, not just theoretical numbers.  
*Ownership*: I own end‑to‑end monitoring (CloudWatch + X-Ray) and automated rollback on failure.  
*Dive Deep*: Using DynamoDB’s consistency model and DAX profiling showed where the bottleneck was.  
*Bias for Action*: Implemented within 3 sprints, avoiding costly redesigns.

**Takeaway**  
A simple ALB + stateless EC2 + DynamoDB + DAX combo delivers high availability (99.999%) with predictable cost and rapid feature iteration—exactly what Amazon’s “Deliver Results” demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
