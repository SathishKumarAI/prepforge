---
qid: ing_177fc77731__faang__local
question: 'Explain: Response Parts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 421
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:39:20-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of what an *API* is, framed in the context of system design and machine‑learning services. I’ll assume you want: (1) definition, (2) how it’s used to expose ML models, and (3) typical architectural patterns.

**Approach**  
1. Define “Application Programming Interface.”  
2. Show its role as a contract between client and server.  
3. Map this to ML model serving – e.g., REST/GRPC endpoints that accept data and return predictions.  
4. Touch on scalability concerns (load balancers, autoscaling) and observability.

**Depth**  
An **API** is an interface that exposes functionality of a system through well‑defined calls (endpoints). For ML, the API typically accepts input features in JSON or protobuf, forwards them to a model inference engine, and returns predictions. The contract specifies HTTP verbs, URL paths, request/response schemas, authentication tokens, rate limits, and error codes.  
In production, we wrap the model in a stateless service behind a load balancer; each request is routed to an autoscaled container pool (e.g., Kubernetes). Caching frequently‑used predictions or embeddings reduces latency. Metrics (latency percentiles, error rates) feed into alerting.

**Edge Cases**  
- *Version drift*: clients may send older feature vectors → versioned endpoints (`/v1/predict`).  
- *Cold start*: first request to a newly spun container incurs model load time; mitigated by pre‑warming.  
- *Security*: malformed payloads or injection attempts must be sanitized.

**Optimize & Communicate**  
Explain trade‑offs: REST is simple but adds overhead; gRPC gives lower latency at the cost of more complex tooling. Highlight that a robust API design balances usability, performance, and maintainability—key for scalable ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
