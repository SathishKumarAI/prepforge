---
qid: ing_708f1f20ef__star__local
question: 'Explain: Understanding demand sources of traffic — Viewing the world as
  a computer: Global capacity management'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 349
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:23-05:00'
sources: []
---

**Situation:**  
At my last company we ran a global ad‑tech platform that served video streams to millions of users worldwide. During a surge in summer traffic our CDN hit saturation on several edge nodes, causing buffering and a 12 % drop in revenue.

**Task:**  
I was tasked with diagnosing the root causes of the traffic spike, mapping demand sources across regions, and scaling capacity without overspending on under‑utilized infrastructure.

**Action:**  
First I treated the entire network as a distributed computer: each CDN node became a “process” and user requests were “threads.” I set up real‑time telemetry using Prometheus to capture request rates, latency, and cache hit ratios per region. Then I applied a queuing‑theory model (M/M/1) to estimate the service time required for each edge server. Using this, I built a lightweight scheduler in Go that redistributed traffic based on predicted queue lengths, effectively load‑balancing between under‑utilized nodes and those approaching capacity. Finally, I automated the scaling policy in Kubernetes, tying pod replicas to the modeled demand curves.

**Result:**  
The adaptive scheduler reduced edge node saturation by 78 %, improved average latency from 400 ms to 210 ms, and restored revenue growth to pre‑surge levels within 48 hours. I learned that treating a distributed system like a single computer—monitoring queues, modeling service rates, and dynamically balancing load—can dramatically improve global capacity management while keeping costs under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
