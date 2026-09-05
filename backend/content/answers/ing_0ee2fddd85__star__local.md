---
qid: ing_0ee2fddd85__star__local
question: 'Explain: Distributed Systems Resilience — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 385
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:58:16-05:00'
sources: []
---

**Situation:**  
While leading the deployment of a real‑time fraud detection model for a payment gateway, we noticed that during peak traffic our inference cluster would frequently time out and downstream services were overwhelmed, causing a 12 % spike in false negatives.

**Task:**  
Design a resilient distributed system that guarantees ≥99.9 % uptime for the inference service, limits cascading failures to other micro‑services, and scales automatically with traffic spikes without manual intervention.

**Action:**  
I re‑architected the stack on Kubernetes:  
1. Added an Istio Service Mesh with rate limiting and retries (retry count 3, exponential backoff).  
2. Deployed a circuit breaker layer using Resilience4j in the Java inference gateway to short‑circuit failing nodes.  
3. Introduced sharding of the model weights across 8 GPU pods and used gRPC load balancing with consistent hashing to keep state local.  
4. Implemented a health‑check endpoint that aggregates pod metrics (latency, error rate) and triggers Kubernetes Horizontal Pod Autoscaler only when CPU >70 % for 5 min.  
5. Set up Prometheus alerts for latency >200 ms and Grafana dashboards; added an on‑call rotation for incidents.

**Result:**  
Within a month we cut inference errors by 95 %, reduced mean time to recovery from 12 min to under 2 min, and achieved 99.98 % uptime during a 3× traffic surge. I learned that combining service mesh patterns with fine‑grained health checks is key to building truly resilient ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
