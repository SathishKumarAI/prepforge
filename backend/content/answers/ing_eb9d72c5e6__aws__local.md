---
qid: ing_eb9d72c5e6__aws__local
question: 'Explain: Frontend Interface Design — ChatGPT System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 454
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:11:03-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I led the redesign of our AI‑powered customer support portal. The goal was to replace a monolithic chatbot UI with a modular, low‑latency interface that could serve 1 M active users and scale to 10 k concurrent chat sessions while keeping monthly ops under $5K.

**Action (Design & Tech)**  
*Customer Obsession + Ownership* – I mapped user journeys, identified friction points, and defined success metrics.  
- **Frontend**: React + Vite with a micro‑frontend architecture; each chatbot widget is a self‑contained bundle loaded via Webpack Module Federation.  
- **Backend**: Serverless API Gateway → Lambda (Python) that calls SageMaker endpoints.  
- **ML**: Two models – a fast rule‑based NLU in Lambda (latency < 50 ms) and a heavy transformer in SageMaker for fallback (max 500 ms).  
- **Scalability**: Auto‑scaling Lambda with provisioned concurrency of 2 k, autoscaling SageMaker endpoints based on CloudWatch metrics.  
- **Availability**: Multi‑AZ deployment; use Route 53 latency routing.  
- **Cost**: Estimated $3.8K/month (Lambda 70%, SageMaker 30%) – a 35% reduction vs legacy monolith.

**Result**  
Post‑launch, average chat completion time dropped from 4 s to 0.9 s, and user satisfaction rose by 18 pts (CSAT 78→96). Load tests showed 99.99 % availability at 10 k concurrent users.  

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end journey, dived deep into latency bottlenecks, quantified impact with A/B data, and iterated on model choice after a first failure that caused >200 ms lag. This cycle of ownership, measurement, and rapid learning is what drives sustainable product excellence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
