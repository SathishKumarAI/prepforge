---
qid: ing_90a18b80cf__aws__local
question: 'Explain: Observability — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 482
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:04-05:00'
sources: []
---

**Situation** – In my last role I was tasked with exposing a new fraud‑detection model as an HTTPS endpoint for 10 k requests per second while guaranteeing sub‑200 ms latency and real‑time monitoring.

**Task** – Build an observability layer that tracks request/response metrics, error rates, model confidence, and downstream impacts, all without blocking inference.

**Action**  
1. **Architecture** – API Gateway → Lambda (warm pool) → SageMaker Runtime endpoint.  
2. **Observability stack** –  
   * CloudWatch Logs for raw payloads (encrypted, size capped).  
   * CloudWatch Metrics + Dashboards for request count, latency percentile, error %, confidence distribution.  
   * X‑Ray traces every invocation to surface downstream call latencies.  
   * Lambda `AWS::Serverless::Function` emits custom metrics (e.g., “ModelConfidence”) directly to CloudWatch using the SDK.  
3. **Scalability & Cost** – Lambda provisioned concurrency of 500 keeps cold starts <10 ms; autoscaling on request rate protects against spikes. SageMaker endpoint uses a `ml.m5.xlarge` instance with spot capacity, reducing cost by ~40 % while keeping 99.9 % availability.  
4. **Alerting** – CloudWatch Alarms on latency >250 ms and error % >1 %, auto‑triggering an SNS topic that feeds into a PagerDuty incident.

**Result** – After deployment we logged 12 M requests in the first month with 99.6 % success, latency 180 ± 20 ms, and spot savings of $3k/month. The observability framework enabled us to reduce model drift incidents by 75 % through automated confidence‑based retraining triggers.

**Leadership Principles** – *Ownership* (I led the entire stack), *Dive Deep* (instrumented every layer), *Deliver Results* (quantified latency, cost savings).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
