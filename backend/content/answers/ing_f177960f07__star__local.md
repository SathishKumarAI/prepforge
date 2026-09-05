---
qid: ing_f177960f07__star__local
question: Why do we obsess over P99 latency rather than the average, and what causes
  tail latency in LLM serving specifically?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 373
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:31:08-05:00'
sources: []
---

**Situation**  
I was leading the deployment of a new LLM inference service for a fintech app that processes credit‑card fraud alerts in real time. The user experience guidelines required that 99 % of requests finish within 150 ms; any higher latency caused the fraud system to flag legitimate transactions as errors.

**Task**  
My job was to guarantee the P99 latency target while keeping overall throughput high, even under peak traffic spikes and during model updates.

**Action**  
I started by instrumenting every inference call with Prometheus metrics and a histogram that captured per‑second latencies. I then ran load tests using Locust to identify tail contributors: (1) GPU memory fragmentation from dynamic token batching, (2) occasional CPU stalls caused by the tokenizer’s regex engine, and (3) network jitter in the model‑weight cache.  
To mitigate these, I implemented a two‑tier queue: short requests were immediately routed to a warm GPU pool; longer ones triggered an async pre‑fetch of weights and were served from a cached shard. I also switched the tokenizer to a compiled regex library (RE2) and tuned batch sizes per token length. Finally, I added a small “warm‑up” cache that kept the most frequently requested prompts resident in memory.

**Result**  
After these changes, P99 latency dropped from 320 ms to 110 ms, keeping it well below the 150 ms target, while average latency improved by 25 %. The system sustained a 4× increase in traffic without any new errors. I learned that obsessing over tail latency uncovers hidden bottlenecks—like GPU memory churn and tokenization stalls—that would otherwise be invisible when only looking at averages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
