---
qid: ing_efdb6a6fbb__eli5__local
question: 'Explain: Non Functional Aspects — System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 345
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:54:21-05:00'
sources: []
---

Imagine your food‑delivery app as a busy kitchen that must serve many customers at once.  
**Non‑functional aspects** are the kitchen’s *rules of operation*—not what dishes it offers, but how fast, reliable and safe it runs.

| Rule | Kitchen analogy | What it means for the app |
|------|------------------|---------------------------|
| **Scalability** | Adding more ovens when orders spike. | The system can handle thousands of users without slowing down. |
| **Availability** | A backup power supply keeps lights on during a blackout. | Users can place orders 24/7; downtime is minimal. |
| **Performance (latency)** | Delivering hot food quickly so it doesn’t cool off. | Pages load in milliseconds, and order status updates instantly. |
| **Security** | Locking the pantry to keep ingredients safe. | User data, payments, and credentials are encrypted and protected from breaches. |
| **Maintainability** | A clean, organized kitchen makes adding new recipes easy. | Code is modular, well‑documented, so developers can add features without breaking existing ones. |
| **Observability** | Having a monitor to see if the stove is overheating. | Logs, metrics, and alerts let ops spot problems before customers notice. |

These rules shape how you design servers, databases, APIs, caching, load balancers, and monitoring—ensuring that every customer’s order arrives on time, safe, and smooth, just like a well‑run kitchen delivers delicious meals flawlessly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
