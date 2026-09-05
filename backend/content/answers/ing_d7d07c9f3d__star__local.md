---
qid: ing_d7d07c9f3d__star__local
question: How would you A/B test a prompt change safely in production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 280
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:40:37-05:00'
sources: []
---

**Situation:** At my last company we launched an AI-powered chatbot that answered customer queries. The team noticed a dip in user satisfaction after rolling out a new, more concise prompt to speed response times.

**Task:** I was tasked with validating the new prompt without risking further loss of engagement or introducing bugs into production.

**Action:** First, I defined clear success metrics—average sentiment score and completion rate. Using feature flags, I deployed the new prompt to 10% of traffic (control vs. treatment) in a canary release. I instrumented logging with structured events to capture prompt usage and response quality. Then I ran a multi‑armed bandit algorithm to adaptively allocate traffic toward the better performing variant while keeping enough samples for statistical power. Parallelly, I set up automated rollback triggers if latency spiked beyond 200 ms or sentiment dropped below 4.2 on a 5‑point scale.

**Result:** The A/B test ran for two weeks; the new prompt improved average response time by 18% and maintained sentiment above baseline with only a 0.3% drop in completion rate. We safely rolled it out to 100%, learned that careful traffic shaping and real‑time monitoring are essential, and documented the process as a standard operating procedure for future experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
