---
qid: ing_860e0d0dfa__faang__local
question: 'Explain: Viewing the world as a computer: Global capacity management'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 454
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:56:13-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of *Global Capacity Management* (GCM) in ML from the perspective that “the world is a computer.” I’ll assume they’re interested in how large‑scale ML systems allocate compute, storage, and network resources across distributed data centers while meeting SLAs.

**Approach**  
1. Define GCM as dynamic resource provisioning for training/serving pipelines.  
2. Map the “world as a computer” metaphor: nodes = processors, links = bandwidth, memory = local cache.  
3. Discuss key components: workload scheduler, capacity planner, autoscaler, cost‑aware optimizer.  
4. Highlight trade‑offs: latency vs. throughput, energy vs. performance.

**Depth**  
- **Scheduler** assigns jobs to GPU/TPU pods using a weighted fair queue; it considers data locality and preemption policies.  
- **Capacity Planner** predicts future demand via time‑series forecasting (ARIMA + reinforcement learning), then updates cluster size in the cloud provider’s API.  
- **Autoscaler** spins up/down instances with spot‑instance logic, respecting minimum/maximum bounds to avoid thrashing.  
- **Cost Optimizer** applies a multi‑objective cost function: `TotalCost = α*Energy + β*Time + γ*Penalty`. It uses Bayesian optimization to pick instance types that minimize this cost while satisfying SLAs.  
Complexity: scheduling is O(n log n) per batch; forecasting is linear in horizon length.

**Edge Cases**  
- Sudden traffic spikes (e.g., product launch) → fallback to pre‑provisioned buffer capacity.  
- Data center outage → failover logic reroutes workloads to nearest region.  
- Model drift → re‑training triggers a new scheduling cycle.

**Optimize & Communicate**  
Explain that we can reduce waste by 30 % with predictive scaling, and cut latency by 15 % by co‑locating data and compute. Conclude by stressing continuous monitoring (Prometheus) and A/B testing of scheduler policies—showing iterative improvement, a hallmark of FAANG engineering culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
