---
qid: ing_d94ddeb822__star__local
question: 'Explain: Canary rollout and shadow traffic — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 367
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:19-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a new AI‑driven recommendation engine for our e‑commerce platform. The model had to process millions of customer interactions per hour and we couldn’t afford downtime or quality regressions.

**Task** – Deploy the new pipeline while ensuring that existing traffic kept running flawlessly, and collect real user data on the new logic without affecting production performance.

**Action** – I set up a **canary rollout** using Istio’s traffic‑splitting feature: 5 % of incoming requests were routed to the new microservice version in a separate Kubernetes namespace. Parallelly, I enabled **shadow traffic** by duplicating request payloads to the same canary endpoint and feeding them into a downstream “distillation” job that ran inference locally but sent results back only to a monitoring dashboard. We instrumented the shadow service with Prometheus for latency, error rates, and a custom metric capturing recommendation relevance scores. A/B tests were automated via LaunchDarkly flags so we could toggle the percentage of canary traffic based on SLA thresholds.

**Result** – After 48 hours of live testing, latency increased by <2 %, error rate stayed below 0.1 %, and the new engine achieved a 12 % lift in click‑through rates versus the legacy model. The shadow data also revealed a previously unseen edge case that we fixed before full rollout. I learned how to orchestrate safe releases at scale while turning live traffic into valuable feedback loops for AI models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
