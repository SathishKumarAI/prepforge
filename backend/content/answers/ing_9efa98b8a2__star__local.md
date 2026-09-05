---
qid: ing_9efa98b8a2__star__local
question: 'Explain: Red flags interviewers watch for — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 361
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:50:06-05:00'
sources: []
---

**Situation**  
During a senior ML engineer interview at a fintech startup, I was asked to sketch out an end‑to‑end fraud detection pipeline that could process ~10 M transactions per day while keeping latency below 50 ms for real‑time scoring.

**Task**  
I had to propose data ingestion, feature engineering, model serving, monitoring, and rollback strategies—all within a single slide deck—while anticipating interviewers’ red‑flag questions about scalability, bias mitigation, and ops risk.

**Action**  
I started with Kafka streams for low‑latency ingestion, applied a Spark Structured Streaming layer for feature aggregation, and chose an ONNX‑exported XGBoost model served via Triton Inference Server behind an NGINX API gateway. I added a bias‑audit microservice that logged feature distributions per demographic group and set up Prometheus alerts on drift metrics. For rollback, I included blue‑green deployment with canary sampling at 1 % traffic. I also highlighted trade‑offs: using GPU inference for higher throughput versus cost, and the decision to cache high‑frequency features in Redis to reduce compute.

**Result**  
The interviewers praised my clear acknowledgment of common pitfalls—like ignoring feature drift, over‑optimizing latency at the expense of observability, and underestimating rollback complexity. I was offered a second round, and later received feedback that my design would save roughly 30 % on inference cost while maintaining SLA compliance. I learned to frame solutions around measurable risks and operational safeguards from the outset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
