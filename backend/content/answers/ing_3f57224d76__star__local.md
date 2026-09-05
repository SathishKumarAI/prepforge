---
qid: ing_3f57224d76__star__local
question: Why some websites are not opening in chrome?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 337
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:34:55-05:00'
sources: []
---

**Situation** – In early 2024 I was leading a QA effort for a fintech app that had to be accessed from multiple corporate networks. Half the testers reported that the company’s internal portal would not load in Chrome, but worked fine in Edge and Safari.

**Task** – My job was to pinpoint why Chrome failed while other browsers succeeded, and deliver a fix within two days so the rollout could stay on schedule.

**Action** – I started by comparing network traces from Chrome and Edge. The logs revealed that Chrome was blocking the request due to an invalid TLS handshake flagged as “certificate expired.” I dug into the corporate proxy’s SSL inspection rules: it had been updated to drop certificates older than 90 days, but our portal’s certificate had a 120‑day validity period. I then set up a temporary self‑signed cert with an extended validity and re‑registered it in the proxy’s trust store, ensuring Chrome could negotiate TLS without errors. Finally, I added a fallback script that detected the error and redirected users to Edge as a graceful degradation path.

**Result** – Within 24 hours all browsers accessed the portal consistently; the incident rate dropped from 45% to 0%. I learned how subtle differences in certificate handling can surface only in specific user agents, and documented the process so future deployments include an automated TLS health check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
