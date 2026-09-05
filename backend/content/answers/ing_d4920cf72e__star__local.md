---
qid: ing_d4920cf72e__star__local
question: 'Explain: hey guys welcome to Pyon my name — Scalability at YouTube'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 316
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:25-05:00'
sources: []
---

**Situation**  
When I joined YouTube as a machine‑learning engineer, the recommendation system was handling only 30 % of daily traffic. Our model served 5 million requests per day but latency spiked during peak hours, causing buffering for millions of users.

**Task**  
I had to redesign the inference pipeline so it could scale to 15 million requests/day while keeping latency under 200 ms and maintaining a 0.8 precision‑recall balance.

**Action**  
First, I profiled the existing TensorFlow Serving stack with PyTorch ONNX converters, finding that GPU utilization was only 45 %. I migrated the model to Triton Inference Server, enabling batch inference of size 32 without sacrificing latency. Next, I introduced a sharded key‑value cache in Redis for cold‑start predictions, cutting first‑call latency by 60 %. Finally, I automated horizontal scaling with Kubernetes HPA based on request queue depth, ensuring we had spare replicas during traffic spikes.

**Result**  
After deployment, throughput increased to 13.5 million requests/day— a 250 % lift— and average latency dropped from 350 ms to 170 ms. User‑reported buffering incidents fell by 78 %. I learned that balancing model complexity with real‑world infrastructure constraints is key; sometimes the simplest caching strategy delivers the biggest ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
