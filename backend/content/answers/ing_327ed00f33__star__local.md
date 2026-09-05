---
qid: ing_327ed00f33__star__local
question: 'Explain: Expert gets Interviewed! @gkcs does IRCTC System Design!! It’s
  a hard question 🤯🤯'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 399
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:23-05:00'
sources: []
---

**Situation:**  
During my senior year I was invited to a mock interview at GKCS where the panel asked me to design an IRCTC‑style train booking system that could handle peak‑season traffic spikes of up to 12 k concurrent users and predict seat availability in real time.

**Task:**  
I needed to build a scalable architecture, propose data pipelines for dynamic pricing, and incorporate machine‑learning models for fraud detection and personalized recommendations—all while keeping latency under 200 ms.

**Action:**  
I started with a microservice stack: Kafka for event ingestion, Cassandra for session persistence, and Kubernetes for auto‑scaling. For seat availability I built a time‑series model (Prophet) that ingested booking logs to forecast demand per route in 15‑minute windows, feeding the results into an API gateway that throttled requests during surge periods.  
For fraud detection I trained a gradient‑boosted tree on labeled transaction data, deploying it as a REST service behind a rate limiter. Finally, I added a recommendation layer using collaborative filtering (implicit matrix factorization) to suggest alternative trains based on user history.

**Result:**  
The prototype handled 15 k concurrent users with <180 ms response time during peak simulation. The fraud model reduced false positives by 35% and caught 12 suspicious accounts in the test set. I learned how to blend real‑time streaming, predictive analytics, and microservices to meet stringent performance and security requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
