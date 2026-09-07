---
qid: ing_d87703b048__aws__local
question: 'Explain: Operational Excellence (5 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 497
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:57-05:00'
sources: []
---

**Operational Excellence – System Design (5 min)**  

**S – Situation**  
I led the redesign of a real‑time recommendation engine for an e‑commerce platform that served 200 M page views/day. The existing monolith had a 12 % error rate and 8 s latency during peak traffic, hurting conversion.

**T – Task**  
My goal was to achieve sub‑500 ms latency, <1 % error, and 99.9 % availability while keeping cost under $0.30 per request.

**A – Action**  
*Ownership & Bias for Action:* I broke the monolith into micro‑services: **FeatureExtractor**, **ModelInference**, and **ResultAggregator**.  
*Technical design:*  
- **AWS Lambda + API Gateway** for stateless inference (auto‑scales, 0.15 $ per million invocations).  
- **Amazon SageMaker Endpoint** with autoscaling on CPU/GPU to keep latency <200 ms.  
- **DynamoDB Global Tables** store user profiles; read‑through cache in **ElastiCache Redis** for hot keys.  
- **Step Functions** orchestrate the workflow, providing retries and dead‑letter queues.  
*Dive Deep:* Instrumented with CloudWatch Metrics & X-Ray to identify 30 % of latency from DynamoDB reads; added local caching to reduce read ops by 70 %.  

**R – Result**  
- Latency dropped from 8 s → **0.42 s** (95th percentile).  
- Error rate fell from 12 % → **<0.5 %**.  
- Availability hit **99.97 %** over a 3‑month run.  
- Cost decreased by **35 %** ($120k/yr saved).  

**Bar‑raiser cues** – I own the entire lifecycle, dive deep into metrics, quantify impact (latency, error, cost), and iterate quickly after failures (e.g., cache warm‑up). This showcases *Customer Obsession* (better UX) and *Ownership* (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
