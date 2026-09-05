---
qid: ing_f46ab9c67b__star__local
question: 'Explain: Booking Systems — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 293
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:36:51-05:00'
sources: []
---

**Situation**  
At a mid‑size travel tech startup, our flight booking platform was experiencing a 15 % drop in conversion during peak holiday seasons. Users were abandoning carts after the seat selection step.

**Task**  
I was tasked with building a recommendation engine to surface personalized seat options and ancillary services (extra baggage, lounge access) that would boost completion rates by at least 5 %.

**Action**  
I started by collecting clickstream data and transaction logs into an Apache Kafka pipeline, then used Spark Structured Streaming for real‑time feature engineering. For modeling, I implemented a matrix factorization algorithm with implicit feedback in PyTorch, training on the last six months of booking interactions. To handle cold starts, I blended content‑based features (seat class, airline rating) via a LightGBM model. The system was deployed as a gRPC microservice behind our Kubernetes cluster, scaling with horizontal pod autoscaling to keep latency under 200 ms.

**Result**  
Within three weeks of rollout, cart abandonment fell from 15 % to 10 %, lifting revenue by $120K per month. I learned how to balance model complexity against production constraints and the importance of end‑to‑end observability in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
