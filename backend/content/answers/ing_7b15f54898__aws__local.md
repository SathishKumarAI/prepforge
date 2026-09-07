---
qid: ing_7b15f54898__aws__local
question: How Does the User Receive the Response? — ChatGPT System Design - by Neo
  Kim and Hayk
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 478
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:03:48-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** In a large‑scale conversational AI platform (ChatGPT‑style), we had to guarantee that a user’s prompt is returned within 1 s while handling millions of concurrent sessions.  
> **Task:** Design the “response delivery” path from the inference model to the front‑end, ensuring low latency, high availability, and cost control.  
> **Action:**  
> * **Front‑end → API Gateway**: A single REST/WS endpoint behind **Amazon API Gateway** (regional) with a 10 ms integration timeout.  
> * **Load Balancing & Caching**: Traffic is routed to an **Elastic Load Balancer (ELB)** that forwards requests to a fleet of **EC2 Spot Instances** running the inference service in an Auto Scaling group (min = 5, max = 200). A **Redis‑based cache** (Amazon ElastiCache) stores recent prompt–response pairs; cache hit latency is < 3 ms.  
> * **Inference Service**: Each instance hosts a **TensorFlow Serving** container behind **AWS Fargate**, enabling instant scaling and isolation. The service streams partial results via **HTTP/2 Server‑Sent Events** so the UI can render text incrementally.  
> * **Observability & Resilience**: **CloudWatch Alarms** trigger automatic retries on 5xx responses; **SQS FIFO queues** buffer burst traffic, preventing overload.  
> * **Cost Control**: Spot pricing keeps inference cost at ~$0.04 per request, while the caching layer reduces model calls by 70 %.  
> **Result:** Post‑deployment we achieved a 92 % on‑time delivery rate with median latency of 720 ms, and cut operational costs by 55 % compared to the legacy monolith.  

**Leadership Principles Highlighted:** *Customer Obsession* (instant, reliable responses), *Ownership* (end‑to‑end design), *Dive Deep* (latency breakdown, cost analysis).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
