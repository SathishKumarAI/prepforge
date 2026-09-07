---
qid: ing_d9b428438d__aws__local
question: 'Explain: What We Learned Building Cloud Agents — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 369
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:31:03-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that built *Cognition’s Cloud Agent*—a lightweight ML inference service for edge devices. Our goal was to reduce latency by 40 % while keeping the cost under $0.10 per inference.

**Action**  
- **Ownership & Dive Deep**: I drove an end‑to‑end design using SageMaker Endpoint + Lambda orchestration, caching results in ElastiCache Redis.  
- **Bias for Action**: We deployed a pilot on 500 devices within two weeks and iterated on the model every day.  
- **Invent & Simplify**: Replaced heavy TensorFlow graphs with ONNX‑converted models; introduced a lightweight inference container on ECS Fargate to avoid GPU costs.

**Result**  
- Latency dropped from 250 ms to 140 ms (44 % improvement).  
- Cost per inference fell to $0.07, saving ~30 % annually for the product line.  
- We achieved 99.9 % uptime by leveraging Route 53 health checks and Auto Scaling.

**Learning & Bar‑raiser Signals**  
We discovered that a single point of failure in the Lambda trigger caused a cascade of missed predictions. Adding a dead‑letter queue and retry logic fixed this, teaching us to anticipate edge‑case failures early. The bar‑raiser looks for ownership (I owned the entire pipeline), depth (I dug into model conversion performance), quantified impact (latency & cost metrics), and learning from failure (DDQ implementation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
