---
qid: ing_56944b3536__star__local
question: 'Q: Why is Tensor Parallelism preferred over Pipeline Parallelism for low-latency
  serving?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 312
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:21:19-05:00'
sources: []
---

**Situation:**  
When launching a production inference service for our 7B‑parameter language model, we had to meet a strict 20 ms per request latency on a single GPU node while still handling peak traffic of ~500 QPS.

**Task:**  
Reduce the per‑token response time without adding more nodes or compromising accuracy, so that users experience real‑time interaction.

**Action:**  
I chose tensor parallelism over pipeline parallelism. With tensor parallelism I split each transformer layer’s weight matrices across multiple GPUs, keeping all layers present on each device but with smaller local tensors. This allowed us to keep the entire forward pass on a single node, avoiding the cross‑GPU communication that pipeline stages incur at every token boundary. I used NCCL collective ops and fused micro‑batching so that gradient updates stayed in sync while inference stayed single‑step. In contrast, pipeline parallelism would have forced each layer to wait for its predecessor’s output, adding ~5 ms of inter‑stage latency per token—unacceptable at 20 ms.

**Result:**  
Latency dropped from 35 ms (pipeline) to 18 ms with tensor parallelism, meeting the SLA while sustaining 520 QPS. I learned that for low‑latency serving, keeping all layers in memory on one node and distributing tensors is far more efficient than staging layers across nodes, even though pipeline parallelism shines for training throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
