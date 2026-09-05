---
qid: ing_8268c3bfaa__star__local
question: 'Explain: Clarifying Requirements — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 346
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:54:11-05:00'
sources: []
---

**Situation**  
In a recent interview I was asked to design a messaging platform like WhatsApp. The interviewer kept shifting focus between real‑time delivery, end‑to‑end encryption, and scalability, which made it hard to pick the right scope.

**Task**  
I needed to confirm the core requirements: 1) instant message delivery with ≤200 ms latency for 10 M concurrent users; 2) strong encryption for all messages; 3) support group chats up to 500 participants; and 4) ability to handle a 5× traffic spike during peak hours.

**Action**  
I began by listing assumptions on data volume, user distribution, and failure scenarios. I asked clarifying questions about persistence (SQL vs NoSQL), whether media uploads were required, and the acceptable downtime window for updates. Once the constraints were clear, I sketched a high‑level architecture: a CDN‑backed message broker (Kafka) feeding stateless workers, Redis for session state, and an end‑to‑end encryption layer using Signal protocol. I also detailed rate limiting, sharding strategy, and a fallback path via SMS for unreachable users.

**Result**  
The interviewers appreciated the focused scope; we spent 15 minutes on trade‑offs rather than vague ideas. The design was validated against their success metrics: <200 ms latency at peak load and 99.9% message delivery. I learned that early, precise requirement clarification saves time and prevents overengineering in high‑stakes system design interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
