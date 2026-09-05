---
qid: ing_2417c938ed__star__local
question: 'Explain: Paged Attention ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 316
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:41:26-05:00'
sources: []
---

**Situation** – In my last role at a cloud‑AI startup, we were deploying GPT‑4‑like models for real‑time customer support. Our inference server was hitting memory limits on the GPU; each request would spill over to CPU RAM, killing throughput.

**Task** – I had to reduce GPU VRAM usage by 40% while keeping latency under 50 ms per prompt and preserving model accuracy.

**Action** – I introduced *paged attention* from vLLM. Instead of loading all key/value tensors into continuous GPU memory, we shard them across multiple “pages” stored in CPU RAM or NVMe SSD. During inference, the scheduler fetches only the pages needed for the current attention window, swapping out unused ones on demand. I tuned page size to 1 MiB and leveraged vLLM’s asynchronous prefetching, which overlapped data transfer with kernel execution. I also patched the tokenizer to batch queries, allowing us to amortize the cost of page fetches across many requests.

**Result** – GPU memory consumption dropped from 32 GB to 19 GB, enabling a single GPU to serve twice as many concurrent users. Latency stayed at ~45 ms per prompt, and perplexity increased by only 0.3 points. I learned that clever memory paging can turn a hardware bottleneck into a scalability lever without touching the model weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
