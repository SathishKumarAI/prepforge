---
qid: ing_2df279fe55__faang__local
question: Design the SLOs for a new LLM-powered feature. What do you promise, and
  how do you measure it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 507
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:30:16-05:00'
sources: []
---

**Clarify**  
We’re adding an LLM‑driven “Smart Summarizer” to our docs app.  
Assumptions: *The model runs on‑prem in a sandbox, latency matters for UI, users care about factual accuracy and privacy.*  

**Approach**  
1. Define what *service* means (prompt → safe, accurate summary).  
2. Pick measurable metrics that map to user value.  
3. Tie each metric to SLAs we can enforce with tooling.  

**Depth**  
| SLO | Definition | Target | Measurement | Tooling |
|-----|------------|--------|-------------|---------|
| **Latency** | 95 % of requests finish <200 ms (CPU+IO). | 200 ms | Histogram in Prometheus + Grafana dashboards. | APM, synthetic checks. |
| **Accuracy** | ≥90 % of summaries pass a human‑rated “faithful” check per batch. | 90 % | Periodic manual audit; automated BLEU/F1 vs ground truth for training data. | Annotation platform, ML Ops pipeline. |
| **Safety** | 0 % of responses contain disallowed content (hate, privacy leaks). | 0 % | Content filter logs + daily compliance report. | Real‑time moderation service. |
| **Availability** | 99.9 % uptime for the summarizer API. | 99.9 % | Uptime monitor, incident log. | PagerDuty, SLIs in ServiceNow. |

**Edge Cases**  
- Outliers: long documents → >200 ms; we’ll batch or stream.  
- Model drift: accuracy dips below threshold—trigger retraining.  
- Privacy violations: zero‑tolerance policy; any breach triggers rollback.

**Optimize & Communicate**  
Explain that latency is bounded by GPU queue time, so we’ll auto‑scale based on queue depth. Accuracy targets balance user trust with training cost; we’ll iterate via A/B testing. For safety, a layered filter (pre‑filter + post‑filter) reduces false positives while keeping 0 % violations.  

Narrative: “We promise fast, trustworthy summaries—measured by latency, factuality, and zero unsafe content, all backed by observable SLIs so we can detect and fix drift before users notice.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
