---
qid: ing_5a50e16e5a__aws__local
question: 'Explain: these types of problems end up actually — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 473
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:53-05:00'
sources: []
---

**Answer (Amazon Way)**  

*Leadership Principles:* **Customer Obsession**, **Dive Deep**

> *Situation*: We were tasked with building an AI‑driven parking‑garage system that could predict space availability, optimize entry/exit flow, and reduce driver wait times.  
> *Task*: Translate the ML model into a production‑grade, highly available architecture that serves millions of concurrent users.  
> *Action*:  
> 1. **Requirement dive** – mapped user journeys (entry, payment, exit) to data pipelines.  
> 2. **Design** – deployed the trained model on **Amazon SageMaker Endpoint** behind an API Gateway for low‑latency inference; used **Kinesis Data Streams** to ingest sensor telemetry and feed a **Lambda** function that normalizes inputs before invoking the endpoint.  
> 3. **Scalability & Availability** – leveraged **SageMaker Multi‑Model Endpoints** with **Auto Scaling** to handle peak traffic (up to 10 k requests/sec) while keeping MTTR < 2 min via **Route 53 health checks** and a **failover region**.  
> 4. **Cost & Trade‑offs** – chose **Spot Instances** for the inference fleet, saving ~35 % versus On‑Demand; accepted slightly higher cold‑start latency (≤ 300 ms) because real‑time constraints were relaxed to 1 s.  
> 5. **Result** – after launch, average driver wait time dropped from 4.2 min to **0.9 min** (77 % reduction), and the system sustained a 99.97 % uptime during a city‑wide traffic event.  

*Bar‑raiser signals*: I owned the end‑to‑end pipeline, dove deep into latency budgets, quantified impact with real metrics, and iterated on failure modes (e.g., handling model drift by automated retraining).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
