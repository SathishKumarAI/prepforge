---
qid: ing_ecfe9d27f3__star__local
question: Serving real-time TTS is a different capacity problem from serving a text
  LLM. Why, and how do you plan capacity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 375
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:22:44-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a live streaming platform that required on‑demand text‑to‑speech for thousands of concurrent users while also running a large language model to generate dynamic subtitles and captions.

**Task:**  
I had to design a capacity strategy that ensured low latency (<200 ms) for TTS without starving the LLM inference pipeline, which was already hitting CPU saturation during peak hours.

**Action:**  
First I profiled both workloads: TTS used GPU‑accelerated neural nets with fixed batch sizes, while the LLM scaled with token count and benefited from model parallelism. I introduced a two‑tier scheduler—dedicated GPU queues for TTS and a shared CPU pool for the LLM. To prevent queue starvation, I implemented adaptive throttling: when TTS latency exceeded 180 ms, the system automatically reduced LLM batch sizes by 25% and queued up to 50 additional TTS requests. I also added auto‑scaling of GPU nodes based on real‑time throughput metrics (requests per second) and a predictive load model that used historical peak patterns to pre‑spin resources an hour before expected spikes.

**Result:**  
Post‑deployment, TTS latency stayed below 190 ms even during 10× traffic surges, while the LLM maintained <350 ms inference time for 95% of requests. Overall resource utilization improved by 30%, and we avoided over‑provisioning that had cost $12k/month previously. I learned that separating concerns by workload type and coupling dynamic throttling with predictive scaling is key to balancing real‑time TTS and LLM capacities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
