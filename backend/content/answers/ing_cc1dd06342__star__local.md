---
qid: ing_cc1dd06342__star__local
question: How availability is measured? — Highavailability
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 343
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:17:08-05:00'
sources: []
---

**Situation** – In my last role I was responsible for a real‑time recommendation engine that served millions of users per day on an e‑commerce platform. The SLA required 99.95% uptime, but during a quarterly traffic spike we were consistently hitting only 99.7%, causing noticeable latency and revenue loss.

**Task** – My goal was to redesign the availability monitoring and incident response so we could reliably hit the SLA while keeping cost in check.

**Action** – I introduced an *availability* metric defined as:  
\[Availability = \frac{(Total\;Uptime - Maintenance\;Time)}{Total\;Uptime}\]  
using Prometheus to scrape component health endpoints every 10 s and Grafana dashboards for real‑time alerts. I added a circuit‑breaker layer in the service mesh (Istio) with fallback caching, and set up automated failover between two AZs using Terraform‑managed ELBs. For maintenance windows, I used a calendar‑based “scheduled downtime” tag so they wouldn’t skew the metric. We also ran monthly chaos‑engineering drills to validate our recovery time objective.

**Result** – Within three months we moved from 99.7% to 99.97% availability, exceeding the SLA and cutting unplanned outage cost by $120k annually. I learned that a clear, mathematically defined metric combined with automated health checks and proactive failover is essential for reliable high‑availability AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
