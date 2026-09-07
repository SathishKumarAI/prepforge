---
qid: ing_797e853a5c__aws__local
question: 'Explain: What is the KV cache, why is it needed, and how big does it get?
  Ballpark it for a 70B-class model at 128K context.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 457
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:59:42-05:00'
sources: []
---

**Situation & Task (Ownership + Customer Obsession)**  
When launching a 70‑B parameter LLM for an internal chatbot, the engineering team hit latency spikes during inference. The product owner demanded <50 ms per token for real‑time customer support. I owned the root cause: the KV cache (key–value store of past hidden states) was too large to fit in GPU memory, forcing constant CPU↔GPU transfers.

**Action (Dive Deep + Bias for Action)**  
I profiled the transformer layers and discovered that each token adds ~256 bytes per head. For a 128K‑token context, that’s **≈70 GB** of KV data—far beyond our 80 GB GPU budget. I redesigned the cache tiering:

| Layer | Cache size (per GPU) | AWS Service |
|-------|---------------------|-------------|
| Top‑8 heads | 1 GB | **Amazon FSx for Lustre** (high‑throughput SSD, low latency) |
| Remaining heads | 20 GB | **EFS + Nitro Encrypted EBS** (persistent, burstable IOPS) |

The cache is sharded across 4 GPUs, each holding a 18 GB slice. We added an LRU eviction policy and compressed values using float16. This cut token latency from 200 ms to 42 ms.

**Result (Deliver Results + Quantified Impact)**  
- **Latency:** ↓ 78% (42 ms vs 200 ms).  
- **Throughput:** ↑ 2× tokens/s on the same fleet.  
- **Cost:** Savings of ~$1,200/month by avoiding a larger GPU cluster.

**Learning (Bar‑raiser focus)**  
I documented the cache eviction algorithm, published it to internal Wiki, and ran a post‑mortem with the product team—showing that owning the problem, diving deep into data, and iterating on a solution can deliver measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
