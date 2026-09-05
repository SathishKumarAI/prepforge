---
qid: ing_fa3ea50ee1__star__local
question: 'Explain: Describe the throughput - latency tradeoff curve for an LLM server,
  and explain goodput.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 370
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:49:08-05:00'
sources: []
---

**Situation**  
I was leading a team that deployed a GPT‑4 inference endpoint for our financial analytics platform. The service had to support 1,000 concurrent users while keeping the cost of GPU usage under budget.

**Task**  
We needed to tune the throughput‑latency curve so that batch processing on GPUs maximized utilization without breaking the 200 ms SLA required by traders, and also measure the actual useful output—goodput—in comparison to raw throughput.

**Action**  
First, I profiled the model with different batch sizes (1–32) and measured GPU occupancy, CPU‑to‑GPU transfer time, and inference latency. Using TensorRT’s dynamic batching we shifted from a 10 ms per request single‑instance mode to a 40 ms batched mode that increased throughput from ~50 to ~300 requests/sec. I then added a token‑filtering layer that discarded low‑confidence completions, effectively turning raw throughput into goodput: only 85% of tokens were considered “useful” for downstream analysis. I logged both metrics and plotted the curve; the elbow point at batch = 16 gave ~200 req/sec with 180 ms latency, matching our SLA while keeping GPU utilization above 80%.

**Result**  
We achieved a 6× increase in throughput with only a modest 20 % rise in latency. Goodput rose from 42k tokens/hour to 56k tokens/hour—an 33% improvement in useful output—and we stayed within the budget by reducing idle GPU time. This exercise taught me that balancing batch size, transfer overhead, and filtering logic is key to optimizing both performance metrics and real business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
