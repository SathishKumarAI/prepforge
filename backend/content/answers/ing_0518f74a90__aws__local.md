---
qid: ing_0518f74a90__aws__local
question: 'Explain: REST vs. GraphQL — System Design: Top 15 Trade-Offs - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 440
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:37:19-05:00'
sources: []
---

**Situation / Task**  
I led a migration of our recommendation engine from a legacy REST API to GraphQL so the mobile team could fetch only what they needed and reduce over‑fetching. The goal was a 30 % cut in payload size while keeping latency under 200 ms.

**Action**  
1. **Requirements & Design** – Defined *query complexity limits* (depth=4, cost=10) to guard against expensive traversals.  
2. **AWS Stack** – Deployed GraphQL with **AppSync** backed by **DynamoDB** and **ElasticCache Redis** for hot‑keys; used **Lambda@Edge** for schema stitching.  
3. **Trade‑off Analysis (top 15)** –  
   - *Scalability*: AppSync auto‑scales, but each query incurs resolver overhead → added caching to mitigate.  
   - *Availability*: Single point of failure moved from API Gateway to AppSync; implemented multi‑AZ DynamoDB.  
   - *Cost*: Per‑query cost rose by 12 % vs REST, offset by 25 % bandwidth savings.  
   - *Complexity*: Frontend developers needed GraphQL knowledge → invested in internal workshops.  
4. **Bias for Action** – Rolled out a staged rollout; collected telemetry.

**Result**  
- Payload size dropped from 1.2 MB to 0.9 MB (25 % reduction).  
- Average response time improved from 210 ms to 180 ms (15 % lower).  
- Monthly cost increased by only $800 vs projected $10k savings, netting a 20 % overall spend reduction.

**Reflection**  
The biggest learning was underestimating resolver cold‑start latency; we mitigated it with provisioned concurrency. This demonstrates **Ownership**, **Dive Deep**, and **Deliver Results**—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
