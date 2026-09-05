---
qid: ing_51a70ff61d__eli5__local
question: 'Explain: Resiliency & Scalability — Uber Engineering \u2014 Where the Digital
  World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 212
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:46:32-05:00'
sources: []
---

Imagine a city’s traffic lights as a big software system. **Resiliency** is like having backup power and automatic resets so that if one light fails, the whole intersection keeps working—drivers don’t get stuck or crash. In Uber, this means building services that can recover from crashes, network hiccups, or sudden spikes in riders without losing data or showing errors.

**Scalability** is like adding more lanes to a highway when traffic grows. When millions of people start using Uber at once, the system must add more servers, databases, and routing rules quickly, so every ride request still gets matched fast. Uber engineers design their “traffic lights” (micro‑services) so they can be duplicated and spread across many machines, just like adding lanes spreads out cars.

Together, resiliency keeps the city moving smoothly even when something breaks, while scalability lets it grow without slowing down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
