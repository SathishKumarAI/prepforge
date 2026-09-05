---
qid: ing_725930a823__star__local
question: Why are computer-use / browser agents so much harder to make reliable than
  API-based agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 300
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:15:55-05:00'
sources: []
---

**Situation:** In my last role I led a project to build an automated customer support bot that could browse the company’s legacy web portal and fill out forms for users, rather than just call internal APIs.

**Task:** The goal was to deliver a fully reliable “browser agent” that could navigate dynamic pages, handle pop‑ups, and submit data with >95 % success over a 30‑day test period—something our API‑based agents had already achieved comfortably.

**Action:** I first mapped the UI flow with Selenium Grid, then added a headless‑Chrome stack to capture screenshots on failure. We built a rule engine that detected DOM changes and triggered a fallback script: if an element’s selector failed, the agent would retry with an XPath heuristic or switch to a cached snapshot of the page. For flaky network latency, we introduced exponential backoff and circuit‑breaker patterns. To monitor reliability, I set up a custom Prometheus exporter that logged every navigation step, error type, and response time, feeding into Grafana dashboards for real‑time alerts.

**Result:** After three weeks of iterative tuning, the browser agent’s success rate climbed from 72 % to 96 %, meeting our SLA. We reduced manual intervention by 80 %. The experience taught me that reliability in browser agents hinges on robust error‑handling pipelines and continuous monitoring—things you can’t assume with a clean API surface.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
