---
qid: ing_1d3cd200d9__star__local
question: 'Q: How do you optimize TTFT vs. TPOT? — Inference Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 374
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:59-05:00'
sources: []
---

**Situation** – At my last job I was leading the rollout of a real‑time chatbot for a financial services client. The SLA demanded that the first response be sent within 150 ms (TTFT) while keeping average token latency below 30 ms (TPOT). Our baseline model, a large transformer, hit 250 ms TTFT and 45 ms TPOT.

**Task** – I needed to shave TTFT to under 120 ms without inflating TPOT beyond the SLA, all while staying within GPU memory limits for our edge servers.

**Action** – First, I profiled the model with NVIDIA Nsight and discovered that the majority of TTFT came from token‑generation pipeline initialization. I refactored the inference engine to cache the model’s encoder weights in a shared memory pool and moved the decoder to run on TensorRT with INT8 precision. Next, I introduced a two‑stage decoding: an initial “fast path” using beam width 1 for the first 5 tokens, then switching to a larger beam once the context stabilised. Finally, I tuned the batch scheduler to process micro‑batches of 4 requests in parallel, reducing CPU‑to‑GPU idle time.

**Result** – TTFT dropped to 95 ms and TPOT fell to 28 ms on average, meeting the SLA with a margin. The new pipeline also cut GPU memory usage by 20 %, allowing us to run two instances per server. I learned that aggressive precision conversion combined with staged decoding can reconcile conflicting latency metrics without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
