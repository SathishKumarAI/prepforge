---
qid: ing_0392d0d0e6__aws__local
question: 'Explain: REST vs GraphQL — Restvsgraphql'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 462
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:35-05:00'
sources: []
---

**Situation & Task**  
I was leading the migration of our recommendation engine’s API from a legacy REST stack to GraphQL for a global e‑commerce platform that serves ~3 M active users daily. The goal: reduce latency, cut payload size, and enable mobile clients to fetch exactly what they need.

**Action (Technical)**  
*Requirements*: 1) keep backward compatibility, 2) support real‑time personalization, 3) minimize cost on AWS.  
*Design*: I proposed a **hybrid gateway** using **Amazon API Gateway** for REST endpoints and **AWS AppSync** for GraphQL. AppSync leveraged **DynamoDB** with fine‑grained indexes for fast lookups, and **Lambda@Edge** to enrich responses with user context.  
I introduced **query complexity limits** (AppSync) to protect against expensive queries, and used **CloudWatch metrics** to monitor per‑field latency.  

*Scalability & Cost*: GraphQL reduced payloads by 45 % on mobile, cutting egress costs from $12k/month to $6.5k/month. The combined gateway handled 10× the peak traffic with 99.99 % availability.

**Result (Data‑Driven)**  
Within two months of rollout:  
- Mobile page load time dropped 30 ms → 20 % lift in conversion rate.  
- API request volume per user fell from 8 to 4, cutting server cost by $18k/month.  

**Leadership Principles Reflected**  
- **Customer Obsession** – delivered a faster, lighter experience for users worldwide.  
- **Ownership & Dive Deep** – architected the solution end‑to‑end, monitored every metric, and iterated on performance.  

**Bar‑raiser Takeaway**  
I demonstrated ownership by owning the entire migration lifecycle, dove deep into AWS services to engineer a cost‑effective design, quantified impact with clear metrics, and learned from an initial over‑aggressive query limit that was later tuned after real‑world testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
