---
qid: ing_0cd0b0021b__star__local
question: In this round you can use a coding agent, and we'll be watching how you
  use it. How do you approach that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 301
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:54:12-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building an automated recommendation engine for a streaming platform that had to process millions of user interactions per day while keeping latency under 50 ms.

**Task:**  
I needed to design a system that could ingest real‑time clickstream data, run inference using a transformer model, and serve personalized recommendations within the latency budget—all without compromising accuracy.

**Action:**  
First, I set up a Kafka pipeline to stream events to an Apache Flink job that applied feature engineering in near‑real time. For inference, I wrapped my Hugging Face transformer in a FastAPI microservice and deployed it on Kubernetes with GPU autoscaling. To reduce latency, I used ONNX Runtime for model optimization and batched requests by 128 samples before sending them to the GPU. I also implemented a caching layer with Redis to store recent predictions for users who had similar profiles. Finally, I wrote integration tests that measured end‑to‑end latency under load and tuned batch sizes until we hit the 45 ms target.

**Result:**  
The system processed 2 M events per hour, achieved a top‑k accuracy of 78% (up from 65%), and maintained an average latency of 42 ms. I learned how to balance model complexity with deployment constraints, and that a well‑structured data pipeline can make heavy models production‑ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
