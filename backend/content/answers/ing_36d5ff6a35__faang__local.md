---
qid: ing_36d5ff6a35__faang__local
question: 'Explain: Cloud Computing — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 508
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:51:31-05:00'
sources: []
---

## Clarify  
We need to describe a **cloud‑based client–server architecture** as it would be used in an ML service (e.g., inference API). Key assumptions: stateless clients, load‑balanced request routing, autoscaling compute, persistent storage for models and data, and secure, low‑latency communication.

## Approach  
1. **Front‑end** – HTTPS gateway (API Gateway or load balancer).  
2. **Compute layer** – containerized inference workers behind a Kubernetes cluster; autoscale by CPU/latency metrics.  
3. **Model store** – object storage (S3/Blob) + model registry; workers pull the latest version via cache.  
4. **Stateful services** – optional caching layer (Redis), feature store, and monitoring stack.  
5. **Security & observability** – IAM roles, VPC isolation, TLS termination, distributed tracing.

## Depth  
- **Load Balancing:** Layer 7 routing distributes requests; health checks keep unhealthy pods out.  
- **Autoscaling:** Horizontal Pod Autoscaler triggers on average CPU >70% or request latency >200 ms; pre‑warm new pods to avoid cold starts.  
- **Model Deployment:** Blue/green via sidecar that serves both versions, allowing rollback in <5 s.  
- **Latency:** Keep‑alive HTTP connections + gRPC for high throughput; edge caching (CDN) for read‑heavy ML predictions.  
- **Cost:** Spot instances + Reserved Capacity; model size cached in local SSD to reduce S3 bandwidth.

## Edge Cases  
- **Model version drift** – ensure backward compatibility or use feature flags.  
- **Zero‑downtime updates** – race conditions when multiple workers load different weights.  
- **Burst traffic** – sudden spikes may exceed capacity before autoscaler reacts; mitigate with pre‑provisioned “spike pods.”  

## Optimize & Communicate  
Explain trade‑offs: using managed Kubernetes reduces ops overhead but adds vendor lock‑in; serverless (Lambda) simplifies scaling yet suffers from cold starts. Emphasize metrics (latency, error rate, cost per inference) and how each design choice impacts them. Wrap up by highlighting the end‑to‑end flow from client request to model inference and back, stressing observability for rapid incident response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
