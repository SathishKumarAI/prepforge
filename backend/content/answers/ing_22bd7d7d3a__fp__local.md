---
qid: ing_22bd7d7d3a__fp__local
question: 'Explain: High-Level Design — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 417
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:19:32-05:00'
sources: []
---

### Why a Load Balancer is Needed  
In any production ML service, predictions are served through multiple worker nodes (model servers). A single node can only handle *λ* requests per second before latency spikes or failures occur. The fundamental problem is to **maximize throughput while keeping each node’s utilization below a safe threshold**. This is an instance of the classic *resource allocation* optimization: we want to minimize the maximum load across nodes, subject to capacity constraints.

### Core Design Principles  
1. **Uniform Work Distribution** – A hash‑based or round‑robin scheme ensures that every request sees roughly the same queue length.  
2. **Health Awareness** – Nodes must report heartbeats; a failure detection loop removes them from the pool to avoid routing traffic to a dead worker.  
3. **Latency‑Aware Scaling** – Monitor per‑node response times; if they rise, spawn new workers or shift traffic proportionally (dynamic weight adjustment).  

### Implementation Sketch  
- **Front‑end LB**: A stateless proxy (e.g., NGINX or Envoy) that forwards requests to a *service registry* containing live node addresses.  
- **Service Registry**: Maintains health status via periodic heartbeats; exposes a REST API for the LB to query current weights.  
- **Scaling Controller**: Periodically samples average latency and queue length; if metrics exceed thresholds, triggers autoscaling (Kubernetes HPA or custom script).  

### Non‑Obvious Insight  
Most designs focus on *throughput*, overlooking **prediction drift** caused by stale model replicas. By coupling the LB with a *model version tag* in each request header, we can route only compatible requests to nodes running the corresponding ML artifact, ensuring consistent inference quality while scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
