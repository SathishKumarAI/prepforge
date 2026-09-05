---
qid: ing_45fce3bb72__eli5__local
question: Explain continuous (in-flight) batching. Why does it beat static batching,
  and what new problems does it create?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 231
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:27:27-05:00'
sources: []
---

Imagine a delivery truck that can load packages at any time instead of waiting for a full cargo hold.  
In *continuous (in‑flight) batching*, the AI model receives new data samples while it’s still processing earlier ones, adding them to a growing “batch” that will be run together once enough have accumulated.  

This beats *static batching* (where you gather all inputs first, then process) because the truck never sits idle; it keeps moving and keeps filling up. It reduces waiting time for each input, speeds overall throughput, and uses GPU memory more efficiently.

But new challenges arise:  
1. **Variable batch sizes** – some batches finish earlier than others, causing uneven work distribution among GPUs.  
2. **Complex scheduling** – the system must decide when to launch a batch, balancing speed against memory limits.  
3. **Memory fragmentation** – constantly resizing batches can leave wasted space.

So while in‑flight batching boosts performance, it requires smarter orchestration to keep everything running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
