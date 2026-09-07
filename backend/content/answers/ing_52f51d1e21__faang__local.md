---
qid: ing_52f51d1e21__faang__local
question: 'Explain: Cost Optimization Strategies — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 542
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:57:08-05:00'
sources: []
---

**Clarify**  
You’re asking how an organization can keep the cost of running large language‑model (LLM) workloads under control while still meeting performance and reliability goals. I’ll assume: *the models are hosted on GPU clusters, traffic is bursty, and you have both training & inference pipelines.*  

**Approach**  
1. **Right‑size resources** – choose the smallest GPU that meets latency targets.  
2. **Spot/Preemptible instances** – use short‑lived VMs with a fallback to persistent storage for checkpointing.  
3. **Model pruning / quantization** – reduce FLOPs without hurting accuracy.  
4. **Serverless inference (e.g., Lambda, Cloud Functions)** – pay per request for low‑volume workloads.  
5. **Cache & batching** – combine multiple requests into a single GPU call; cache frequent embeddings.  
6. **Multi‑tenant orchestration** – share GPUs across teams via Kubernetes + GPU schedulers (NVIDIA Device Plugin).  

**Depth**  
- *Right‑sizing*: benchmark latency vs. GPU memory; use AutoML to pick the minimal model size that satisfies SLAs.  
- *Spot instances*: store checkpoints on persistent SSD, auto‑resume from last checkpoint; cost ≈ 0.3× on‑demand.  
- *Pruning/quantization*: 8‑bit or FP16 inference cuts GPU memory by ~4× and speeds up by 2–3×; accuracy loss <1%.  
- *Serverless*: ideal for sporadic traffic (e.g., 10 k QPS); cold start latency ≈ 200 ms, but no idle cost.  
- *Batching*: batch size of 32 can raise throughput 5× on a V100; use dynamic batching frameworks like TorchServe.  

**Edge Cases**  
- Sudden traffic spikes → spot instance preemption could stall inference.  
- Extremely low‑latency apps (e.g., real‑time translation) may not tolerate serverless cold starts.  
- Aggressive quantization can degrade domain‑specific outputs; need validation.  

**Optimize & Communicate**  
Iteratively profile each layer, document cost per request, and present a trade‑off matrix to stakeholders. Highlight that combining pruning + spot instances often yields > 70% cost savings while maintaining SLA compliance. This structured plan shows clear reasoning, technical depth, and readiness for real‑world deployment—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
