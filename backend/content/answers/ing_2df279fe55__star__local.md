---
qid: ing_2df279fe55__star__local
question: Design the SLOs for a new LLM-powered feature. What do you promise, and
  how do you measure it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 346
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:00:21-05:00'
sources: []
---

**Situation**  
When we launched our AI‑assistive code completion tool last quarter, user feedback highlighted two pain points: laggy responses and occasional irrelevant suggestions that made developers distrust the feature.

**Task**  
I was tasked with defining clear SLOs that balanced speed, relevance, and reliability, while ensuring they could be measured in production without bloating instrumentation.

**Action**  
First, I scoped the user journey: from keystroke to suggestion. I set a latency SLO of 200 ms for 95 % of requests (using Prometheus histograms keyed by endpoint and model version). For relevance, I introduced a “confidence‑filtered hit rate” metric—percentage of suggestions with confidence > 0.8 that were accepted in the next edit cycle—tracked via Mixpanel events. Reliability was captured through an error‑rate SLO of < 1 % per 24 h. To validate these thresholds, I ran A/B tests comparing our baseline model to a newer distilled version, collecting latency samples from 50k sessions and acceptance rates from the same cohort.

**Result**  
After two iterations, we achieved 97 % requests under 200 ms, a confidence‑filtered hit rate of 82 %, and an error rate of 0.6 %. User satisfaction scores rose from 3.8 to 4.5 out of 5. I learned that coupling latency with relevance metrics gives a more holistic view of AI quality, and that small, continuous A/B tests keep SLOs realistic and actionable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
