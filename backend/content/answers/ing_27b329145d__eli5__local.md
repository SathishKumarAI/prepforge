---
qid: ing_27b329145d__eli5__local
question: 'Explain: Example Workflow — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 203
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:38:40-05:00'
sources: []
---

Imagine you’re at a big party where everyone has a name tag but no idea who’s in which room. **Service discovery** is like having a smart assistant that instantly tells you, “Hey, the bartender (the coffee‑making service) is over there, and the Wi‑Fi router (the internet connection service) is on the left.”  

In a machine‑learning system, many tiny programs—called *services*—do different jobs: one loads data, another trains a model, another serves predictions. They’re spread across servers that can change or restart. Service discovery lets each program ask “Where can I find the data loader?” and get a current address without hard‑coding it. It keeps the system flexible, fault‑tolerant, and easy to scale because services learn where others live on the fly, just like the party assistant guides guests to the right people.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
