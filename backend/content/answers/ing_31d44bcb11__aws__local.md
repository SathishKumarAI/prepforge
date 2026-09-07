---
qid: ing_31d44bcb11__aws__local
question: 'Q: You need to give an LLM agent access to 200 internal tools. How do you
  handle schema overload?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 450
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:42-05:00'
sources: []
---

**Situation & Task**  
In 2024 I led a cross‑functional team tasked with giving an LLM agent instant access to **200 internal tooling APIs** (CI/CD, billing, HR, analytics). The schema exploded—each API had its own contract, versioning, and auth model. Our goal was to reduce the agent’s “schema overload” while keeping latency < 300 ms per call.

**Approach & Design**  
- **Unified Contract Layer**: Built a *Schema Registry* in DynamoDB that stores normalized JSON‑Schema descriptors for every tool. The LLM queries this registry first, then routes calls via API Gateway + Lambda Authorizer.  
- **Versioned Endpoints**: Adopted Semantic Versioning and deployed each tool behind an Application Load Balancer with path‑based routing; old versions stay active until the agent deprecates them.  
- **Caching & Cost Control**: Cached schema lookups in ElastiCache Redis (30 s TTL) to cut API calls by 70%.  
- **Observability**: Instrumented with CloudWatch metrics; set a Service Level Indicator of 99.5% success and <300 ms latency.

**Result**  
Within two sprints, we reduced the agent’s schema‑resolution time from 1.2 s to **0.28 s**, cut API call volume by **65%**, and lowered operational cost by **$12k/month**. The LLM now scales to 10× more concurrent users without hitting rate limits.

---

*Leadership Principles*: **Ownership** (I drove the end‑to‑end solution), **Dive Deep** (engineered a schema registry and latency metrics), and **Deliver Results** (quantified performance gains).  
Bar‑raisers look for this level of depth, measurable impact, and lessons learned—specifically how we handled version drift and avoided cascading failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
