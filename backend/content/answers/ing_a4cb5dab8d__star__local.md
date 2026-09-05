---
qid: ing_a4cb5dab8d__star__local
question: 'Explain: company again in an event notification system'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 327
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:02:56-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a real‑time event notification platform that delivered push alerts to millions of users. By the third quarter, our click‑through rate (CTR) had dropped from 4% to just 1%, and the latency on our recommendation engine was creeping above 400 ms.

**Task:**  
I was tasked with revamping the recommendation pipeline so it could serve personalized event suggestions in under 200 ms while lifting CTR back to pre‑drop levels, all without increasing infrastructure cost.

**Action:**  
First I profiled the existing Spark batch model and identified that feature engineering on the fly caused most of the delay. I migrated the heavy computations to a lightweight inference service using ONNX Runtime, deploying it in a Kubernetes cluster with autoscaling. For personalization, I switched from a static logistic regression to an online gradient‑boosted tree (LightGBM) trained on streaming click logs via Kafka Streams, updating weights every 5 minutes. To keep latency low, I introduced model quantization and cache hot keys for the top 10k users.

**Result:**  
CTR rebounded to 3.6% within two weeks—almost a full recovery—and inference latency dropped to an average of 120 ms. The cost per notification decreased by 18% thanks to the lighter runtime. I learned that balancing model complexity with serving infrastructure and leveraging real‑time data pipelines is key to scaling ML at speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
