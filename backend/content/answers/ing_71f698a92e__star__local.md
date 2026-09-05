---
qid: ing_71f698a92e__star__local
question: 'Explain: Heads: MHA → MQA → GQA — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 355
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:15:11-05:00'
sources: []
---

**Situation**  
While leading the NLP module for our next‑gen recommendation engine, we hit a bottleneck: inference latency spiked to 150 ms per token on GPU‑heavy workloads, making real‑time personalization impossible.

**Task**  
I had to redesign the transformer backbone to cut latency by at least 40% without sacrificing top‑10 accuracy, which was already near industry best.

**Action**  
First, I swapped the classic Multi‑Head Attention (MHA) with a lightweight Multi‑Query Attention (MQA). In MQA, each query shares a single key/value pair across all heads, so we reduced matrix multiplications from O(h²d) to O(hd). Next, I introduced Global Query Attention (GQA), where a small set of global queries attends over the entire sequence once, replacing per‑token attention for long contexts. This cut the number of softmax operations by 70% and allowed us to process sequences up to 2048 tokens on the same V100 GPU. I profiled with NVIDIA Nsight, tuned batch sizes, and used mixed precision (FP16) to keep memory usage down.

**Result**  
Inference time dropped from 150 ms to 90 ms—a 40% gain—while perplexity increased only by 0.3%, keeping accuracy intact. The project was delivered ahead of schedule, and I learned that re‑architecting attention mechanisms can yield dramatic latency savings with minimal impact on quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
