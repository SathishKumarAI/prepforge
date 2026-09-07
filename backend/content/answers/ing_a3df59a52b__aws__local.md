---
qid: ing_a3df59a52b__aws__local
question: How do you instrument cost and latency for an agentic feature, and what
  actually drives cost creep?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 466
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:37:57-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation*: I led the rollout of a new agentic recommendation engine that runs on a nightly batch and serves 5 M users daily. Early production runs revealed unexplained latency spikes and a 12 % increase in compute spend versus our forecast.

*Task*: Build a real‑time cost/latency monitoring stack, identify root causes, and cap runaway expenses while preserving user experience.

*Action*:  
1. **Instrumentation** – injected OpenTelemetry SDK into every Lambda that triggers the agentic model; exported spans to CloudWatch Metrics and X-Ray traces. Added per‑request tags for *model version*, *input size*, and *execution path*.  
2. **Cost Capture** – used AWS Cost Explorer API with custom dimension `AgenticFeature` and a Lambda that aggregates spend per minute, feeding into an Amazon DynamoDB table (`FeatureCost`).  
3. **Alerting & Automation** – set CloudWatch Alarms on latency > 250 ms (95th percentile) and cost > $0.05/min; triggered an EventBridge rule to invoke a SageMaker BatchTransform job that throttles the model’s concurrency via an API Gateway usage plan.  
4. **Root‑cause analysis** – X‑Ray traces showed that larger input payloads (>2 MB) caused GPU memory thrashing, pushing inference onto CPU nodes (×3 latency, ×1.5 cost).  
5. **Optimization** – compressed inputs with Brotli, switched to a lighter transformer model for low‑complexity queries, and added auto‑scaling on the GPU cluster.

*Result*: Latency dropped from 320 ms to 190 ms (30 % improvement), monthly cost reduced by $18k (≈25 % of projected spend), and we maintained 99.9 % SLA. I documented the failure mode in a post‑mortem, highlighting that **input size & model complexity** were the primary drivers of cost creep—an insight now baked into our feature‑onboarding checklist.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
