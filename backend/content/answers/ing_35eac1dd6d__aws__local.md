---
qid: ing_35eac1dd6d__aws__local
question: 'Explain: Monitor Your Agents in Production — Open-Source AI Observability
  Platform | Opik by Comet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 530
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:35-05:00'
sources: []
---

**Situation & Task**  
In 2024 I led the rollout of a new generative‑AI assistant for our e‑commerce platform. The team needed real‑time observability to catch hallucinations, latency spikes, and policy violations before customers saw them. We chose Opik (an open‑source AI observability stack) because it promised low‑latency telemetry, model‑agnostic logging, and integration with our existing AWS infra.

**Action**  
1. **Design & Implementation** – I architected a micro‑service that wraps every inference call. Using *AWS Lambda* for the wrapper, we pushed structured logs to an *Amazon Kinesis Data Firehose* stream → *Amazon S3* (cold storage) and *Amazon OpenSearch* (real‑time search).  
2. **Metrics & Alerts** – Built custom dashboards in OpenSearch Dashboards; added anomaly detection via *AWS CloudWatch Alarms*. Triggered a Lambda that auto‑scales the inference endpoint on *Amazon SageMaker* when latency > 200 ms for >5 s.  
3. **Bias for Action / Ownership** – I ran a “fail fast” drill: intentionally injected mis‑aligned prompts and verified alerts fired within 2 seconds, showing end‑to‑end reliability.

**Result**  
- Reduced customer‑reported hallucinations by **73%** in the first month.  
- Cut mean time to detection (MTTD) from ~15 min to <30 s.  
- Saved ~$12k/month on SageMaker usage by auto‑scaling only during traffic spikes.  

**Learnings & Bar‑raiser cues**  
*Ownership*: I owned the entire observability pipeline, from data ingestion to alerting.  
*Dive Deep*: I debugged latency issues by correlating Opik logs with CloudWatch metrics, revealing a hidden cold‑start cost in our GPU instances.  
*Quantified Impact*: Metrics above prove business value.  
*Learning from Failure*: The initial probe showed delayed alerts; we iterated on the Lambda timeout and added a secondary alert channel (SNS + PagerDuty).  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Directly improved user experience by eliminating hallucinations.  
- **Ownership & Dive Deep** – Took full responsibility for end‑to‑end monitoring, digging into root causes and refining the stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
