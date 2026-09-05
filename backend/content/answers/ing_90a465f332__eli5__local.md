---
qid: ing_90a465f332__eli5__local
question: 'Explain: What is TPS, what is QPS, and what is the difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 243
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:26:13-05:00'
sources: []
---

Think of a machine‑learning system as a busy coffee shop that serves data requests.

**TPS (Transactions Per Second)**  
A *transaction* is any complete interaction: the user sends a request, the model processes it, and a result comes back. TPS counts how many of these whole “orders” finish every second. It tells you the overall throughput of the system.

**QPS (Queries Per Second)**  
A *query* is just the incoming question or data point that the model must answer. QPS counts how many queries arrive each second, regardless of whether they’ve finished yet.

**Difference**  
If the shop receives 200 coffees a minute but only completes 150 because some orders are still brewing, TPS would be 150/60 = 2.5 orders per second, while QPS might be 200/60 ≈ 3.33 queries per second. TPS reflects finished work; QPS shows demand. In ML, high QPS with low TPS signals a bottleneck—your model can’t keep up with incoming data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
