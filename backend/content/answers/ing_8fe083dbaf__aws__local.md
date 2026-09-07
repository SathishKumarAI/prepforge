---
qid: ing_8fe083dbaf__aws__local
question: 'Explain: Recommended by LinkedIn — System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 555
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:25-05:00'
sources: []
---

**Situation (S)** – In my last role I led the redesign of a food‑delivery platform that handled **> 200k orders/day** during peak hours. The product team wanted to shift from a monolithic Java stack to a serverless, event‑driven architecture on AWS.

**Task (T)** – Build an end‑to‑end system that supports real‑time order placement, dynamic restaurant matching, ETA calculation, and push notifications while keeping latency < 200 ms for the 95th percentile of users.

**Action (A)**  
1. **API Gateway + Lambda**: Exposed REST endpoints (`/restaurants`, `/orders`). Each Lambda writes to **DynamoDB** (partitioned by city) and publishes an event to **SNS**.  
2. **Matching Service** – A **Step Function** orchestrates a *distance‑based* lookup against the **Amazon Location Service** API, then queries a pre‑computed **ElastiCache Redis** for nearby restaurants.  
3. **ETA Engine** – Runs in **Fargate** containers; consumes order events from an **SQS FIFO** queue and writes predictions to DynamoDB.  
4. **Real‑time updates** – Push via **Amazon Pinpoint** (WebSocket API) and mobile SDKs, backed by **CloudFront** for low‑latency edge delivery.  
5. **Observability** – Centralized logs in CloudWatch, metrics in **Prometheus/Grafana**, and alarms on order latency.

**Result (R)** – The new design handled a 4× traffic spike during a city‑wide festival with *< 150 ms* average latency, reduced ops costs by **35%** (no dedicated servers), and cut the failure rate of ETA predictions from 12% to 2%.  

> *Leadership Principles*: **Customer Obsession** – we measured user satisfaction via real‑time feedback loops; **Ownership** – I drove cross‑team alignment and automated rollback scripts.  
> *Bar‑raiser focus*: depth in AWS service trade‑offs, quantified impact (latency & cost), and lessons from an earlier monolith failure that highlighted the need for event‑driven decoupling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
