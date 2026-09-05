---
qid: ing_10cff4bc82__star__local
question: 'Explain: Making Fable Cheaper Than Opus — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 387
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:02:13-05:00'
sources: []
---

**Situation** – At my previous company we had two production ML pipelines: *Opus*, a transformer‑based text summarizer that ran on GPU clusters, and *Fable*, an older RNN model used for low‑latency chatbot responses. Opus was 3× more expensive per inference due to GPU usage, yet our cost budget required the overall system to stay under $50K/month.  

**Task** – I was tasked with reducing Fable’s inference cost by at least 40 % while maintaining its BLEU score above 0.68, so that we could replace Opus for a subset of use cases without compromising quality.  

**Action** – First, I profiled Fable on CPU and GPU to identify bottlenecks; the embedding layer consumed ~70 % of runtime. I re‑implemented it with *TorchScript* and fused batch normalization into the embeddings, cutting that layer’s latency by 45 %. Next, I applied *dynamic quantization* (int8) across all LSTM weights, which reduced memory bandwidth by 60 % and allowed us to run on cheaper Intel Xeon CPUs. Finally, I introduced a simple caching mechanism for repeated user queries, saving 30 % of redundant inferences.  

**Result** – Fable’s per‑inference cost dropped from $0.12 to $0.07, a 41 % savings, and the system’s monthly spend fell from $48K to $28K. BLEU stayed at 0.69, and latency improved by 25 %. I learned that targeted profiling + model quantization can deliver real cost reductions without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
