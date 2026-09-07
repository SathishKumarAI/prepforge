---
qid: ing_47dc3e2511__faang__local
question: 'Explain: Latency vs throughput — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 554
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:30:58-05:00'
sources: []
---

**Latency vs Throughput in Machine‑Learning Systems**

| **Metric** | **What it measures** | **Typical impact on ML workloads** |
|------------|----------------------|-----------------------------------|
| **Latency** | Time from request to response (e.g., inference time) | Critical for real‑time services (autonomous driving, recommendation engines). Lower latency ≈ better user experience. |
| **Throughput** | Number of requests processed per unit time (inferences/sec) | Important for batch scoring or serving high‑volume traffic. Higher throughput ⇒ more efficient resource usage. |

---

### 1️⃣ Clarify  
*Goal*: Decide whether to optimize for latency, throughput, or a trade‑off.  
*Assumptions to confirm*:  
- Service type (real‑time vs batch).  
- SLA constraints on response time and request volume.  
- Hardware limits (CPU/GPU, memory).  

### 2️⃣ Approach  
1. **Profile**: Measure baseline latency/throughput per model.  
2. **Model selection**: Choose lighter models for low‑latency or larger ones for higher accuracy if throughput is primary.  
3. **Hardware scaling**:  
   - *Latency*: Single powerful GPU + async I/O.  
   - *Throughput*: Cluster of nodes with load balancer.  
4. **Batching & pipelining**: Group requests to amortize startup costs.  

### 3️⃣ Depth (Technical Detail)  
- **Latency bottlenecks**: Model loading, data pre‑processing, GPU kernel launch latency.  
- **Throughput gains**: Parallel inference via multiple GPUs or TensorRT engines; use of model quantization to reduce compute per request.  
- **Complexity trade‑off**: Batching increases latency linearly with batch size but improves throughput quadratically up to hardware limits.

### 4️⃣ Edge Cases  
- Sudden traffic spikes → queue buildup (latency ↑).  
- Model drift → re‑training may temporarily drop throughput.  
- GPU memory fragmentation → affects both metrics; monitor and purge caches.

### 5️⃣ Optimize & Communicate  
*Improvements*: Auto‑scale nodes based on real‑time latency thresholds; use serverless inference for sporadic bursts.  
*Narrative*: “We first profile to understand where the bottleneck lies, then we choose a strategy—either lean toward low latency with powerful single‑GPU nodes or maximize throughput by horizontal scaling and batching. Continuous monitoring lets us adjust thresholds dynamically.”

*Word count: 219.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
