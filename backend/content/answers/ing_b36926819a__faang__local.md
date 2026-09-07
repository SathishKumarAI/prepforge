---
qid: ing_b36926819a__faang__local
question: 'Explain: List and describe the different load balancing methods and their
  algorithms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 686
total_tokens: 922
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:41:10-05:00'
sources: []
---

**Clarify**  
You want a concise overview of the main load‑balancing techniques used in ML inference pipelines or distributed training, along with their core algorithms and key trade‑offs.

---

### 1. Round‑Robin (RR)  
- **Algorithm:** Cycle through workers sequentially (`i = (i+1)%N`).  
- **Complexity:** O(1) per request.  
- **Use‑case:** Uniform capacity, stateless models.  

### 2. Least‑Connections (LC)  
- **Algorithm:** Track active requests per node; pick node with minimal count.  
- **Complexity:** O(log N) if using a min‑heap or priority queue.  
- **Use‑case:** Heterogeneous workloads where request duration varies.

### 3. Weighted Round‑Robin (WRR) / Weighted Least‑Connections (WLC)  
- **Algorithm:** Assign weights `w_i`; RR cycles proportionally, LC uses weighted counts (`active/w`).  
- **Complexity:** O(1) for WRR; O(log N) for WLC.  
- **Use‑case:** Nodes with different GPU/CPU capacities.

### 4. IP‑Hash (Consistent Hashing)  
- **Algorithm:** `hash(IP)%N` → node.  
- **Complexity:** O(1).  
- **Use‑case:** Sticky sessions, stateful inference caches.

### 5. Random / Weighted Random  
- **Algorithm:** Uniform or weighted random selection of a worker.  
- **Complexity:** O(1).  
- **Use‑case:** Simple fallback when monitoring data is scarce.

### 6. Least‑Response‑Time (LRT)  
- **Algorithm:** Sample `k` workers, pick the one with lowest average latency.  
- **Complexity:** O(k).  
- **Use‑case:** Latency‑sensitive online inference; requires telemetry.

### 7. Resource‑Aware / Adaptive  
- **Algorithm:** Combine metrics (CPU/GPU load, memory, queue length) into a cost function; pick min.  
- **Complexity:** Depends on metric aggregation; typically O(log N).  
- **Use‑case:** Multi‑model serving where resources fluctuate.

---

### Edge Cases & Testing  
- **Skewed traffic** → IP‑hash may overload one node.  
- **Node failure** → LC and WRR can adapt quickly; RR may send to dead node until heartbeat updates.  
- **Latency spikes** → LRT mitigates but needs fresh metrics.  

---

### Optimize & Communicate  
Start with the simplest (RR) for baseline, then instrument latency/queue metrics. Use a hybrid: IP‑hash for stateful requests + LC for stateless. Explain that we’ll monitor SLA impact and switch weights if GPU utilization diverges. This layered strategy balances low overhead, fairness, and responsiveness—exactly what FAANG interviewers look for in a production ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
