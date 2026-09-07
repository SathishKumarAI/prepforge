---
qid: ing_7dd5ebd5f4__aws__local
question: 'Explain: Common API Styles — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 557
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:10:02-05:00'
sources: []
---

**Answer (Amazon style)**  

> **What is an API?**  
> An Application Programming Interface exposes a service’s functionality so other systems can invoke it over the network. In ML workloads we typically expose inference endpoints or data‑pipeline triggers.

| Style | Typical Use | AWS Services | Key Trade‑offs |
|-------|-------------|--------------|----------------|
| **REST (HTTP/JSON)** | Simple, cacheable, idempotent CRUD on models | API Gateway + Lambda / ECS + SageMaker endpoint | Easy to consume; higher latency than binary protocols |
| **GraphQL** | Flexible field selection for model metadata or partial predictions | AppSync + Lambda + DynamoDB | Reduced over‑fetching but adds query‑planning cost |
| **gRPC (HTTP/2, Protobuf)** | Low‑latency inference in microservices | Elastic Compute Cloud + SageMaker Runtime API | Requires client support; better for internal ML pipelines |
| **Event‑driven (AMQP / EventBridge)** | Trigger training or batch scoring on data arrival | SQS/SNS + Step Functions + SageMaker Training Jobs | Asynchronous, highly scalable but eventual consistency |

**STAR Example**

- *Situation*: Our recommendation engine served 2 M users; inference latency averaged 350 ms with REST.  
- *Task*: Reduce latency by ≥30% without breaking client compatibility.  
- *Action*: Migrated to gRPC + Protobuf for the core prediction endpoint, added an HTTP/REST gateway for legacy clients. Deployed behind API Gateway with caching and Lambda@Edge for global edge nodes.  
- *Result*: Latency dropped to 210 ms (−40%), throughput increased from 1k req/s to 5k req/s, cost fell 18% due to lower Lambda invocations.  

**What a bar‑raiser hears**

- Ownership: I chose the right protocol after profiling real traffic.  
- Dive Deep: Measured latency per layer and compared serialization costs.  
- Quantified Impact: Clear before/after numbers (latency, throughput, cost).  
- Learning from Failure: Legacy REST clients forced us to keep a dual‑stack approach; we now maintain an automated test harness that verifies round‑trip time across both protocols.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
