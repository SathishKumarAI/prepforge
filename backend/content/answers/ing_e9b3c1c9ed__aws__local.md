---
qid: ing_e9b3c1c9ed__aws__local
question: 'Explain: Disk vs. VRAM Caching — Kv Cache And Context Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 511
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:06:27-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a cross‑functional team that had to reduce inference latency for our LLM‑based recommendation engine from 250 ms to <80 ms while keeping cost per request <$0.02. The bottleneck was the time spent loading embeddings and key–value (KV) caches into GPU memory.

**Action**  
I introduced a two‑tier caching strategy:

1. **Disk‑backed KV cache** – store serialized key/value pairs in an Amazon S3 “cold” tier, loaded on demand via AWS Lambda when a new user session starts.  
2. **GPU‑resident context cache** – keep the most frequently used embeddings (top‑k by access frequency) in Elasticache‑Redis (on‑prem GPU nodes) and sync to NVIDIA A100 VRAM with `torch.cuda.CachingAllocator`.

The architecture uses Amazon SageMaker for model hosting, Amazon Kinesis Data Streams to capture usage telemetry, and CloudWatch metrics to auto‑scale the Redis cluster.

**Result**  
Latency dropped from 250 ms → 72 ms (≈71 % reduction). Cost per inference fell by 35 %, and we reduced GPU memory footprint by 48 %. We also cut cold‑start failures by 90 %.

**Reflection**  
I owned the end‑to‑end pipeline, diving deep into profiling data to identify cache miss patterns. The trade‑off was a modest increase in S3 I/O latency, mitigated by prefetching logic. Learning: balancing disk persistence vs VRAM speed is key; continuous monitoring ensures we don’t over‑provision expensive GPU memory.

---

### Bar‑raiser cues  
- **Ownership**: single-handedly re‑architected the caching layer and drove cross‑team adoption.  
- **Dive Deep**: leveraged per‑request telemetry to quantify cache hit rates and latency impact.  
- **Quantified Impact**: 71 % latency reduction, 35 % cost savings, 48 % memory shrink.  
- **Learning from Failure**: initial attempt used a single in‑memory cache that exceeded GPU limits; pivoted to hybrid disk–GPU strategy after profiling evidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
