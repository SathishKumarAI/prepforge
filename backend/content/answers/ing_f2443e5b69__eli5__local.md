---
qid: ing_f2443e5b69__eli5__local
question: 'Explain: Examples — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 255
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:58:03-05:00'
sources: []
---

**Pattern: Server‑Side Service Discovery (in a machine‑learning system)**  

Imagine you’re at a large airport where each airline has its own gate. Instead of walking around looking for the right gate, you ask a helpful kiosk that instantly tells you which gate serves your flight and how to get there. In software, “service discovery” is that kiosk. A **server‑side service discovery** pattern lets one part of a machine‑learning pipeline (say, a model‑training job) find and connect to other parts—like data storage, preprocessing microservices, or inference endpoints—without hard‑coding addresses.  

When the training job starts, it queries a central registry (the kiosk). The registry lists all available services, their network locations, and health status. The job receives this list, picks the right service (e.g., a GPU cluster), and connects automatically. If a service moves or scales up/down, the registry updates, and future jobs always find the current location.  

This pattern keeps the system flexible, reduces configuration errors, and lets you add or replace services without touching every training script.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
