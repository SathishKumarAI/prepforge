---
qid: ing_cf5c73a952__faang__local
question: 'Explain: Cost — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 738
total_tokens: 972
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:42:41-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *cost* implications of a **client‑server architecture** in ML system design—i.e., how deployment choices affect compute, storage, bandwidth, and operational expenses. I’ll assume we’re comparing a typical on‑prem or cloud‑based server model (one or many inference nodes) against edge or fully distributed alternatives.

---

**Approach**  
1. List key cost drivers: **compute**, **storage**, **network**, **maintenance/ops**, and **scaling**.  
2. For each driver, compare the client‑server model to common alternatives (edge inference, CDN caching, serverless).  
3. Summarize total cost of ownership (TCO) trade‑offs.

---

**Depth**

| Driver | Client‑Server Cost | Edge/Other Alternatives |
|--------|-------------------|--------------------------|
| **Compute** | Dedicated GPU/CPU clusters; pay‑as‑you‑go or reserved instances. High upfront if on‑prem; scaling costs linear with traffic. | Local inference uses device CPUs/TPUs; no server compute, but limited model size & accuracy. |
| **Storage** | Model weights & data stored centrally (S3, GCS). Pay for I/O bandwidth + storage tiering. | Models cached per edge node; initial sync cost but reduces repeated fetches. |
| **Network** | Every inference request traverses WAN → latency, egress charges, and potential throttling. | Reduced outbound traffic; only model updates travel back; lower egress costs. |
| **Maintenance/Ops** | Continuous monitoring, patching, autoscaling orchestration (K8s, ECS). Requires ops staff or managed services fee. | Fewer centralized points of failure; device‑side updates via OTA; ops cost shifts to over-the-air delivery pipeline. |
| **Scaling** | Autoscale horizontally by adding nodes; load balancer + queue overhead. | Scaling is inherent: each client scales independently; no central bottleneck, but coordination complexity rises. |

*Complexity & Trade‑offs*:  
- **Latency vs. Accuracy** – Server models can be larger and more accurate; edge models trade off size for speed.  
- **Data Privacy** – Client‑side inference keeps raw data local, reducing compliance costs.  
- **Model Update Frequency** – Central server simplifies A/B testing and versioning; edge requires robust OTA mechanisms.

---

**Edge Cases**

1. **High‑volume real‑time traffic** → Server cluster may hit bandwidth ceilings; cost spikes.  
2. **Large models (e.g., GPT‑3 size)** → Impossible on most devices; must stay server‑side.  
3. **Highly regulated domains** → Data egress fees or compliance constraints can make client‑server prohibitive.  

Testing: simulate peak traffic, model update rollouts, and failure scenarios to quantify cost impact.

---

**Optimize & Communicate**

- **Hybrid Deployment**: Cache frequently used sub‑models on edge; keep heavy inference on server.  
- **Cost‑aware Autoscaling**: Use spot/preemptible instances for batch jobs; lock in reserved capacity during predictable peaks.  
- **Network Optimization**: Compress payloads, use HTTP/2 multiplexing, and leverage CDN for static assets.

When explaining to interviewers, frame the discussion as a trade‑off matrix, highlight how each cost driver aligns with business goals (latency, accuracy, compliance), and conclude with a recommendation that balances TCO against performance needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
