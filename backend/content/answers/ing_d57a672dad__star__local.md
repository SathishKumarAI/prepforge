---
qid: ing_d57a672dad__star__local
question: 'Explain: Decode Phase — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 328
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:35:55-05:00'
sources: []
---

**Situation**  
When my team rolled out a conversational agent for the hospital’s patient portal, we hit a bottleneck: each request took almost two seconds to return a response, which broke the user experience guidelines (≤1 s).  

**Task**  
I was tasked with optimizing the inference pipeline—specifically the decode phase—to cut latency while keeping accuracy high.  

**Action**  
First, I profiled the current PyTorch model on CPU and identified that token generation and beam‑search were the biggest culprits. I converted the model to ONNX Runtime with a fused graph for faster matrix ops. For decoding, I swapped greedy search for a top‑k (k=5) sampling strategy combined with length‑penalty to reduce unnecessary expansions. I also implemented a dynamic batch scheduler that groups similar-length requests, allowing the GPU to process them in one kernel launch. Finally, I added a small LRU cache of the last 200 generated tokens per session to avoid recomputing common prefixes.  

**Result**  
Latency dropped from ~1.9 s to **0.8 s** on average (≈60% improvement), while BLEU scores stayed within 2% of baseline. I learned that a careful mix of model conversion, decoding strategy tuning, and batching can deliver measurable gains without retraining the network.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
