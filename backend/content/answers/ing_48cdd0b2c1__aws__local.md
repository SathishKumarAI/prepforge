---
qid: ing_48cdd0b2c1__aws__local
question: 'Explain: Allocating Memory Space — How Do Computer Programs Run?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 412
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:58-05:00'
sources: []
---

**Situation** – In my senior role at a cloud‑analytics firm, we had to redesign our ML inference service so it could serve 200 k requests/sec on a single spot‑instance while staying under $0.10/req. The bottleneck was memory thrashing; the process kept swapping and latency spiked.

**Task** – I owned the refactor: reduce peak RAM, keep throughput, and keep costs low.

**Action** –  
1. **Dive Deep into Memory Layout** – I mapped how Python’s interpreter uses the stack (function calls), heap (objects), and the operating system’s virtual memory (paging).  
2. **Design** – Re‑architected the inference loop to use a *memory‑mapped* model file (`mmap`) instead of loading it fully into RAM, and pre‑allocated a fixed-size buffer pool for request payloads.  
3. **AWS Services** – Deployed on an `r6g.large` EC2 spot instance (12 GiB RAM) with a 10 GB EBS‑optimized SSD to back the mmap file. I added CloudWatch metrics and Lambda edge triggers for auto‑scaling.  
4. **Cost & Availability** – The new design cut peak RAM from 9 GiB to 3 GiB, eliminating swap; average latency dropped from 350 ms to 70 ms (80% improvement). Cost per request fell to $0.07.

**Result** – We achieved the target throughput with a 40 % cost saving and earned an internal “Innovate & Simplify” award. I documented lessons: always profile stack vs heap early, and use OS‑level memory mapping for large read‑only artifacts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
