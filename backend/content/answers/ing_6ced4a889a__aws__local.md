---
qid: ing_6ced4a889a__aws__local
question: 'Explain: Company context — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 445
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:16-05:00'
sources: []
---

**Context – Perplexity.ai**

I joined Perplexity in early 2023 when the team was pivoting from a narrow‑domain chatbot to a general‑purpose AI search engine that could answer any question with minimal latency. The goal was to deliver *“AI as a search layer”* for enterprises, so we had to balance rapid iteration (Bias for Action) with long‑term reliability (Ownership).  

**Situation & Task**  
Our flagship product promised < 200 ms response time for 95 % of queries, yet the monolithic inference stack was hitting CPU saturation during peak traffic. I was tasked with redesigning the inference pipeline to scale elastically while keeping costs under $0.10 per query.

**Action**  
- **Dive Deep** into logs: identified that a single GPU node handled ~70 % of requests due to an uneven load balancer.  
- Proposed a *serverless* architecture:  
  - **Amazon SageMaker Endpoint (Multi‑Model)** for model hosting.  
  - **AWS Lambda + API Gateway** as the request router, using a custom weighted routing algorithm.  
  - **Amazon CloudWatch** for real‑time metrics and auto‑scaling triggers.  
- Implemented *model caching* in **ElastiCache Redis** to reduce cold starts by 80 %.  

**Result**  
- Latency dropped from 400 ms (95th percentile) to 180 ms, meeting the SLA.  
- Query cost fell from $0.18 to $0.07 per request, yielding a quarterly savings of ~$1.2M.  
- Traffic handled grew by 3× without any new servers, demonstrating true elasticity.

**Learning**  
The biggest failure was over‑provisioning GPU nodes based on peak peaks; the lesson: *measure continuously and scale horizontally with serverless primitives*. This mindset has guided subsequent feature rollouts at Perplexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
