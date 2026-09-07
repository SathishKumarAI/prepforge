---
qid: ing_02b9c591a8__aws__local
question: 'Explain: Performance Risks with GraphQL — REST vs GraphQL - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 488
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:30:26-05:00'
sources: []
---

**Context (Situation)**  
While leading the API migration for our e‑commerce catalog service, I was tasked with deciding between a new GraphQL layer and keeping our existing REST endpoints. The goal was to reduce client payloads and eliminate over‑fetching, but we had strict SLAs: 99.9 % availability and <200 ms latency under peak load.

**Task**  
Identify performance risks of GraphQL relative to REST, quantify the impact on user experience, and propose an AWS‑native solution that balances cost and scalability.

**Action**  
1. **Dive Deep into Query Complexity** – I instrumented a sample GraphQL server with AWS AppSync. A single client query could request deeply nested categories → 12 levels deep. Each level added ~15 ms of resolver latency, pushing average response to 450 ms under 10k QPS.  
2. **Cache and Batch Resolvers** – Implemented DynamoDB‐based DataLoader caching and AppSync’s built‑in batch resolvers, cutting per‑resolver time by 60 %.  
3. **Cost & Availability Trade‑offs** – Compared AppSync (managed, pay‑as‑you‑go) vs self‑hosted Apollo on ECS. The managed service saved $1.2M/yr in ops and gave us built‑in failover across AZs.

**Result**  
Latency dropped to 210 ms at 15k QPS, meeting SLAs while cutting payload size by 35 %. User churn fell from 4.7 % to 3.9 % during the rollout.  

---

### Leadership Principles
- **Customer Obsession** – Prioritized end‑user latency and data usage.  
- **Ownership** – Took full responsibility for performance testing, cost modeling, and post‑deployment monitoring.  

### Bar‑raiser Expectations
- Demonstrated *ownership* by leading cross‑functional tests.  
- Showed *deep dive* through resolver profiling and caching strategy.  
- Quantified impact with real latency metrics and churn reduction.  
- Learned from early failures (over‑fetching) to iterate on query complexity limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
