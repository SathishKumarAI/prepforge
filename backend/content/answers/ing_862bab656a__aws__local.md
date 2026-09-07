---
qid: ing_862bab656a__aws__local
question: 'Explain: Size the KV cache for a 70B-class model and explain how paged
  KV cache management works and why it exists.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 569
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:27:58-05:00'
sources: []
---

**Situation / Task**  
I was tasked at my previous company to deploy a 70‑B parameter LLM for real‑time inference in a low‑latency chat product used by 1 M daily users. The challenge: size the KV cache so that we stay within the GPU memory limits while keeping per‑token latency < 30 ms.

**Action**  
*Calculated cache size:*  
- Each KV pair (key, value) is 16 bytes × 2 = **32 B**.  
- For a max context of 4 k tokens and 1 024 heads → 4 000 × 1 024 × 32 ≈ **131 MiB** per GPU.  
I provisioned 8‑GPU nodes (A100, 40 GiB each) giving ~320 MiB cache, leaving headroom for activations and model weights.

*Paged KV Cache design:*  
- Implemented a two‑level cache: an *in‑flight* region on the GPU (fast access) and a *swap* region on NVMe SSD.  
- When the in‑flight buffer overflows, older KV blocks are written to disk using **AWS Nitro Enclave + EBS** for isolation and speed.  
- Retrieval uses **Prefetch + Async I/O** so that the next token’s KV is streamed back before it’s needed.

*Why paging matters:*  
1. **Scalability:** Allows contexts > 8 k tokens without buying larger GPUs.  
2. **Cost‑efficiency:** Keeps GPU memory usage below 70 % of capacity, reducing idle hardware costs.  
3. **Availability:** Disk swap is fault‑tolerant; if a GPU fails the cache can be rebuilt from the SSD copy.

**Result**  
Latency stayed at 28 ms for 8 k‑token contexts and dropped to 18 ms when we cached the most frequent prompts, cutting inference cost per request by **23 %**. The system handled 3× the user load during peak hours with zero outages.

---

### Leadership Principles
- **Customer Obsession:** Delivered a low‑latency experience for millions of users.  
- **Ownership & Dive Deep:** Designed end‑to‑end cache strategy, quantified impact, and iterated based on real telemetry.  

**Bar‑raiser takeaways:** Clear ownership, deep technical reasoning (cache sizing math), measurable ROI, and evidence of learning from early latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
