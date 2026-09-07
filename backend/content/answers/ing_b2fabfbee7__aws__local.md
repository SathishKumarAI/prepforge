---
qid: ing_b2fabfbee7__aws__local
question: 'Explain: Part 2 - Register a Query — How GraphQL Works at LinkedIn'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 485
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:28-05:00'
sources: []
---

**Situation & Task**  
I was hired by a data‑engineering team at LinkedIn to expose the internal “Register a Query” service as a GraphQL endpoint so that front‑end teams could fetch query metadata (owner, status, last run) in a single round‑trip. The goal was to reduce API latency from 3 × REST calls to <20 ms per request while keeping cost under $0.01/req.

**Approach & Design**  
- **Ownership**: I mapped the entire flow—client → GraphQL → AppSync resolver → Lambda → DynamoDB—to identify bottlenecks.  
- **Dive Deep**: Profiling revealed 40 % of latency came from cold starts in Lambda. I introduced an *Always‑On* container using AWS Fargate (10 % higher cost but <5 ms).  
- **AWS Services**:  
  - **AppSync** for schema and request batching.  
  - **Lambda@Edge** for auth & caching (TTL 60 s).  
  - **DynamoDB Global Tables** for multi‑region availability, with on‑demand capacity to scale from 1k to 50k RCU without provisioning headaches.  
- **Scalability**: Sharded DynamoDB keys by region and used exponential backoff in resolvers.  
- **Cost**: Reduced API calls from 3 × $0.0004 to $0.003/req, saving ~$1.2M annually.

**Result**  
- Latency dropped from 120 ms to 18 ms (90% improvement).  
- Throughput scaled to 10k concurrent users with no outages.  
- Front‑end teams reported a 25% faster iteration cycle on dashboards.

**Reflection**  
I learned that *Bias for Action* can be balanced with *Ownership*: quick wins (AppSync) were coupled with deep dives into cold starts. The bar‑raiser will note my end‑to‑end ownership, quantitative impact, and willingness to iterate based on real‑world telemetry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
