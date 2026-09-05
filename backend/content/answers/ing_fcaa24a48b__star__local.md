---
qid: ing_fcaa24a48b__star__local
question: 'Explain: When would you deploy vLLM vs SGLang vs TensorRT-LLM? (You''re
  advising a customer as an FDE.)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 385
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:53:49-05:00'
sources: []
---

**Situation:** At my last role, a fintech client needed to run a 70B LLM for real‑time fraud alerts across their global API network. Their latency budget was 30 ms per request, and they had limited GPU headroom on the edge.

**Task:** I had to choose an inference stack that would meet the SLA while keeping costs under $2k/month, and also allow easy scaling if traffic doubled.

**Action:** First, I benchmarked vLLM for its out‑of‑the‑box paging and KV cache sharing; it gave us ~18 ms latency on a single A100 but hit memory limits when we tried to serve 4 concurrent users. Next, I evaluated SGLang’s SIMD‑accelerated kernels; with its custom GPU kernels we cut GPU usage by 35% while maintaining 25 ms latency, but the build pipeline required nightly CUDA updates. Finally, I ran TensorRT‑LLM on a Triton container for the production rollout—its FP16 engine produced 22 ms latency and let us batch 8 requests per kernel, reducing GPU hours from 40 to 28 per day.

**Result:** The customer achieved sub‑30 ms latency at $1.7k/month, with an automated CI/CD pipeline that updates kernels in under 10 min. I learned that vLLM excels for quick prototyping, SGLang is ideal when GPU memory is the bottleneck, and TensorRT‑LLM shines for production workloads needing consistent throughput and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
