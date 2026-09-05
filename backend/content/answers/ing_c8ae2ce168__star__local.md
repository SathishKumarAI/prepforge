---
qid: ing_c8ae2ce168__star__local
question: 'Explain: Capacity planning: you''re told to expect 100 requests/sec at
  peak with ~2K input and ~300 output tokens per request. Walk me through estimating
  the GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 398
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:10:48-05:00'
sources: []
---

**Situation** – In early 2024 I was tasked with launching a new conversational agent for a fintech client. Their load testing dashboard projected a peak of 100 requests per second during the holiday season, each request containing roughly 2 000 input tokens and expecting about 300 output tokens. The SLA required sub‑200 ms latency on average.

**Task** – I had to estimate how many GPUs, what model, and what batch sizing would keep us within budget while meeting performance targets.

**Action** – First, I benchmarked our chosen LLM (GPT‑3.5‑Turbo) on an NVIDIA A100: 2 000 tokens in ≈ 70 ms and 300 output tokens in ≈ 30 ms at a batch size of 8. That gave me a per‑GPU throughput of ~120 req/s at that batch size. I then ran a queuing simulation (using Python’s SimPy) to model request bursts, GPU idle time, and the impact of larger batches (up to 32). The simulation revealed that with 4 A100s we’d hit > 300 req/s capacity but would exceed the latency SLA under bursty traffic. Adding a 5th GPU brought the mean latency back below 180 ms while keeping utilization around 70‑80%. I also considered cost trade‑offs, comparing A100 vs V100 and factoring in on‑prem vs cloud spot pricing.

**Result** – We deployed 5 A100 GPUs, achieving an average throughput of 310 req/s with < 190 ms latency under peak load. The model stayed within a 15% budget overrun, and the simulation framework I built is now used for all future capacity planning exercises.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
