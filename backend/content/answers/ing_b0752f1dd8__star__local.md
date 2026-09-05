---
qid: ing_b0752f1dd8__star__local
question: Why do you want to work on AI systems - and why here specifically?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 309
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:24:51-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup we were launching an automated credit scoring tool, but our model’s false‑positive rate kept spiking during peak traffic, hurting user experience and regulatory compliance.  

**Task:** I had to redesign the inference pipeline so it could scale to 10k requests per second while keeping latency under 50 ms and reducing error rates by at least 30%.  

**Action:** I migrated from a monolithic TensorFlow serving stack to a micro‑service architecture using NVIDIA Triton Inference Server, added model quantization (INT8) and dynamic batching. I also introduced an online A/B testing framework in Kubernetes that rolled out new models incrementally, monitored precision‑recall curves, and automatically reverted if performance dipped. Throughout, I collaborated with data scientists to fine‑tune the loss function for fairness metrics, ensuring we met regulatory thresholds.  

**Result:** We cut inference latency from 120 ms to 35 ms, increased throughput to 15k req/s, and lowered false positives by 42%, boosting customer satisfaction scores by 18 points. This experience taught me that AI isn’t just about building models—it’s about engineering robust systems that deliver measurable business value. I’m excited to bring this blend of data science and production‑grade engineering to your team because your mission to democratize AI for global health aligns with my passion for solving high‑impact problems at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
