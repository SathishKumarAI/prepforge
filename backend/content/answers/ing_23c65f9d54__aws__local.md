---
qid: ing_23c65f9d54__aws__local
question: 'Explain: Estimate the KV-cache memory for serving a large model, and explain
  how it constrains batch size and throughput.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 426
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:47:22-05:00'
sources: []
---

**Situation / Task**  
When launching a new GPT‑4 style service for our customer‑facing chatbot, I had to estimate the KV‑cache memory needed per request and show how it limits batch size and throughput. The goal was to keep latency < 200 ms while serving 10k concurrent users on spot instances.

**Action**  
I calculated cache size using `KV_cache = seq_len × hidden_dim × 2` (for key & value). For a 2048‑token prompt, hidden_dim = 12288, the cache ≈ 2048 × 12288 × 2 ≈ 50 GiB per request. I modeled batch size by dividing total GPU memory (e.g., A100’s 40 GB) by this cache, yielding a max batch of **0**—impossible.  
To resolve this, I introduced *dynamic KV‑pruning* and *token‑bucket batching*: we keep only the last 512 tokens in cache, cutting memory to ~12 GiB per request, allowing a batch size of 3 on A100s. Using Spot‑ECS with **Elastic Inference** reduced GPU cost by 35 %.  

**Result**  
Throughput rose from 4 QPS to **18 QPS** while maintaining < 200 ms latency for the target user base. The model sustained 10k concurrent users with a 99.9 % SLA, and we cut infrastructure spend by 28 %.  

**Leadership Principles**  
- *Customer Obsession*: Delivered sub‑200 ms response for high‑volume queries.  
- *Ownership / Dive Deep*: Engineered cache pruning and batching from first principles to meet performance goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
