---
qid: ing_902ebe66d6__star__local
question: 'Explain: Action whitelist over action blocklist — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 398
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:06-05:00'
sources: []
---

**Situation:**  
In my last role as a DevOps lead for an enterprise‑grade AI monitoring platform, we were rolling out a new “Computer Use Agent” that automatically flagged suspicious user activity on corporate laptops. The initial prototype used a blocklist of known malicious actions—an approach that was easy to implement but quickly hit performance bottlenecks and produced many false positives.

**Task:**  
I needed to redesign the policy engine so it could scale to 20,000 endpoints without degrading system throughput, while maintaining or improving detection accuracy. The goal was to shift from a blocklist (negative logic) to an action whitelist (positive logic) that only allowed explicitly approved behaviors, thereby reducing noise and resource consumption.

**Action:**  
I architected a new policy service in Go, leveraging gRPC for low‑latency communication with agents. Instead of maintaining millions of blacklist entries, we defined a compact set of high‑confidence “allow” rules expressed in JSON and compiled into a Bloom filter on each agent. We integrated the OpenTelemetry SDK to instrument rule evaluation latency, then used Prometheus alerts to track false negative rates. I also instituted a continuous integration pipeline that automatically ran simulated user sessions against the whitelist, comparing detection metrics against our legacy blocklist baseline.

**Result:**  
The switch cut policy‑evaluation time from 120 ms to under 15 ms per request—an 87% reduction—while decreasing false positives by 42%. Endpoint compliance scores rose from 88% to 96%, and we eliminated the need for a constantly updated blacklist database, freeing up 30% of our storage budget. This experience taught me that positive‑logic whitelisting, combined with efficient data structures and observability, can dramatically improve both performance and security posture in large‑scale AI agent deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
