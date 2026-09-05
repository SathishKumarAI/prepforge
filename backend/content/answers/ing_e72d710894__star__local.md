---
qid: ing_e72d710894__star__local
question: 'Explain: Principles of Context Engineering — Don\u2019t Build Multi-Agents
  | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 350
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:10:44-05:00'
sources: []
---

**Situation** – In late 2023 I was leading a project for a fintech startup that needed an AI‑driven fraud detection model. The data pipeline fed real‑time transaction streams into a single inference engine, but our early tests kept overfitting on “known” fraud patterns and missing new tactics.

**Task** – My goal was to design a robust context‑engineering strategy that would keep the model focused on relevant signals without splitting it into a swarm of micro‑services (multi‑agents) that would complicate latency and debugging.

**Action** – I introduced a layered feature‑context stack: first, an “event window” buffer that aggregated transactions per user over 30 minutes; second, a domain‑specific embedding layer that mapped merchant categories and geolocations into a low‑dimensional space; third, a rule‑based context filter that removed noise (e.g., internal transfers). I then wrapped the core model in a single container orchestrated by Kubernetes, using sidecar Prometheus metrics to monitor feature drift. This kept inference latency under 120 ms and avoided the overhead of coordinating multiple agents.

**Result** – The refined pipeline cut false positives by 35% while maintaining a 99.2% true‑positive rate, reducing manual review hours from 1500 to 950 per week. I learned that disciplined context engineering—focusing on relevant feature windows and embedding knowledge—often trumps the temptation to fragment logic into many agents, preserving both performance and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
