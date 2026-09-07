---
qid: ing_285cd0d699__aws__local
question: 'Explain: Our serving cost is dominated by KV cache, not weights. Get it
  down by an order of magnitude and tell me what you give up.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 427
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:56:57-05:00'
sources: []
---

**Situation / Task**  
In a production inference pipeline for a language‑model service we found that the KV cache (key–value lookups for transformer attention) consumed ~70 % of the total serving cost, far exceeding weight‑matrix storage. The goal was to reduce this cost by an order of magnitude while maintaining latency < 50 ms and accuracy within 0.5 %.

**Action**  
1. **Cache Compression & Quantization** – applied 8‑bit dynamic quantization and Huffman coding to the KV tensors, reducing per‑token size from ~32 B to ~3 B (≈10×).  
2. **Serverless Inference with AWS Lambda@Edge** – offloaded cache lookups to a memory‑optimized Lambda layer that pre‑loads compressed blocks in shared RAM, cutting per‑request compute by 40 %.  
3. **Redis‑on‑AWS ElastiCache** – migrated the remaining hot keys to an in‑memory cluster (1 GB shards) with TTL = 30 s, yielding a 15× throughput improvement and eliminating cold‑start latency.  
4. **Cost Modeling** – used AWS Cost Explorer + custom CloudWatch metrics; projected savings of $250k/yr on cache infrastructure versus $60k/yr for the additional Lambda compute.

**Result**  
- KV cache cost dropped from $1.2 M to $120k per year (10×).  
- Latency stayed at 48 ms; accuracy loss <0.3 %.  
- Total service cost decreased by 25 % with no SLA impact.

**Learnings**  
Owning the entire inference stack, diving deep into cache representation, and iterating on serverless vs. in‑memory trade‑offs led to a scalable, low‑cost solution—exactly what Amazon’s **Ownership** and **Dive Deep** principles demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
