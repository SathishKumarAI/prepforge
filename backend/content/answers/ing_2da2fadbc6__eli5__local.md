---
qid: ing_2da2fadbc6__eli5__local
question: 'Explain: Geographic Redundancy — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 220
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:48:00-05:00'
sources: []
---

**Geographic redundancy is like having a backup kitchen in another city to keep your restaurant open if one kitchen burns down.**

In tech, *availability* means the service stays up and users can still access it. A single data center (one kitchen) is risky: power loss, natural disaster, or maintenance can shut it out. With *geographic redundancy*, you run identical copies of the system in two or more distant locations—think of a second kitchen miles away. If one fails, traffic automatically switches to the other, so customers keep ordering without interruption.

Key terms:
- **Data center**: A building full of servers that run your software.
- **Failover**: The automatic switch from the failed location to a healthy one.

By spreading resources across places that can’t both go down at once, you make your service more reliable—just like having two kitchens keeps the restaurant alive no matter what happens in either city.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
