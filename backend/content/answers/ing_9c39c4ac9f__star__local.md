---
qid: ing_9c39c4ac9f__star__local
question: 'Explain: Pitfall 5: No Graceful Degradation — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 318
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:44:29-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we launched an AI‑driven fraud detection model that ran in real time on every transaction. One night the cloud provider hit a region outage and our inference service went down for 90 minutes.

**Task:**  
I had to restore trust with merchants who were seeing a sudden spike in false positives while keeping the system available, even when the primary ML pipeline was offline.

**Action:**  
I added a lightweight rule‑based fallback that executed on the edge servers. The fallback used a static whitelist of merchant IDs and a simple threshold on transaction amount and velocity, coded in Go and deployed via Kubernetes config maps so it could be toggled without redeploying the model. I also instrumented Prometheus alerts to trigger an automatic switch to the fallback when latency exceeded 200 ms or error rates spiked. Finally, I built a dashboard that logged which transactions used the fallback for post‑mortem analysis.

**Result:**  
When the outage happened, merchant false positives dropped from 12 % to 3 %, and transaction processing remained under 50 ms. The system stayed online 99.8 % of the time during peak hours, and we reduced engineering mean time to recovery by 70 %. I learned that graceful degradation isn’t just a safety net—it’s a core reliability feature that can be engineered with simple rules, observability, and automated failover logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
