---
qid: ing_261145a420__star__local
question: 'Explain: The Math — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 331
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:05-05:00'
sources: []
---

**Situation:** While interning at a startup that was building an AI-powered writing assistant, my team discovered that the model’s inference latency had jumped from 120 ms to nearly 350 ms after we added a new attention‑dropout feature for better generalization.

**Task:** I was tasked with diagnosing why the dropout layer was slowing down the transformer and then redesigning it so we could keep the performance boost without sacrificing speed.

**Action:** First, I profiled the GPU kernels using Nsight to confirm that the bottleneck lay in the softmax‑scaled dot‑product attention. I rewrote the attention matrix multiplication in cuBLAS with a fused kernel that performed dropout and scaling in one pass, eliminating an extra memory copy. Then I applied mixed‑precision (FP16) inference with TensorRT, quantizing the weights to 8 bit for the feed‑forward layers while keeping the attention weights in FP32 to preserve accuracy. Finally, I introduced a cache for the key/value pairs so that repeated queries reused already computed tensors.

**Result:** The optimized kernel cut latency from 350 ms down to 140 ms—an 80% improvement—while maintaining BLEU scores within 0.5 points of the baseline. This exercise taught me how low‑level math (matrix ops, scaling, dropout) directly impacts real‑world performance and how careful profiling and mixed‑precision tricks can deliver measurable gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
