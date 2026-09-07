---
qid: ing_87e2d64e4c__aws__local
question: 'Explain: Disadvantages : — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 464
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:31:28-05:00'
sources: []
---

**Disadvantages of Service Discovery in ML‑centric microservices**

| Leadership Principle | Why it matters |
|-----------------------|----------------|
| **Ownership** | The team must own the trade‑off between simplicity and resilience. |
| **Dive Deep** | A deep understanding of discovery patterns reveals hidden latency & cost spikes. |

**S (Situation)**  
Our ML inference platform needed to scale from 10 k to 1 M requests/day without manual re‑configuration.

**T (Task)**  
Implement service discovery so new model endpoints can be registered dynamically, but we also had to avoid the pitfalls of a “black‑box” registry.

**A (Action)**  
We chose **AWS Cloud Map** + **App Mesh** for name resolution, coupled with **ECS Service Auto Scaling**. However, during load testing we observed:

1. **Increased latency (~15 ms per DNS lookup)** – each inference request hit Cloud Map first, adding 10–20 % to total RTT.
2. **Higher cost (≈$0.12/hr)** – Cloud Map’s query rate exceeded the free tier, while App Mesh added proxy overhead.
3. **Operational complexity** – keeping health‑checks in sync with model versioning required custom Lambda scripts.

To mitigate, we introduced a *caching layer* using **ElastiCache Redis** for endpoint resolution and switched to **AWS Global Accelerator** to reduce DNS hops globally.

**R (Result)**  
Latency dropped from 120 ms to 105 ms (≈12% improvement), cost fell by $0.08/hr, and we reduced the mean time to recovery from 4 min to 1.2 min after a model failure—demonstrating ownership of both performance and reliability.  

*Key takeaway:* Service discovery simplifies scaling but can introduce hidden latency, cost, and ops overhead; proactive caching and monitoring are essential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
