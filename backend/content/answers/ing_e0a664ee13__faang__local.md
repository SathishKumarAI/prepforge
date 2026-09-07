---
qid: ing_e0a664ee13__faang__local
question: What Is Client-Server Architecture? — Client-Server Architecture | System
  Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 376
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:21:38-05:00'
sources: []
---

**Clarify**  
You’re asking for the definition and key traits of a *client‑server* architecture in the context of ML systems—i.e., how front‑end clients (e.g., mobile apps) interact with back‑end model services over a network.

**Approach**  
1. Define roles: client vs server.  
2. Explain communication flow & protocols.  
3. Highlight typical ML workloads and scalability concerns.  
4. Touch on security, latency, and deployment patterns.

**Depth**  
In client‑server architecture, the **client** is a lightweight process that initiates requests (e.g., a user’s browser or mobile app). The **server** hosts resources—data stores, inference services, model training pipelines—and responds to those requests. For ML, the server typically exposes REST/GraphQL endpoints or gRPC streams that accept feature vectors and return predictions. Clients keep minimal state; servers maintain models, versioning, logging, and scaling logic (e.g., Kubernetes pods behind a load balancer). This separation lets you update models independently of client apps, enables A/B testing, and centralizes monitoring.

**Edge Cases**  
- *High‑frequency inference*: naive polling can overload the server. Use WebSockets or push notifications.  
- *Large payloads*: sending raw images may hit bandwidth limits; compress or use edge preprocessing.  
- *Offline scenarios*: clients must cache recent predictions or fall back to local models.

**Optimize & Communicate**  
To improve latency, deploy model servers in multiple regions and route via a CDN. Add caching (e.g., Redis) for deterministic queries. Explain that this architecture scales horizontally, isolates failures, and aligns with DevOps practices—key points interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
