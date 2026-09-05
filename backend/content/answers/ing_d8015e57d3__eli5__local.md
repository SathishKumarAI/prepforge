---
qid: ing_d8015e57d3__eli5__local
question: 'Explain: Design the serving stack for a Claude-scale LLM API. Maximise
  GPU utilisation without wrecking p99 latency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 257
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:17:04-05:00'
sources: []
---

Think of your Claude‑scale model as a giant kitchen that can cook many dishes at once (GPU cores) but each dish must finish on time for the waiter (p99 latency).  
**Serving stack = the restaurant’s workflow** – from the order book (API gateway) to the prep station (data loader), the stove (model inference engine), and finally the plate (response formatter).

1. **Batching like a buffet line:** Group similar requests together so the GPU does one big batch instead of many tiny ones, keeping it busy.  
2. **Dynamic batching:** If the line is thin, run smaller batches quickly; if thick, wait for enough orders to fill a full GPU pass—this balances speed and utilisation.  
3. **Dedicated “fast lane”:** Reserve a few GPU threads for urgent single requests so they never sit in a long queue.  
4. **Pre‑warm the stove:** Keep a small pool of warmed‑up model copies ready; spinning up a new copy can cost milliseconds that push latency over p99.  

With this workflow, your kitchen stays hot and efficient while every customer gets their dish on time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
