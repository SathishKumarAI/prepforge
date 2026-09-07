---
qid: ing_58ada2a91d__faang__local
question: 'Explain: Practical Decision Framework — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 446
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:09:46-05:00'
sources: []
---

**Practical Decision Framework – Vertical vs Horizontal Scaling (System‑Design)**  
*Meta/Google style answer (≈200 words)*  

---

### 1️⃣ Clarify  
We’re asked to choose **vertical** (scale‑up) or **horizontal** (scale‑out) scaling for a machine‑learning service.  
Assumptions:  
- Service handles inference requests; latency ≤ 100 ms, throughput ≥ 10k req/s.  
- Workloads are stateless and largely independent.  
- Budget constraints and operational overhead matter.

### 2️⃣ Approach  
1. **Define requirements** (latency, throughput, cost, fault tolerance).  
2. **Model workloads**: compute per‑request CPU/GPU/memory usage.  
3. **Cost & performance curves** for both scaling options.  
4. **Risk analysis** (single point of failure vs complexity).

### 3️⃣ Depth  
- **Vertical scaling**: Add more powerful VMs or GPUs. Pros—simpler dev, no sharding; cons—hardware limits, higher single‑node cost, single point of failure.  
- **Horizontal scaling**: Deploy multiple inference nodes behind a load balancer. Pros—linear throughput, graceful degradation, easier autoscaling; cons—requires stateless design, consistency guarantees, potential cache invalidation.  
Use *autoscaling groups* for horizontal; *instance type selection* and *GPU licensing* for vertical.

### 4️⃣ Edge Cases  
- **Burst traffic**: Horizontal scaling can elastically add nodes.  
- **Model updates**: Rolling deployments are smoother horizontally.  
- **Hardware failure**: Vertical fails catastrophically; horizontal tolerates node loss.

### 5️⃣ Optimize & Communicate  
Explain trade‑offs in a *decision matrix*: cost per req, SLA impact, ops effort. Conclude: for high‑throughput, latency‑sensitive ML inference with budget for redundancy, horizontal scaling is the pragmatic choice; vertical scaling is reserved for low‑volume or highly specialized workloads where single‑node performance dominates.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
