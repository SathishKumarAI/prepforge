---
qid: ing_a413f9c49a__aws__local
question: 'Explain: no person nearby basically yeah i mean — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 539
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:32-05:00'
sources: []
---

**Situation / Task**  
I was hired as a senior cloud architect at a fast‑growing food‑delivery startup to overhaul their real‑time location engine so that drivers could see nearby orders within 300 ms, even with millions of concurrent users.

**Action**  
* **Geo‑Hashing** – I mapped every restaurant and driver to a 10‑character geohash (≈3 km²). Using DynamoDB Global Tables I stored `geohash → order/driver IDs` pairs. This allowed O(1) lookups for “orders within my cell” and fast range queries when a driver crossed a boundary.  
* **WebSockets** – I introduced Amazon API Gateway WebSocket APIs backed by Lambda@Edge to push order updates instantly. Each driver’s client subscribed to its geohash topic; when an order was created or cancelled, the Lambda function wrote to the DynamoDB stream and triggered a push to all subscribers in that cell.  
* **Scalability & Cost** – Auto‑scaling Lambda functions handled 10k concurrent connections with < 1% cold starts. Using SQS for fallback ensured durability. The total spend dropped from $18K/month (polling) to $4.5K/month, a 75% cost saving.

**Result**  
We achieved an average order‑to‑driver visibility latency of **210 ms**, reduced driver idle time by **32%**, and increased overall delivery throughput by **27%** in the first quarter after launch.

---

### Leadership Principles

* **Ownership** – I took full responsibility for end‑to‑end performance, from data modeling to cost optimization.  
* **Dive Deep** – Leveraged DynamoDB streams, API Gateway metrics, and CloudWatch logs to pinpoint latency bottlenecks and iteratively improved the design.  

### Bar‑Raiser Signals

| Signal | How I Demonstrated It |
|--------|-----------------------|
| Ownership | Delivered a complete end‑to‑end solution with measurable business impact. |
| Dive Deep | Used granular metrics (latency, error rates) to guide iterative tuning. |
| Quantified Impact | Reduced costs 75% and increased throughput 27%. |
| Learning from Failure | After initial polling prototype caused spikes, pivoted to event‑driven WebSockets and documented the trade‑offs for future teams. |

This architecture exemplifies Amazon’s focus on customer obsession (instant order visibility) while balancing cost, scalability, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
