---
qid: ing_f7153ea5dd__faang__local
question: 'Explain: Real-time performance without cost runaway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 467
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:14:31-05:00'
sources: []
---

**Clarify**  
The interviewer wants a strategy for delivering low‑latency predictions in production while keeping operational costs under control. I’ll assume we’re dealing with a model that must serve millions of requests per day on cloud infrastructure and that the cost driver is compute (CPU/GPU), storage, and network egress.

**Approach**  
1. **Model size & quantization** – reduce parameters and use 8‑bit or mixed precision inference.  
2. **Batching & request coalescing** – group short latency requests into micro‑batches to amortize kernel launch overheads.  
3. **Edge / on‑device inference** – push lightweight models to user devices when possible, offloading only heavy queries.  
4. **Autoscaling with spot/preemptible VMs** – scale horizontally during peaks and fall back to cheaper instances otherwise.  
5. **Cache frequent predictions** – memoize outputs for identical inputs or use a key‑value store with TTL.

**Depth**  
Quantization can cut GPU memory by 75 % with <1 % accuracy loss; micro‑batch size of 32–64 balances latency (≈10 ms) and throughput. Edge inference on mobile CPUs costs negligible server spend but may increase model drift risk, mitigated by periodic over‑the‑air updates. Spot instances offer 70–80 % savings but require graceful degradation logic. A Redis cache with a 5‑minute TTL can serve ~40 % of traffic instantly.

**Edge Cases**  
- Sudden traffic spikes exceeding batch capacity → fallback to single‑request mode, accepting higher latency.  
- Model drift on edge devices → trigger cloud re‑inference and push updates.  
- Spot instance preemption during inference → use checkpointed state or retry logic.

**Optimize & Communicate**  
I’d present a cost‑latency trade‑off curve, showing how each optimization shifts the operating point. Highlight that incremental changes (e.g., quantization first) give quick wins, while architectural shifts (edge deployment) require more engineering effort but yield long‑term savings. This narrative demonstrates structured problem solving and clear communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
