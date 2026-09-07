---
qid: ing_41e8613ba0__faang__local
question: 'Explain: Amazon Prime Video Microservices — Prime Video Microservices -
  by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 446
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:17:16-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to describe how Amazon Prime Video is built using micro‑services, as explained by Neo Kim. Confirm that they want an architectural overview (service boundaries, data flow, scaling) rather than code details or deployment specifics.

**Approach**  
1. List core domains: *catalog*, *search*, *recommendation*, *streaming*, *user profile*, *billing*.  
2. Map each domain to a stateless service with its own API gateway.  
3. Highlight the event‑driven backbone (Kafka/NSQ) that propagates state changes (e.g., “watch history” → recommendation updates).  
4. Note shared infrastructure: service registry, circuit breaker, centralized config, and observability stack.

**Depth**  
- **Catalog Service** stores metadata in a NoSQL store; exposes CRUD via gRPC.  
- **Search Service** uses Elasticsearch, updated asynchronously through message queues.  
- **Recommendation Service** runs batch jobs on Spark for training models; online inference via REST.  
- **Streaming Service** orchestrates CDN edge pulls and DRM tokens; each playback request is a stateless Lambda‑like function.  
- All services use *event sourcing* to maintain audit trails, enabling rollbacks and replay.  
- Autoscaling is driven by CloudWatch metrics; services are containerized (ECS/EKS) with blue/green deployments.

**Edge Cases**  
- Network partitions: circuit breaker falls back to cached data.  
- Data skew in recommendation training: sharding & partitioning strategies.  
- CDN cache miss spikes: rate‑limit request bursts.  

**Optimize & Communicate**  
Emphasize that micro‑services allow independent scaling (e.g., streaming scales with viewership peaks), rapid feature rollouts, and fault isolation. Mention trade‑offs: increased operational complexity and the need for robust observability. Conclude by noting how Neo Kim stresses a *data‑first* mindset—each service owns its data model, yet shares an event bus to keep the system consistent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
