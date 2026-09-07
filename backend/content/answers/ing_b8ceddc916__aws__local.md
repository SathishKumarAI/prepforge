---
qid: ing_b8ceddc916__aws__local
question: Why are WebSockets used? — What are WebSockets and Why are they Used?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 441
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:21:51-05:00'
sources: []
---

**Why I’d choose WebSockets for real‑time ML inference**

| **Leadership Principle** | **Why it matters** |
|---------------------------|--------------------|
| *Customer Obsession* | Users expect instant feedback from predictive models (e.g., live fraud alerts). |
| *Ownership* | End‑to‑end latency and reliability are my responsibility. |

**S – Situation:**  
I was building a real‑time credit‑card fraud detector that needed to push model predictions to merchants’ dashboards with < 50 ms latency. A polling REST API added 300 ms overhead per round trip.

**T – Task:**  
Replace the polling mechanism with a bi‑directional, low‑overhead channel that could scale to millions of concurrent users and guarantee at‑least‑once delivery.

**A – Action:**  
Implemented **WebSocket** connections between the merchant’s browser and an API Gateway endpoint. The gateway triggers an ECS Fargate container running a FastAPI service that streams predictions back over the same socket. To ensure high availability I:

1. Used **AWS API Gateway WebSocket APIs** (regional endpoints) for low latency.
2. Employed **Amazon DynamoDB Streams** to trigger Lambda functions that push results into the socket.
3. Enabled **WebSocket message buffering** in CloudWatch Logs for audit and replay.

**R – Result:**  
Latency dropped from 350 ms to 45 ms (≈ 87% improvement). The system handled 2 × the peak load without additional cost because WebSockets keep a single TCP connection alive, eliminating per‑request overhead. Failure handling: when a socket closed unexpectedly, the Lambda retry logic ensured at‑least‑once delivery, and we logged failures for post‑mortem analysis.

**Takeaway:**  
WebSockets are ideal for ML workloads that require low‑latency, stateful communication. They reduce round‑trip cost, simplify client logic, and let you scale horizontally with minimal operational overhead—exactly what Amazon customers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
