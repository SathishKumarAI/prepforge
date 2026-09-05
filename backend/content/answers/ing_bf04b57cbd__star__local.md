---
qid: ing_bf04b57cbd__star__local
question: You're training a large model across hundreds of accelerators. Compare data,
  tensor, and pipeline parallelism - when do you combine them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 373
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:52:51-05:00'
sources: []
---

**Situation** – In my last role I led the training of a 2‑billion parameter language model for a client’s multilingual chatbot. The project required finishing the fine‑tuning within two months on our in‑house cluster of 256 GPUs (NVIDIA A100).  

**Task** – I had to design an efficient distributed strategy that kept GPU utilization above 90 % while staying under the memory budget and meeting the deadline.  

**Action** – First, I benchmarked a pure data‑parallel baseline: each replica processed 32 samples per step with gradient all‑reduce (TensorFlow MirroredStrategy). Memory limits forced me to drop batch size to 16, so throughput dropped by ~40 %. Next, I introduced tensor parallelism across the transformer layers using Megatron‑L10N; this split weight matrices into column/row shards and reduced per‑GPU memory from 32 GB to 20 GB. Finally, I added a pipeline stage that sharded the model into six micro‑batches, overlapping communication with computation. The combined data‑+tensor‑+pipeline approach let me run a batch size of 48 on each GPU, achieving a 3× speed‑up over the baseline and keeping memory usage under 22 GB per node.  

**Result** – Training completed two weeks early; total GPU hours fell from an estimated 200k to 120k. I learned that tensor parallelism is essential when model size exceeds single‑GPU memory, while pipeline parallelism unlocks hidden compute overlap—combining all three yields the best trade‑off between speed, memory, and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
