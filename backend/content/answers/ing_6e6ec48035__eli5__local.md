---
qid: ing_6e6ec48035__eli5__local
question: 'Explain: Where TCP Fits — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 258
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:31:39-05:00'
sources: []
---

Think of sending a message over the internet like ordering pizza.

**TCP (Transmission Control Protocol)** is the “order‑and‑track” system. You call the pizzeria, give your address, and they confirm each step: your order arrives, the dough is prepared, the pizza is baked, and finally it’s delivered to you. If anything goes wrong—say a delivery person misses your door—the system automatically retries or cancels until the customer gets exactly what was ordered. That’s TCP: reliable, ordered, and error‑checked.

**UDP (User Datagram Protocol)** is the “take‑away” option. You drop your order at the counter and walk out. The pizzeria doesn’t confirm receipt, nor does it keep track of who you are or whether the pizza made it to you. If the delivery gets lost, you’re stuck with no remedy. UDP is fast but gives no guarantees.

In system design, use TCP when every piece of data must arrive intact (file transfers, web pages). Use UDP for speed‑critical, “good‑enough” traffic like live video or online gaming, where occasional packet loss is tolerable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
