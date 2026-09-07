---
qid: ing_065c8b7003__faang__local
question: 'Explain: Performance Under Load — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 564
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:59:13-05:00'
sources: []
---

**Performance Under Load – Scalability (System‑Design Focus)**  
*Problem:* A ML inference service must serve millions of requests per second while maintaining low latency and high availability.

---

### 1️⃣ Clarify  
- **Throughput target?** (e.g., 5 M RPS)  
- **Latency SLA?** (<100 ms?)  
- **Model size & type?** (CNN, transformer, etc.)  
- **Data locality?** Batch vs. online inference.  
- **Fault tolerance & rollback needs?**

---

### 2️⃣ Approach  
1. **Stateless micro‑service per model shard** – horizontal scaling.  
2. **GPU/TPU pool with autoscaling** (K8s + Cloud‑native GPU autoscaler).  
3. **Request routing via a load balancer + request queue** (Kafka/SQS).  
4. **Model caching & version pinning** to avoid cold starts.  
5. **Observability stack**: Prometheus, Grafana, distributed tracing.

---

### 3️⃣ Depth  
- **Autoscaling logic:** `CPU/Memory/GPU utilization > 70% → add pod; <30% → drain`.  
- **Batching strategy:** Group similar requests (model version + input shape) into micro‑batches to amortize kernel launch overhead.  
- **Cold start mitigation:** Keep a pool of warm GPUs with the latest model weights preloaded.  
- **Failover:** Multi‑AZ deployment; if an AZ fails, traffic is routed to standby pods automatically.  
- **Complexity:**  
  - *Time:* O(1) per request after routing.  
  - *Space:* Model weight replication across GPU nodes (sharding reduces memory footprint).  
- **Trade‑offs:** Larger batches → higher latency; smaller batches → more GPU context switches.

---

### 4️⃣ Edge Cases  
- Sudden traffic spike (“flash crowd”). Test auto‑scaling lag and queue backpressure.  
- Model version drift: ensure consistent inference during rollout.  
- GPU failure: verify graceful degradation to CPU fallback.

---

### 5️⃣ Optimize & Communicate  
- **Metric‑driven scaling** (not just thresholds).  
- **Predictive autoscaling** using time‑series ML on traffic patterns.  
- **Explain decisions in a whiteboard:** show load flow, scaling triggers, and fault‑tolerance paths.  

This structure demonstrates clear problem understanding, systematic design, depth of implementation details, awareness of edge conditions, and a roadmap for continual optimization—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
