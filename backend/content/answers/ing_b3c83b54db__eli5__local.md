---
qid: ing_b3c83b54db__eli5__local
question: 'Explain: Vertical vs Horizontal Scaling | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 213
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:22:00-05:00'
sources: []
---

Think of your computer system as a kitchen that serves a growing number of customers.

**Vertical scaling (scale‑up)** is like adding more chefs, bigger ovens, or a larger stove to the same kitchen. You’re making the single “unit” stronger so it can handle more work at once. It’s simple—just upgrade the existing hardware—but you hit limits: a single oven can only be so big, and if that one kitchen breaks down, all service stops.

**Horizontal scaling (scale‑out)** is like opening new kitchens in other rooms of the building. Each new kitchen runs its own set of chefs and ovens, but together they share the workload. If one kitchen stalls, the others keep cooking. You can add as many kitchens as needed, so the system grows linearly with demand.

In short: vertical = “taller” single machine; horizontal = “wider” network of machines working side by side.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
