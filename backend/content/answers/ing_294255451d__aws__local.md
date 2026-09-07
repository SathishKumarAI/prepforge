---
qid: ing_294255451d__aws__local
question: 'Explain: Routing Strategies — Ai Gateways And Model Routing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 398
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:58:53-05:00'
sources: []
---

**Scenario (STAR)**  
*Situation:* A fintech client needed to serve 4 M daily users with a mix of on‑prem and cloud ML models.  
*Task:* Design an AI gateway that routes inference requests to the optimal model (in‑house, SageMaker endpoint, or Lambda) while keeping latency < 50 ms.  
*Action:* I built a **Model Routing Service** in front of all endpoints. It exposes a REST/GraphQL API and internally uses *AWS App Mesh* for service discovery and *Amazon CloudWatch Metrics* to track per‑model latency, cost, and error rates.  

1. **Routing logic** – A lightweight Lambda (10 ms cold start) queries a DynamoDB table that stores model metadata (version, last‑used timestamp, performance).  
2. **Decision engine** – Implements a simple weighted round‑robin with *dynamic weights* based on real‑time latency and cost metrics; uses *AWS Step Functions* to retry or fallback if the primary model fails.  
3. **Scalability & Availability** – The gateway runs in an Auto Scaling group behind an Application Load Balancer, ensuring 99.999 % SLA. Each target (SageMaker endpoint, Lambda, on‑prem proxy) is placed in a separate AZ for resilience.  

*Result:* After rollout, we cut average inference latency from **120 ms to 42 ms** and reduced cost by **23 %** due to smarter routing.  
I learned that *“Bias for Action”* means prototyping fast (using SAM templates) and then iterating with data; *“Dive Deep”* was key when debugging a subtle cache‑stale issue that caused 2 s spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
