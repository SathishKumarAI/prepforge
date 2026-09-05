---
qid: ing_7b6d5eaf08__star__local
question: How do you load test an LLM service so the numbers actually mean something?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 366
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:40:51-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we launched an internal chatbot powered by a custom GPT‑4 model to handle customer support tickets. Within two weeks of release, the engineering team noticed latency spikes during peak hours and our SLA promised <300 ms response time 95% of the time.

**Task:** I was tasked with designing a load‑testing framework that would simulate realistic user traffic patterns, capture meaningful performance metrics, and help us pinpoint bottlenecks without over‑estimating capacity.

**Action:** First, I mapped real‑world usage: 70 % of requests were simple FAQ lookups, 20 % required context chaining, and 10 % triggered API calls to external services. Using k6 I scripted these patterns with weighted traffic and added a “think time” delay between sequential queries to mimic human pacing. I integrated OpenTelemetry to trace each request end‑to‑end, collecting token counts, GPU utilization, and inference latency per batch size. To avoid cache warming bias, the test started from cold model state and ramped up to 10× peak traffic over 30 minutes. Finally, I set thresholds for mean latency, percentile latencies, and error rates that matched our SLA.

**Result:** The load tests revealed a GPU memory bottleneck when batch size exceeded 32 tokens, causing out‑of‑memory errors at 8k requests per second. After adjusting the batch scheduler and adding a secondary inference node, we achieved <250 ms latency for 99% of traffic, meeting our SLA by 20%. I also documented a reusable test suite that now runs nightly, giving us early warning if any performance drift occurs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
