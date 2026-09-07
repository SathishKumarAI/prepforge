---
qid: ing_09195802a1__faang__local
question: Mistral 7B shipped with grouped-query attention and sliding-window attention.
  What does each buy you, and what does each cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 623
total_tokens: 873
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:05:47-05:00'
sources: []
---

**Clarify**  
We’re asked how Mistral‑7B’s *grouped‑query attention* (GQA) and *sliding‑window attention* (SWA) change its inference profile. Assume we care about GPU memory, compute cost, latency, and model fidelity on typical 8‑bit or FP16 workloads.

**Approach**  
1. Define each technique’s goal.  
2. List the tangible benefits: memory footprint, FLOPs, cache locality, throughput.  
3. Enumerate costs: loss of global context, extra implementation complexity, potential accuracy drop, and inference latency variance.

**Depth**

| Technique | What it buys you | What it costs |
|-----------|-----------------|---------------|
| **Grouped‑Query Attention (GQA)** | • Reduces per‑head memory from *O(L²)* to *O(G·L²/G) = O(L²)* but with fewer heads sharing a key/value matrix. <br>• Lowers compute by ~1/3 for 8–12 heads, improving throughput on GPUs with limited memory bandwidth.<br>• Enables larger batch sizes or longer contexts without swapping. | • Slight drop in representational capacity because grouped keys lose head‑specific nuance.<br>• Requires careful tuning of group size; too large groups hurt perplexity.<br>• Adds a small coding overhead and potential branch mispredictions on some accelerators. |
| **Sliding‑Window Attention (SWA)** | • Caps attention span to a window *W*, cutting memory from *O(L²)* to *O(L·W)* and compute proportionally, which is critical for 1‑billion‑token contexts.<br>• Keeps key/value tensors contiguous in cache, boosting GPU utilization. | • Global dependencies beyond *W* are ignored; long‑range coherence can degrade downstream tasks (e.g., code generation).<br>• Requires a mechanism to stitch windows at inference boundaries, adding latency jitter.<br>• Implementation must handle variable window sizes for different layers or token positions. |

**Edge Cases**  
- Extremely short inputs: GQA may be overkill; SWA window exceeds sequence length causing wasted memory.  
- Tasks needing global context (e.g., summarization of a long document) will see perplexity rise.  
- Mixed‑precision workloads might amplify GQA’s head‑sharing artifacts.

**Optimize & Communicate**  
*Trade‑off*: For latency‑sensitive inference on commodity GPUs, enable both GQA and SWA to squeeze throughput; monitor validation loss to catch accuracy drift. If model quality suffers, revert to full attention for critical layers or increase window size. Always benchmark on the target hardware because memory bandwidth vs compute balance shifts across GPU generations. This structured rationale demonstrates how each optimization alters resource usage and performance—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
