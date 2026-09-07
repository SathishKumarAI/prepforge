---
qid: ing_d5e4433aad__aws__local
question: 'Q: Why is LLM generation slower than classification?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 508
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:23:00-05:00'
sources: []
---

**Why LLM generation is slower than classification**

| Leadership Principle | How it guided my answer |
|-----------------------|--------------------------|
| **Customer Obsession** | I framed the problem from the user’s latency expectation. |
| **Dive Deep & Ownership** | I dissected the underlying compute, memory, and algorithmic differences. |

### Situation
At a startup building a conversational AI product, customers complained that responses took 2–3 s while classification requests were <50 ms.

### Task
Identify why generation is slower and propose an architecture that cuts latency by 70% without breaking accuracy.

### Action
1. **Profiling** – measured token‑level compute on GPU (≈ 0.4 ms/token) versus a single soft‑max pass for classification (≈ 10 µs).  
2. **Root causes**  
   * **Sequential decoding**: generation decodes tokens one by one; each step depends on the previous hidden state.  
   * **Large weight matrices**: Transformer layers in LLMs are 30–50× larger than a classifier’s single layer, increasing FLOPs per token.  
   * **Memory bandwidth**: Generation requires streaming activations back and forth between CPU & GPU; classification can keep all tensors resident on the GPU.  
3. **Design** – Switch to a **pipeline‑parallel transformer** (e.g., Megatron‑LM) across 8 A100 GPUs, use mixed‑precision inference (FP16), and cache past key/values to avoid recomputation.  
4. **AWS services** – Deploy on **Amazon SageMaker Neo** for model optimization, host on **ECS Fargate Spot** to reduce cost by ~30%, and expose via API Gateway with a 1 ms cold‑start lambda warm‑up.

### Result
- Latency dropped from **2.5 s → 0.7 s** (72% reduction).  
- Cost per inference fell from **$0.003 → $0.0015**.  
- Accuracy loss < 0.1% top‑k, meeting SLAs.

### Takeaway
Large models are inherently slower due to sequential decoding and larger parameter sets; but with careful profiling, parallelism, and AWS‑native optimizations, we can deliver near‑real‑time generation while keeping costs in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
