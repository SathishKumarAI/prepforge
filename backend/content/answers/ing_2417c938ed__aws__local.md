---
qid: ing_2417c938ed__aws__local
question: 'Explain: Paged Attention ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 532
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:48:29-05:00'
sources: []
---

**Situation (S)**  
At my last role I led a team that had to ship a real‑time inference service for LLMs into production on AWS. The model size was 13 B parameters, and the latency target was < 200 ms per request with < $0.05 cost.

**Task (T)**  
We needed an efficient memory layout so we could keep the entire context in GPU memory while still supporting long‑context queries without swapping to host RAM—essentially a “paged” attention mechanism.

**Action (A)**  

| Step | What we did | Why it matters |
|------|-------------|----------------|
| 1 | **Design paged KV cache** – split the key/value tensors into fixed‑size GPU pages and map them via an LRU table. | Keeps hot tokens resident, reduces PCIe traffic. |
| 2 | **Use vLLM’s `PagedAttention` kernel** – a custom CUDA kernel that fetches only required pages per token, leveraging tensor cores for dot‑products. | Cuts memory bandwidth by ~4× versus dense attention. |
| 3 | **Deploy on AWS Inferentia 2** with S3‑backed paging (via Amazon FSx for Lustre) and spot instances. | Lowers cost and scales elastically. |
| 4 | **Automated monitoring** – CloudWatch metrics on page hit rate; trigger auto‑scaling if hit < 95%. | Ensures high availability and performance. |

**Result (R)**  
The paged attention pipeline reduced GPU memory usage from 48 GB to 18 GB, allowing us to run the model on a single A10G instead of two V100s. Latency dropped from 380 ms to **190 ms**, and cost per inference fell by **58 %**. We shipped within 3 weeks—30 days ahead of schedule.

---

### Leadership Principles Highlighted  
- **Customer Obsession & Deliver Results** – We delivered a faster, cheaper service that met user latency expectations.  
- **Ownership & Dive Deep** – I owned the end‑to‑end design and dug into CUDA kernels to understand performance bottlenecks.  

A bar‑raiser would note my clear ownership, data‑driven impact, deep technical dive, and the lesson learned: early GPU profiling prevents costly redesigns later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
