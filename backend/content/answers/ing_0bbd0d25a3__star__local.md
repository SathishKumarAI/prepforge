---
qid: ing_0bbd0d25a3__star__local
question: 'Explain: The Attacker-Defender Loop in Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 350
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:52:08-05:00'
sources: []
---

**Situation:**  
At my last role as a DevOps engineer for an e‑commerce platform, we noticed that the latency of our recommendation engine was creeping up to 350 ms during peak traffic. The team suspected an emerging DDoS pattern targeting our inference API.

**Task:**  
I had to design and implement a live attacker‑defender loop in production: continuously detect suspicious requests, automatically block them, then adaptively relax defenses when traffic normalised—without human intervention or downtime.

**Action:**  
1. Instrumented the API gateway with Prometheus metrics (request rate, error ratio, source IP entropy).  
2. Built a lightweight Go service that consumed those metrics via Grafana alerts and ran a simple machine‑learning model (RandomForest) to classify traffic as “benign” or “potential attacker.”  
3. Integrated the model output with AWS WAF rules through Terraform; when flagged, the service updated the WebACL in real time.  
4. Added a feedback loop: every 10 minutes the service re‑evaluated blocked IPs against new data and automatically removed stale blocks after an anomaly score dropped below a threshold.

**Result:**  
Within two days of deployment, API latency fell from 350 ms to 120 ms under peak load, while false positives stayed under 1%. The system handled over 15 k requests per second without any manual throttling. I learned that embedding lightweight ML in the defender’s loop can turn a reactive security posture into a proactive, self‑healing one—critical for high‑traffic AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
