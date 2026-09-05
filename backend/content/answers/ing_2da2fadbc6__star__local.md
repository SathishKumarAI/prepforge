---
qid: ing_2da2fadbc6__star__local
question: 'Explain: Geographic Redundancy — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 356
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:59:36-05:00'
sources: []
---

**Situation:**  
In my last role as a platform engineer at FinTechCo, we were launching a new payment gateway that had to stay online 99.999% uptime during peak holiday shopping. A single data center outage would have meant millions of dollars in lost revenue and regulatory penalties.

**Task:**  
I was tasked with designing an architecture that could tolerate a full regional failure without impacting users or violating SLAs, all while keeping latency under 50 ms for North American traffic.

**Action:**  
First, I mapped out two geographically separated zones (US‑East & US‑West) and deployed Kubernetes clusters in each. Using GCP’s Cloud Load Balancer with health checks that ping a lightweight “heartbeat” service, I ensured traffic would automatically shift to the healthy zone. For data, we set up cross‑region Spanner replicas with synchronous writes for critical tables and asynchronous replication for analytics. To avoid split‑brain, I implemented a consensus protocol via etcd running in both zones, so only one cluster could accept write traffic at any time. Finally, I scripted automated failover tests that triggered a controlled outage of the primary zone to validate everything worked end‑to‑end.

**Result:**  
After deployment, we hit 100% uptime during the holiday season and recorded a 30 % reduction in latency for west‑coast users thanks to the local cluster. The incident response time dropped from 45 minutes to under 5 minutes because the load balancer and health checks handled failover instantly. I learned that true geographic redundancy is as much about operational automation and testing as it is about infrastructure design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
