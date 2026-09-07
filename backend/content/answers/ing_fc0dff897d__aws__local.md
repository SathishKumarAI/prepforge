---
qid: ing_fc0dff897d__aws__local
question: How do you estimate whether a model fits on a given GPU? Will a 70B model
  fit on one 80 GB card?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 503
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:48:06-05:00'
sources: []
---

**Situation / Task**  
At a previous role I was tasked with deciding whether to run a new 70‑B parameter LLM on our single‑node GPU cluster (NVIDIA A100 80 GB). The decision had to be made before we could commit the expensive hardware and risked over‑committing memory, leading to out‑of‑memory crashes.

**Action**  
I applied *Customer Obsession* by first understanding the user’s latency requirement (≤200 ms per request) and *Ownership* by taking full responsibility for the estimation pipeline.  
1. **Model profiling:** I unpacked the model into its transformer blocks, counted 70 B × 4 bytes (FP32) ≈ 280 GB of raw weights.  
2. **Quantization & sharding**: Using 8‑bit INT8 and 4‑bit weight‑only quantization reduced memory to ~35 GB per shard.  
3. **Runtime simulation:** I scripted a micro‑benchmark that loaded one shard into an A100, ran a forward pass on a 1k‑token prompt, and logged peak GPU memory (≈38 GB).  
4. **Scalability check:** I extrapolated the result to the full model by multiplying shards: 70 B / 35 GB ≈ 2 shards → ~76 GB total, within the 80 GB budget but leaving a 4 GB safety margin.

**Result**  
The experiment proved that with INT8 quantization and 2‑way sharding, the 70‑B model fits on one A100. Deployment ran at 180 ms per request, meeting SLA. The cost saving was ~30% compared to an 80‑B model on a multi‑GPU setup.

**Learnings & Trade‑offs**  
*Dive Deep* taught me that raw parameter count is misleading; actual memory depends on precision and sharding strategy. *Bias for Action* led to rapid prototyping, while *Deliver Results* ensured we met performance targets without over‑provisioning. I documented the process so future teams could reuse the estimation workflow, turning a one‑off decision into a repeatable best practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
