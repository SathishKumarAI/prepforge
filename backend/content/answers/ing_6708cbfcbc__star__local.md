---
qid: ing_6708cbfcbc__star__local
question: 'Explain: Serving a custom completion model to millions of DAU: walk me
  through the inference-cost model and your top three levers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 407
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:01-05:00'
sources: []
---

**Situation**  
At my last company I was tasked with deploying a custom GPT‑style completion model to our mobile app that had over 12 million daily active users. The billable cloud spend for inference was climbing toward $3 M/month, and we needed to keep latency under 200 ms on edge devices.

**Task**  
Reduce the per‑request inference cost by at least 30% while preserving quality and meeting the SLA.

**Action**  
1. **Model distillation + quantization** – I distilled the 13B base into a 3.5B student, then applied 8‑bit weight & activation quantization with QLoRA, cutting GPU FLOPs by ~70%.  
2. **Dynamic batching & serverless scaling** – Implemented a request queue that batches similar prompts on the fly and spun up TPU pods only during traffic peaks, using Knative autoscaling to avoid idle capacity.  
3. **Cache‑guided inference** – Added a LRU cache for the most frequent completion prefixes; served cached results directly from memory when the prompt matched a hot key, eliminating compute for ~15% of requests.

**Result**  
We cut monthly inference spend from $3 M to $1.8 M (40% savings), maintained <190 ms average latency, and retained 98% of the original perplexity score. I learned that combining model compression with smart request routing is far more effective than just chasing cheaper hardware alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
