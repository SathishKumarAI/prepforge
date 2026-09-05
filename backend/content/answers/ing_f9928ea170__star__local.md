---
qid: ing_f9928ea170__star__local
question: 'Explain: Bringing latency down — Under the hood: Broadcasting live video
  to millions - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 343
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:47:38-05:00'
sources: []
---

**Situation**  
At Meta I was part of the Live Video team when we hit a spike in viewership during a global event—over 30 million concurrent viewers worldwide. Our end‑to‑end latency dropped from an acceptable 1.5 s to 3–4 s, causing buffering and a poor user experience.

**Task**  
I was tasked with reducing the live video stream latency by at least 40% while keeping the system’s scalability and cost budget intact.

**Action**  
First, I profiled the pipeline in production using DTrace and identified that the GStreamer encoder was bottlenecked on CPU‑bound H.264 re‑encoding. I swapped to NVIDIA’s NVENC hardware encoder across all edge servers, which cut encoding time by ~60%. Next, I redesigned our CDN routing: instead of a single origin push, we used a multi‑source “mesh” model where each region pulls from the nearest low‑latency peer, reducing round‑trip hops. We also introduced adaptive bitrate switching tuned for mobile 4G/5G bandwidths, implemented in our client SDK via Exponential Backoff. Finally, I added a lightweight telemetry dashboard that surfaced encoder stalls and CDN health in real time.

**Result**  
Latency dropped from 3.8 s to 1.9 s—a 50% improvement—while maintaining the same throughput and keeping infrastructure costs down by 12%. The exercise taught me how hardware acceleration, smart edge routing, and real‑time observability can combine to meet demanding live‑streaming SLA targets at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
