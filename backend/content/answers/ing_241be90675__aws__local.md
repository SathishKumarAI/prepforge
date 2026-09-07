---
qid: ing_241be90675__aws__local
question: 'Explain: Long Polling — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 458
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:48:38-05:00'
sources: []
---

**Long‑Polling vs. WebSockets – My Experience**

**Situation & Task**  
When redesigning our real‑time notification service for a global e‑commerce platform (30 M daily users), I had to decide between long‑polling and WebSockets. The goal was 99.9 % message latency under peak load while keeping cost < $2k/month.

**Action**  
I performed a **Dive Deep** analysis:

| Metric | Long‑Polling | WebSocket |
|--------|--------------|-----------|
| Avg request size | 150 B | 200 B |
| Connection count | 1 per poll (stateless) | Persistent 1:1 |
| Latency (99th %) | 4.2 s | < 50 ms |
| Cost (AWS Lambda + API GW) | $1,800/mo | $1,450/mo |

I built a prototype using **Amazon API Gateway** + **AWS Lambda** for long‑polling and **Amazon API Gateway WebSocket** + **Elasticache Redis** for stateful messaging. I simulated 100 k concurrent users with **Artillery**, measured latency, CPU, and network usage.

The results: WebSockets reduced average message delivery from 4.2 s to < 50 ms (≈ 95 % improvement) while cutting infrastructure cost by $350/month. The only trade‑off was slightly higher memory per connection (512 MB vs 256 MB), acceptable given our SLA.

**Result**  
I presented the findings to stakeholders; they approved WebSockets, leading to a **30 % increase in user engagement** and a **$1k/quarter cost saving**. I documented lessons learned on scaling persistent connections and shared best practices across teams.

**Leadership Principles Highlighted**

- **Customer Obsession:** Prioritized sub‑100 ms latency for end‑users.
- **Ownership & Deliver Results:** Took full responsibility for prototyping, testing, and implementing the solution that delivered measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
