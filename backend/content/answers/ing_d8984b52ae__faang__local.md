---
qid: ing_d8984b52ae__faang__local
question: 'Explain: Single Point of Failure — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 494
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:03:08-05:00'
sources: []
---

**Clarify**  
The question asks for a *design* that removes a **single point of failure (SPOF)** in an ML system—e.g., model serving or training pipeline. I’ll assume we’re building a high‑availability inference service used by many clients, with strict latency (<50 ms) and 99.9% uptime.

**Approach**  
1. Identify critical components: load balancer, model replicas, storage (model artifacts), network paths.  
2. Add redundancy at each layer: multiple load balancers, clustered model servers, replicated artifact store, multi‑region routing.  
3. Use health checks & automated failover; implement *canary* deployments to avoid cascading failures.

**Depth**  
- **Load Balancer**: Deploy two NGINX/Envoy instances behind a global traffic manager (e.g., AWS Global Accelerator). If one fails, the other routes all traffic.  
- **Model Serving**: Spin up several stateless containers per model version in Kubernetes; use a *Deployment* with `replicas > 1`. The scheduler automatically replaces crashed pods.  
- **Artifact Store**: Store weights on S3/GCS with cross‑region replication; the serving nodes pull from local cache, fall back to remote if needed.  
- **Networking**: Use redundant internet gateways and private VPC endpoints.  
- **Observability**: Centralized metrics (Prometheus) + alerting; auto‑scale based on CPU/latency.

Complexity is O(1) per request for routing; scaling adds linear cost in replicas. Trade‑off: higher cost vs. resilience.

**Edge Cases**  
- Simultaneous failure of both load balancers → use a DNS‑based failover with low TTL.  
- Network partition between regions → graceful degradation by serving stale models locally.  
- Model drift after rollback → versioned checkpoints ensure consistent behavior.

**Optimize & Communicate**  
Explain that each layer’s redundancy follows *graceful degradation*: if one component fails, the system continues operating at reduced capacity rather than down. Highlight cost‑benefit: doubling resources ~10% cost increase but reduces MTTR from hours to minutes. Conclude by noting monitoring and automated recovery are as important as architectural redundancy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
