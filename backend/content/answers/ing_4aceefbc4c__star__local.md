---
qid: ing_4aceefbc4c__star__local
question: 'Explain: Technical screens — Cursor Software Engineer Interview Guide |
  Sample Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 350
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:58:01-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup as a junior ML engineer, we were building an automated fraud‑detection system that needed to process ~1 million transactions per day. The existing rule‑based engine was only catching 68% of frauds and lagging by 15 seconds on peak loads.

**Task:**  
I was tasked with designing a real‑time ML pipeline that could increase detection accuracy above 90%, reduce latency below 5 seconds, and integrate cleanly with the company’s existing Java microservices stack.

**Action:**  
First, I benchmarked several feature‑engineering pipelines in Python (pandas, sklearn) and chose a LightGBM model for its low inference time. To meet latency constraints, I containerized the model using Docker, then deployed it as a gRPC service behind an Envoy proxy to minimize overhead. I implemented a rolling batch scheduler that pre‑loads top‑K features into Redis cache, reducing per‑transaction compute by ~70%. Finally, I set up Prometheus alerts on inference latency and integrated A/B testing via feature flags so we could roll out the new model incrementally.

**Result:**  
The new system lifted fraud detection accuracy to 92% while cutting average latency from 15 s to 3.2 s. The rollout reduced false positives by 12%, saving the company roughly $1.8 M annually in chargebacks. I learned that coupling lightweight ML models with thoughtful infrastructure design can deliver measurable business impact even on tight deadlines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
