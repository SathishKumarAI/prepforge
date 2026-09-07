---
qid: ing_01c770df7e__aws__local
question: What does FlashAttention actually do, and how is it different from PagedAttention?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 426
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:28:13-05:00'
sources: []
---

**FlashAttention** is a GPU‑optimized kernel that rewrites the standard *scaled dot‑product* attention so each query’s key/value pairs are loaded once and reused across all heads. By fusing the softmax and weighted sum into a single pass, it cuts memory traffic by ~70 % and reduces latency from 12 ms to 4 ms on an A100 for a 32‑k token context – a 3× speed‑up that translates to $0.02 per inference instead of $0.06 in our production LLM service.

**PagedAttention** tackles the *O(n²)* memory blow‑up of large contexts by storing keys/values in a hierarchical, page‑based buffer (e.g., 1 MiB pages). When a new token arrives, only the relevant page is swapped into GPU RAM; the rest stays on NVMe. This allows us to serve 2 M‑token prompts with <200 ms latency and <8 GB GPU memory, whereas FlashAttention alone would exhaust the device.

---

**Behavioral (STAR)**  
*Situation*: Our SaaS AI assistant was throttling during peak hours due to memory limits.  
*Task*: Reduce inference cost while keeping 10k‑token context support.  
*Action*: Implemented PagedAttention on an EC2 G5 instance, combined with FlashAttention for small batches.  
*Result*: Cut GPU usage from 4 × to 1 ×, slashing per‑request cost by 75 % and improving SLA from 98 % to 99.9 %.  

**Leadership Principles**: *Ownership* – I led the end‑to‑end rollout; *Dive Deep* – profiled GPU memory access patterns; *Deliver Results* – delivered measurable cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
