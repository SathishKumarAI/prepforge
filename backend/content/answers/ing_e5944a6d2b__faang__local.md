---
qid: ing_e5944a6d2b__faang__local
question: 'Explain: Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 471
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:32:05-05:00'
sources: []
---

**Reliability in Machine‑Learning Systems**

| Step | What I’d do |
|------|-------------|
| **Clarify** | “We need to guarantee that the model’s predictions are accurate, available, and safe over time.”  Ask: *What is the failure mode (accuracy drop vs. latency)?* *Which SLAs matter?* *How many users or requests per second?* |
| **Approach** | 1️⃣ Define metrics (MAE, precision, uptime). <br>2️⃣ Build a robust data pipeline with versioning and drift alerts. <br>3️⃣ Deploy models behind a load‑balanced, fault‑tolerant serving layer. <br>4️⃣ Implement monitoring, automated rollbacks, and canary releases. |
| **Depth** | • **Data reliability:** use a *data lake* with schema enforcement; run nightly integrity checks. <br>• **Model reliability:** store checkpoints in S3/Blob; compare new vs. baseline metrics before promotion. <br>• **Serving reliability:** containerized inference on Kubernetes, autoscale based on request latency; keep a “shadow” model for A/B testing. <br>• **Observability:** Prometheus + Grafana dashboards; alerts when MAE > threshold or latency spikes. Complexity: O(1) inference latency; data pipeline linear in batch size. |
| **Edge Cases** | • Data drift → sudden accuracy loss. <br>• Cold start on new users → fallback rule‑based logic. <br>• Model corruption during upload → checksum validation. Test with synthetic drift, load spikes, and network partitions. |
| **Optimize & Communicate** | • Cache recent predictions (LRU) to reduce latency. <br>• Use feature store for consistent feature computation. <br>Explain trade‑offs: higher cache hit rate vs. stale data risk; stricter validation vs. slower deployment. Summarize by tying reliability back to business impact—every 0.1% accuracy drop can cost X revenue, so we invest in monitoring and rollback mechanisms. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
