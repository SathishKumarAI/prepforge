---
qid: ing_0567c9a8b3__star__local
question: 'Explain: PoC: Memory Manipulation via Indirect Prompt Injection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 358
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:39:36-05:00'
sources: []
---

**Situation** – At my previous company we were building an AI‑driven customer support bot that ran on a shared GPU cluster. The team noticed occasional crashes when certain user prompts caused the model to allocate more memory than expected, and our monitoring stack flagged these as “out‑of‑memory” incidents.

**Task** – I was tasked with proving whether an attacker could trigger excessive memory usage by crafting prompts that indirectly manipulate the token embedding cache (a form of indirect prompt injection). The goal was to demonstrate a reproducible proof‑of‑concept (PoC) and quantify the impact on GPU memory.

**Action** – I wrote a Python script that wrapped the inference API, injecting specially crafted tokens that would force the model’s tokenizer to reuse high‑frequency embeddings multiple times. By chaining these injections with a controlled prompt length, I could trigger a 3× increase in active tensor size. Using NVIDIA’s `nvprof` and PyTorch’s memory profiler, I logged peak GPU usage before and after injection. The PoC also included a mitigation strategy: adding a per‑request token cache reset layer to break the indirect reference chain.

**Result** – The PoC replicated an 8 GB spike on a 16 GB GPU, causing three out‑of‑memory crashes in less than 30 seconds of continuous traffic. After implementing the mitigation, memory usage dropped back to baseline and no further crashes were observed over two weeks of load testing. I learned that indirect prompt injection can be weaponized through cache reuse, and that simple cache invalidation can provide robust protection without sacrificing latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
