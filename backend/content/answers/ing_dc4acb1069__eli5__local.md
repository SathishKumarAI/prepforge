---
qid: ing_dc4acb1069__eli5__local
question: 'Explain: Capacity Planning System Design — Back of the Envelope - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 274
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:22:53-05:00'
sources: []
---

Imagine you’re a baker who must decide how many loaves to bake each morning so that every customer gets a fresh one but no bread goes to waste. In machine‑learning “capacity planning,” the loaf is a **model inference request** and the bakery kitchen is your **compute cluster**.

1. **Measure demand (traffic)** – Count how many orders you get per hour, just like a baker notes how many customers walk in each minute.
2. **Estimate resource use** – Each order needs a certain amount of dough (CPU/GPU time) and baking slots (memory). Measure one request on your test machine to find this “per‑order cost.”
3. **Add safety margin** – Add, say, 20 % extra ovens for rushes or failures—this is the *buffer*.
4. **Scale up/down** – If traffic spikes overnight, add more ovens; if it’s quiet, take some offline to save money.

Back‑of‑the‑envelope means you use simple round‑numbers and a few quick calculations instead of detailed simulations, just enough to decide whether you have enough “kitchen space” for the predicted workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
