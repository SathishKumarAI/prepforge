---
qid: ing_f5ce7a7e48__aws__local
question: 'Explain: Portfolio moves — Mobile Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 434
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:32-05:00'
sources: []
---

**Situation (S)**  
At my last role I was the lead for a cross‑platform mobile app that served 2 M monthly active users. The product roadmap called for a “portfolio move” – shifting features from our legacy iOS/Android codebase into a new, cloud‑native micro‑service architecture to support real‑time AI recommendations.

**Task (T)**  
Own the migration strategy, cut down feature latency by 30 %, and keep zero downtime during rollout.  

**Action (A)**  
1. **Customer Obsession & Ownership** – I started with a user‑journey audit (87 % of users hit a recommendation glitch).  
2. Built an *API gateway* in API Gateway + Lambda to serve AI models hosted on SageMaker, exposing a single endpoint for both platforms.  
3. Implemented *feature toggles* via AppConfig so I could A/B test the new flow with 10 % of traffic before full launch.  
4. Used CloudWatch and X-Ray to dive deep into latency; identified a bottleneck in the recommendation cache, replaced it with ElastiCache Redis (99.9 % availability).  
5. Automated rollback scripts in CodePipeline – “Bias for Action” to act quickly if metrics slipped.

**Result (R)**  
- Latency dropped from 1.2 s to 0.8 s (33 % improvement).  
- Recommendation click‑through rate rose by 18 % in the first month.  
- Zero incidents during the 48‑hour migration window, earning a “Customer Obsession” KPI boost of +12 pts for the quarter.

**Learning**  
The biggest failure was an initial assumption that our cache could scale with traffic; digging into CloudWatch revealed sharding limits. I adjusted the architecture to use Redis Cluster, saving $3k/month and improving resilience—demonstrating *Dive Deep* and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
