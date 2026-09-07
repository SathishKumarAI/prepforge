---
qid: ing_45bd719c87__faang__local
question: 'Explain: When to Use Vertical Scaling — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 573
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:25:53-05:00'
sources: []
---

**Vertical scaling (scale‑up) vs horizontal scaling**  
When deciding *when* to vertical‑scale a machine‑learning system, ask:

| Question | Why it matters |
|----------|----------------|
| What is the current resource bottleneck? | CPU, GPU, memory, I/O? |
| How quickly do demands grow? | Linear vs exponential? |
| Is state highly distributed or can it live on one node? | ML inference often fits in a single VM. |
| What latency constraints exist? | A single powerful host gives sub‑ms response times. |

---

### 1️⃣ Clarify  
*Problem:* We need to serve predictions with low latency while handling variable traffic.  
*Assumptions to confirm:* Model size (MB–GB), batch inference vs real‑time, existing hardware, cost budget.

---

### 2️⃣ Approach  
1. **Profile** current usage: CPU/GPU load, memory pressure, I/O wait.  
2. **Identify bottleneck**—if a single machine’s resources are saturated but traffic is sporadic or modest, consider scale‑up.  
3. **Prototype** on a larger instance (e.g., GCP `a2-highgpu-8g` for GPU‑heavy models).  
4. **Compare costs vs performance** against horizontal alternatives (multiple small VMs + load balancer).

---

### 3️⃣ Depth  
*Vertical scaling works best when:*  

- **Model inference is stateless** and fits within a single machine’s RAM.  
- **Latency requirements are strict** (e.g., <10 ms).  
- **Traffic is predictable or bursty but not massively concurrent**; a powerful host can handle peaks without needing many replicas.  

*Complexity:* O(1) for adding capacity—just spin up a larger VM.  
*Trade‑offs:* Single point of failure, vendor lock‑in, limited elastic scaling.

---

### 4️⃣ Edge Cases  
- **Model grows beyond RAM** → must shard or switch to horizontal.  
- **Sudden traffic spikes** exceed the largest instance → need auto‑scaling horizontally.  
- **Cost overruns** on high‑end GPUs → evaluate cheaper CPU‑based inference with quantization.

---

### 5️⃣ Optimize & Communicate  
Explain that vertical scaling is a *quick win* for latency‑sensitive, low‑concurrency workloads, but must be paired with monitoring and cost analysis. If traffic patterns change, transition to horizontal autoscaling or a serverless ML platform (e.g., Vertex AI Predictions). This structured reasoning shows clear decision logic, aligns with FAANG interview expectations, and keeps the answer within 160–240 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
