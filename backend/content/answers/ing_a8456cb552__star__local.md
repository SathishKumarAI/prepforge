---
qid: ing_a8456cb552__star__local
question: 'Explain: Online Games — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 342
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:09:35-05:00'
sources: []
---

**Situation** – While leading the networking team for a cross‑platform MMO at my last company, we were hitting latency spikes during peak hours. The player base was growing to 150 k concurrent users, and our matchmaking servers ran on AWS EC2 instances in us-east-1.

**Task** – Redesign the transport layer so that real‑time combat actions stayed under 30 ms round‑trip while still guaranteeing critical state updates (e.g., health changes) without packet loss.

**Action** – I split traffic into two flows: we moved all deterministic game logic over UDP, using a custom reliability wrapper for essential packets (ACKs with exponential backoff). For non‑critical telemetry (chat, inventory sync), we kept TCP to leverage its congestion control. We also implemented a lightweight “replay buffer” on the client to reorder out‑of‑sequence UDP packets and used sequence numbers in every packet header. On the server side, we added a priority queue that dropped lower‑priority UDP packets when CPU usage hit 80 %.

**Result** – Latency dropped from an average of 68 ms to 24 ms during peak load, and packet loss for critical updates fell below 0.2 %. Player churn decreased by 12 % in the following month, and we gained a scalable pattern that was later adopted for our VR spin‑off. I learned how to balance UDP’s speed with TCP’s reliability by applying transport‑specific trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
