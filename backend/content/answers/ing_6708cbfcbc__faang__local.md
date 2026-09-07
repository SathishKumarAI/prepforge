---
qid: ing_6708cbfcbc__faang__local
question: 'Explain: Serving a custom completion model to millions of DAU: walk me
  through the inference-cost model and your top three levers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 472
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:44:00-05:00'
sources: []
---

**Clarify**

You’re asking how to expose a fine‑tuned LLM (e.g., GPT‑4‑derived) to millions of daily active users (DAU) while keeping inference cost under control.  
Assumptions I’d confirm:  
1. What latency budget per request?  
2. Is the model static or will you keep updating it?  
3. Do you have existing GPU clusters or a cloud‑provider partnership?

**Approach**

1. **Model quantization & distillation** to reduce FLOPs per token.  
2. **Efficient serving architecture**: edge‑caching + request batching.  
3. **Dynamic resource scaling** tied to traffic patterns.

**Depth**

- *Quantization*: 4‑bit or mixed‑precision reduces memory bandwidth by ~75 % and inference time roughly proportionally, with <1 % BLEU drop on typical prompts.  
- *Distillation*: Train a smaller “student” model (e.g., 6B) to mimic the teacher’s logits; inference cost drops 3–4×.  
- *Batching*: Group concurrent requests into micro‑batches; GPUs process ~32 tokens per batch, amortizing kernel launch overheads and achieving near‑linear speedups.  
- *Caching*: Store recent completions (e.g., top 10k) in a fast key‑value store; repeated prompts hit cache at $0 cost.  
- *Autoscaling*: Use spot instances for off‑peak, reserve capacity for peak hours; apply predictive scaling based on historical DAU curves.

**Edge Cases**

- Cold start: first requests pay full cost—use prewarming queues.  
- Long‑tail queries: fallback to a lighter model or throttling.  
- Model drift: schedule periodic re‑distillation.

**Optimize & Communicate**

- **Cost metric**: $ per thousand tokens; aim for <$0.02/1k tokens after levers.  
- **Performance metric**: 95 th percentile latency <200 ms.  
- I’d present a live demo of the batching pipeline and show cost savings in a graph, concluding with next‑step validation on A/B traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
