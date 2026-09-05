---
qid: ing_190c804afe__star__local
question: 'Explain: Deployment topology — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 323
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:19:20-05:00'
sources: []
---

**Situation**  
At my last startup we built a “Computer Use Agent” (CUA) that monitored user workflow on laptops and suggested productivity shortcuts. Our beta release had great accuracy, but when we pushed to production the latency spiked above 400 ms during peak hours, breaking our SLA of <200 ms.

**Task**  
I was tasked with redesigning the deployment topology so the CUA could run locally for low‑latency inference while still syncing state with a central analytics service without overloading the network.

**Action**  
First, I split the agent into two microservices: an on‑device inference engine (TensorFlow Lite) and a lightweight sync daemon. The inference engine ran in a Docker container isolated by AppArmor, using GPU offload when available. For state sync, I introduced a Kafka broker with partitioned topics per user region, ensuring only incremental changes were sent over HTTPS. I also added an edge cache layer that stored the most recent model version locally and used a rolling‑update strategy to push new weights without downtime.

**Result**  
Latency dropped to 120 ms on average, keeping us well under SLA, while network usage fell by 65%. The system now supports 10× more concurrent users and I learned how hybrid edge‑cloud topologies can reconcile real‑time constraints with central analytics in AI production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
