---
qid: ing_8f2004d8ec__faang__local
question: 'Explain: Efficiently Serving LLMs - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 514
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:17:31-05:00'
sources: []
---

**Clarify**  
We’re asked how a platform like DeepLearning.AI can serve large language models (LLMs) at scale—low latency, high throughput, and cost‑effective inference. Key assumptions:  
* Models are frozen during serving (no fine‑tuning).  
* Requests arrive as short prompts; responses may be up to several hundred tokens.  
* Users expect <200 ms response time for interactive use.

**Approach**  
1. **Model partitioning & quantization** – reduce memory and compute per token.  
2. **Batching & token‑level parallelism** – aggregate many small requests into a single GPU kernel.  
3. **Dynamic caching & KV‑cache reuse** – keep past key/value tensors for similar prompts.  
4. **Hardware selection & placement** – use GPUs or specialized ASICs (e.g., NVIDIA A100, Google TPU) and place them in edge regions to reduce RTT.

**Depth**  
*Quantization*: 8‑bit or mixed‑precision (FP16/INT8) inference keeps accuracy loss <1 %.  
*Batching*: Group requests by token length; use dynamic batching libraries (e.g., FasterTransformer). Complexity: O(B·L·H) per batch where B=batch size, L=seq len, H=model dim.  
*KV‑cache*: Store previous key/value pairs in fast memory; reuse when prompts share prefixes, saving O(L·H) operations per token.  
*Hardware*: GPUs provide massive SIMD throughput; TPUs offer higher TFLOPs for matrix ops but require TensorFlow graphs. Edge deployment reduces network latency but increases cold‑start costs.

**Edge cases**  
*Very long prompts (>2048 tokens): fallback to a smaller model or streaming truncation.*  
*Sudden traffic spikes: auto‑scale GPU nodes, use request queuing with backpressure.*  
*Model updates: roll out new weights via blue/green deployment to avoid downtime.*

**Optimize & Communicate**  
Improvements include *pipeline parallelism* (splitting layers across GPUs), *model pruning*, and *adaptive batching* that prioritizes latency‑sensitive requests. When explaining, start with the problem scope, outline the multi‑layer strategy, then dive into each optimization’s trade‑offs—time vs. cost vs. accuracy—so interviewers see a holistic, production‑ready plan.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
