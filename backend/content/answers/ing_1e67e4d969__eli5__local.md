---
qid: ing_1e67e4d969__eli5__local
question: 'Explain: IX. Disposability — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 216
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:24:32-05:00'
sources: []
---

**Disposability (Factor IX)**  
Imagine a kitchen that can be wiped clean and set up again in five minutes, even if the chef leaves abruptly. In software, *disposability* means you can start or stop an application instant‑on—think of a container that boots in seconds and shuts down cleanly when it’s no longer needed.

Why?  
- **Fast scaling**: If traffic spikes, new instances are spun up instantly; if demand drops, they’re torn down without lingering.  
- **Fault tolerance**: A crashed process can be replaced by a fresh copy with no manual cleanup.  

*Disposability* is essential for machine‑learning services that run batch jobs or serve predictions on demand—each job starts, finishes, and disappears, leaving no residue to slow the next one. It’s like a pop‑up restaurant: open quickly, close cleanly, ready for the next crowd.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
