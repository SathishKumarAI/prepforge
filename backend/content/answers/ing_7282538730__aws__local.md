---
qid: ing_7282538730__aws__local
question: Can You Use Both REST and GraphQL? — REST vs GraphQL - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 496
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:44:25-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When I was leading a data‑science team at my last company, we had to expose two ML models—an image classifier and a recommendation engine—to both legacy mobile clients (REST) and a new web app that preferred GraphQL. The goal: keep latency < 200 ms for 95 % of requests while reducing operational cost by 30 %.  

**Action (Dive Deep + Bias for Action)**  
1. **Requirements & Design** – I mapped the API surface to a single Lambda‑based backend that receives either REST or GraphQL payloads.  
2. **AWS Services** –  
   * Amazon API Gateway (HTTP API) for REST routes, with caching and throttling.  
   * AWS AppSync for GraphQL, using DataSource “Lambda” to call the same inference function.  
   * Amazon SageMaker endpoints (real‑time) as the inference layer; autoscaling on CPU utilization.  
3. **Scalability & Availability** – Both API Gateway and AppSync are region‑wide with built‑in 99.999 % SLA. Lambda’s provisioned concurrency guarantees sub‑100 ms cold starts, while SageMaker’s endpoint auto‑scales to 10× traffic spikes.  
4. **Cost Trade‑offs** – By consolidating logic into one Lambda, we cut maintenance overhead by ~40 %. Using API Gateway caching (15 min TTL) saved $0.02 per 1k requests, translating to ~$12k/yr for our traffic (~600M calls).  

**Result (Deliver Results)**  
- Latency dropped from 350 ms (old REST‑only design) to 180 ms average.  
- 99.5 % of GraphQL queries hit cache; overall cost reduced by **32 %** versus a separate microservice stack.  
- Stakeholders reported higher developer satisfaction (NPS +15).  

**Reflection & Learning** – I learned that a single, well‑designed backend can satisfy heterogeneous clients without fragmenting the system. The bar‑raiser will notice my ownership of end‑to‑end performance, the depth of my cost analysis, and my proactive migration plan for legacy systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
