---
qid: ing_92d55c542a__aws__local
question: 'Explain: :rocket: gRPC is faster than REST API'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 384
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:08-05:00'
sources: []
---

**Situation & Task**  
I led the migration of our recommendation engine from a legacy REST microservice to gRPC in 2024 to cut API latency and increase throughput for our mobile app (45 % daily active users).  

**Action**  
- *Dive Deep*: Benchmarked both protocols under realistic load using **k6**. gRPC’s binary framing reduced payload size by ~70 % compared to JSON, lowering round‑trip time from 120 ms to 30 ms.  
- *Design*: Deployed a **gRPC‑Gateway** (Envoy) in front of an **Amazon ECS Fargate** cluster, exposing the service via HTTPS for external clients while keeping internal traffic gRPC. Added **AWS App Mesh** for observability and fine‑grained traffic control.  
- *Bias for Action*: Rolled out incrementally with a canary strategy; monitored latency in CloudWatch, scaling automatically using ECS Service Auto Scaling based on CPU/Memory thresholds.

**Result**  
Latency dropped 75 %, throughput increased from 1,200 req/s to 3,500 req/s, and cost per request fell by ~35 % due to fewer data transfer bytes. Customer satisfaction (CSAT) rose 12 points in the subsequent quarter.  

**Reflection**  
I learned that protocol choice can be a game‑changer; however, I had initially underestimated the need for a gateway layer to maintain backward compatibility. Future migrations will include a dual‑stack approach from day one.  

*Leadership Principles highlighted*: **Customer Obsession**, **Ownership**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
