---
qid: ing_8c396d2420__aws__local
question: 'Explain: Key Links — Grpc'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 381
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:58-05:00'
sources: []
---

**Situation / Task**  
At my previous company we built a real‑time recommendation engine that served millions of requests per day. The model training pipeline ran on SageMaker, but the inference service had to pull feature vectors from several micro‑services over the network. Latency was 200 ms on average and our SLA required < 50 ms.

**Action**  
I led a design sprint to replace REST with **gRPC** between the inference container (ECS Fargate) and the feature store service.  
- Defined the protobuf schema for feature vectors, using optional fields to keep payload size minimal.  
- Added mutual TLS and HTTP/2 flow‑control to limit burst traffic.  
- Deployed the services behind an Application Load Balancer with target groups per region, leveraging **AWS Global Accelerator** for low‑latency global routing.  
- Instrumented metrics in CloudWatch; set up a Lambda that auto‑scales ECS tasks based on 5‑second latency percentiles.

**Result**  
Latency dropped from 200 ms to **45 ms (77% reduction)**, keeping the SLA 99.9%. Cost fell by 18 % because gRPC’s binary framing reduced network egress by ~30 MB/day. The new architecture also made it easier to add a third feature service without code changes—demonstrating **Ownership** and **Invent & Simplify**.

**Learning**  
We initially underestimated the impact of TLS handshake overhead; adding session resumption mitigated that, showing the importance of *Dive Deep* and continuous learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
