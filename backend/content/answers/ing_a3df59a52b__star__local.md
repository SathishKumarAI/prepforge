---
qid: ing_a3df59a52b__star__local
question: How do you instrument cost and latency for an agentic feature, and what
  actually drives cost creep?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 367
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:13-05:00'
sources: []
---

**Situation** – At my last company we launched a real‑time recommendation engine that ran on a serverless platform. Within the first month, our monthly spend had jumped from $3k to over $12k and latency for the top 10% of traffic spiked to 350 ms.

**Task** – I needed to instrument both cost and latency end‑to‑end so we could pinpoint what was driving the spike, then cut costs by at least 30 % without hurting user experience.

**Action** – First, I added CloudWatch metrics for every Lambda invocation: execution time, memory usage, and request count. I also instrumented the GraphQL gateway with OpenTelemetry, exporting spans to Jaeger, which let me see call‑chain latency per feature flag. Using AWS Cost Explorer’s “Cost Allocation Tags”, I tagged each microservice by business unit. I ran a cost‑per‑request analysis: memory × execution time = cost; this highlighted that the recommendation function was over‑provisioned (2,048 MB) but only used ~1 GB on average. I reduced its memory to 1,024 MB and introduced a “cold start” cache in Redis, cutting invocations by 25% and eliminating the cold‑start penalty.

**Result** – Within two weeks the monthly spend fell to $8k (a 33% reduction) while latency for the top tier dropped to 200 ms. I learned that cost creep often comes from over‑provisioned resources combined with unobserved cold starts, and that detailed telemetry across all layers is essential to isolate and fix it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
