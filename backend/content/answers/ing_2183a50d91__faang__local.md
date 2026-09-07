---
qid: ing_2183a50d91__faang__local
question: 'Explain: The Unit Economics of AI — Cost Optimization Playbook'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 552
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:54-05:00'
sources: []
---

**Clarify**  
*Problem:* How can an organization reduce the cost of running AI workloads while maintaining or improving performance?  
*Assumptions to confirm:* 1) Workloads are batch/online inference and training on cloud‑native infrastructure; 2) Budget constraints drive ROI; 3) You have access to monitoring, autoscaling, and model‑level metrics.

**Approach**  
1. **Baseline Cost Audit** – inventory compute, storage, networking, and licensing expenses per model.  
2. **Model & Data Profiling** – measure FLOPs, memory footprint, data size, and inference latency.  
3. **Right‑Sizing & Tiering** – map workloads to optimal instance families (e.g., GPU vs TPU vs CPU).  
4. **Capacity Planning & Autoscaling** – use demand forecasting + dynamic scaling policies.  
5. **Model Compression & Quantization** – reduce parameters/precision without hurting accuracy.  
6. **Caching & Pre‑warm Strategies** – minimize cold‑start and redundant inference.  
7. **Spot / Reserved Instances & Spot‑to‑On‑Demand Mix** – leverage cost‑effective pricing tiers.

**Depth**  
- *Cost per Inference:* `C = (ComputeCost + StorageCost) / TotalRequests`.  
- *Elastic Scaling:* Use a 95th percentile request window; launch new pods when CPU >70% for 5 min.  
- *Compression Impact:* 8‑bit quantization can cut GPU usage by ~50% with <1% accuracy loss.  
- *Spot Savings:* Spot instances often cost 60–80% of on‑demand; tolerate preemption by checkpointing training.

**Edge Cases**  
- Highly variable workloads may trigger thrashing if scaling latency > response time.  
- Model drift can make compressed models inaccurate, requiring re‑quantization.  
- Pre‑emptible VM failures need graceful fallback to on‑demand pools.

**Optimize & Communicate**  
Present a **Unit Economics Dashboard** showing cost per inference, ROI vs model size, and savings from each optimization. Narrate the trade‑offs (e.g., “We accept a 0.5 % accuracy hit for a 45 % GPU cost reduction”), then iterate on feedback loops: monitor, retrain, re‑quantize. This structured playbook demonstrates analytical rigor, practical impact, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
