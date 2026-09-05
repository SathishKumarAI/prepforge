---
qid: ing_3732d32af8__star__local
question: 'Explain: Step 4: Scale the design — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 277
output_tokens: 325
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:48-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our fraud‑detection model was processing only 10 k transactions per day on a single VM. The volume had already doubled, and latency hit the SLA at 200 ms.

**Task:**  
I needed to redesign the inference pipeline so it could handle 1 M transactions/day with <50 ms latency while keeping costs under $5K/month.

**Action:**  
I studied the *system‑design‑primer* on GitHub, focusing on microservices, caching, and horizontal scaling. I broke the system into three services: a Kafka consumer, an inference worker pool, and a Redis cache for model parameters. Using Docker Compose locally, then Kubernetes on GKE, I auto‑scaled workers based on CPU usage. I added a Bloom filter to reject obvious non‑fraud cases before hitting the model, reducing load by ~30 %. I also created Anki flashcards from the primer’s key concepts (e.g., CAP theorem trade‑offs, consistency models) to reinforce design patterns during daily standups.

**Result:**  
The new pipeline processed 1.2 M transactions/day with an average latency of 38 ms, staying within budget. I learned that a solid system‑design foundation—paired with iterative prototyping and continuous learning tools like Anki—enables rapid scaling while maintaining reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
