---
qid: ing_53835d20a7__faang__local
question: 'Explain: Adding read replicas could also help with'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 484
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:58:18-05:00'
sources: []
---

**Adding read replicas could also help with**

---

### 1️⃣ Clarify  
*Problem:* We want to reduce latency & increase throughput for a data‑heavy ML pipeline that performs frequent reads (feature lookups, model serving).  
*Assumptions to confirm:*  
- The workload is read‑intensive and writes are less frequent.  
- Consistency requirements allow eventual consistency or a lag of a few milliseconds.  
- Network latency between replicas and application tier is acceptable.

### 2️⃣ Approach  
1. **Deploy one or more read replicas** behind the primary DB.  
2. **Route all SELECTs to replicas**, keep writes on the master.  
3. **Use connection pooling & load balancing** so traffic is spread evenly.  
4. **Monitor replication lag** and automatically fail‑over if a replica falls too far behind.

### 3️⃣ Depth (Technical Detail)  
- **Replication mode:** Asynchronous or semi‑synchronous; choose based on acceptable staleness.  
- **Connection logic:** Use a smart driver that can query the current lag and redirect queries accordingly.  
- **Complexity:** Adds ~O(1) overhead per read for routing; replication latency typically < 100 ms.  
- **Trade‑offs:** Extra storage cost, need for monitoring, potential stale reads.

### 4️⃣ Edge Cases  
- *High write bursts*: replicas may lag too far → serve stale data.  
- *Network partition*: replica becomes isolated → risk of serving outdated rows.  
- *Schema changes*: must propagate to all replicas without downtime.

### 5️⃣ Optimize & Communicate  
- **Start with one read replica**; measure read latency and CPU usage.  
- **Scale horizontally** if query load grows, using a CDN‑style cache in front of replicas for hot features.  
- **Explain to interviewers**: “By offloading reads, we free the primary for writes, reduce contention, and keep our ML feature store responsive—critical when serving models at scale.”  

*Result:* Lower read latency, higher throughput, and better isolation between training/serving workloads—all while keeping consistency guarantees within acceptable bounds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
