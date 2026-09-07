---
qid: ing_a69331ff0c__aws__local
question: 'Q30: How do you implement observability for LLM applications?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 568
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:43:42-05:00'
sources: []
---

**Situation / Task**  
While launching a customer‑facing chatbot powered by an LLM on AWS, I was responsible for ensuring 99.9 % uptime and rapid incident response. The team had no observability baseline, so we risked slow rollbacks and degraded user experience.

**Action**  
I designed a full observability stack:

| Layer | Service | Reasoning |
|-------|---------|-----------|
| **Instrumentation** | Amazon SageMaker endpoints + custom OpenTelemetry SDK | Captures inference latency, token counts, error rates. |
| **Metrics & Logs** | CloudWatch Metrics & Logs + Kinesis Data Firehose → S3 | Provides 1‑second granularity and long‑term retention for audit. |
| **Tracing** | X‑Ray + Lambda “tracer” | Enables end‑to‑end request paths, showing where token generation stalls. |
| **Model‑specific monitoring** | SageMaker Model Monitor + Amazon Lookout for Metrics | Detects drift in input distribution (e.g., 15 % shift in user intent) and anomaly alerts. |
| **Dashboards & Alerts** | Grafana on CloudWatch + SNS | Visualizes latency, error %, and drift; auto‑scales with Auto Scaling Groups. |

I added a **“health check” Lambda** that runs a small prompt against the LLM every minute; if response time > 500 ms or accuracy drops below 90 %, it triggers an Auto Scaling policy to spin up additional endpoint replicas.

**Result**  
After deployment, we saw:

* Latency dropped from 1.2 s (pre‑observability) to **0.35 s** avg.
* Error rate fell from 4.7 % to **0.6 %**.
* Incident response time reduced from 45 min to under **5 min**, allowing us to roll back a faulty model version within the SLA.

**Learning & Bar‑raiser cues**  
I documented each metric’s threshold and the rationale, showing *ownership* of the system’s health. By diving deep into trace data I uncovered a hidden GPU bottleneck—an example of *Bias for Action* that prevented a potential outage. The bar‑raiser will note my focus on quantified impact (latency & error reductions) and my iterative learning loop: each incident prompted metric adjustments, ensuring continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
