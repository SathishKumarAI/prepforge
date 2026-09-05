---
qid: ing_b8261a0483__eli5__local
question: 'What is Service Discovery? — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 209
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:29:18-05:00'
sources: []
---

**Service Discovery in a Distributed Machine‑Learning System**

Imagine a café where each barista (service) can make coffee, tea, or smoothies. When you walk in, the café’s “menu” (a discovery service) tells you which baristas are available and what drinks they can prepare right now. In the same way, a machine‑learning platform runs many independent services—data loaders, model trainers, inference engines, monitoring tools—and each one registers itself with a central directory. When another component needs to call one of these services, it queries the directory instead of remembering hard‑coded addresses or ports. The discovery service returns the current location (IP and port) of the requested service, allowing components to find each other even as new instances start, old ones shut down, or load changes. This dynamic lookup keeps the system flexible and fault‑tolerant without manual configuration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
