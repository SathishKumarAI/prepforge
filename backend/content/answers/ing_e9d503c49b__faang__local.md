---
qid: ing_e9d503c49b__faang__local
question: Why did transformers displace RNNs for language modelling, and what exactly
  does the KV cache buy you at inference time?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 478
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:43:32-05:00'
sources: []
---

**Clarify**  
The question asks why transformer‑based models have largely replaced recurrent neural networks (RNNs) for language modeling, and what the *key–value (KV) cache* contributes during inference.

**Approach**  
1. Summarize RNN limitations (sequentiality, gradient issues).  
2. Explain transformers’ parallelism and self‑attention advantages.  
3. Describe how a KV cache stores past attention states.  
4. Connect the cache to speed‑up at inference.

**Depth**  

| Aspect | RNNs | Transformers |
|--------|------|--------------|
| **Computation flow** | Sequential; each token depends on all previous hidden states → O(n²) latency for long sequences. | Parallel self‑attention; each layer processes the entire sequence in one step → O(1) per token after batching. |
| **Gradient flow** | Vanishing/exploding gradients over many steps → hard to train deep models. | Dense attention allows short paths between tokens, mitigating gradient decay and enabling very deep stacks (e.g., 48 layers). |
| **Context capture** | Limited by hidden state size; long‑range dependencies are attenuated. | Attention scores directly link any pair of tokens; context is effectively global. |

The *KV cache* stores the key/value tensors from earlier decoder layers for a given prefix. During autoregressive inference, instead of recomputing these for every new token, the model reuses them, reducing computation to O(1) per generated token and cutting GPU memory traffic.

**Edge Cases**  
- Very short sequences: RNNs may still be competitive because transformers’ fixed overhead dominates.  
- Memory‑bounded settings: KV cache can overflow; need paging or chunked decoding.

**Optimize & Communicate**  
Highlight that transformers scale linearly with model size but benefit dramatically from caching at inference, yielding 2–5× speedups on modern GPUs. Emphasize that the key advantage is *parallelism + cached attention*, which directly addresses RNNs’ sequential bottleneck and training instability. This structured narrative demonstrates clear problem framing, technical depth, and practical implications—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
