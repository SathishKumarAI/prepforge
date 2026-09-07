---
qid: ing_0415438bd9__faang__local
question: 'Explain: Load Balancing — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 492
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:53:51-05:00'
sources: []
---

**Load‑Balancing in ML Systems**

---

### 1️⃣ Clarify  
*Problem:* Distribute inference/ training jobs across GPU/CPU nodes so latency is low and resources are fully utilized.  
*Assumptions to confirm:*  
- Stateless model serving vs. stateful pipelines?  
- Batch size, request rate, SLAs (latency, throughput).  
- Hardware heterogeneity (GPU/CPU, memory).  

### 2️⃣ Approach  
1. **Collect telemetry** – job sizes, resource usage, current queue lengths.  
2. **Define a cost function** – e.g., weighted latency + under‑utilization penalty.  
3. **Select algorithm** – start with *Least‑Connection* or *Weighted Round Robin*, then move to *Dynamic Resource Allocation* (e.g., Kubernetes HPA) and finally *Model‑aware schedulers* that consider GPU memory footprint.  

### 3️⃣ Depth  
- **Stateless inference**: use a *token bucket* per node; when a request arrives, the balancer picks the node with the most available tokens. Complexity O(1).  
- **Stateful pipelines**: employ a *task graph scheduler* (e.g., Airflow DAG) that respects data locality and stage dependencies.  
- **Model‑aware**: embed model size & FLOPs into weights; use a *min‑heap* of nodes sorted by available GPU memory. Complexity O(log n).  

### 4️⃣ Edge Cases  
- Sudden traffic spikes → fall back to *predictive scaling*.  
- Node failure → health checks and graceful draining.  
- Heterogeneous GPUs (RTX vs A100) → maintain separate pools.  

### 5️⃣ Optimize & Communicate  
- **Autoscaling**: tie resource pool size to queue length via a PID controller.  
- **Cache reuse**: keep hot models in memory; evict cold ones using LRU.  
- **Monitoring**: dashboards with latency percentiles + per‑node utilization.  

Explain trade‑offs clearly: simpler round‑robin is fast but can overload a GPU; sophisticated model‑aware schedulers give higher throughput at the cost of added overhead. Always tie back to business SLAs and measurable KPIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
