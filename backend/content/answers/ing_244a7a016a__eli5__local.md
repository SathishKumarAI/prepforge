---
qid: ing_244a7a016a__eli5__local
question: 'Explain: Semaphore — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 236
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:33:56-05:00'
sources: []
---

Imagine two chefs (processes) sharing a single pan in a kitchen (Linux). They can’t both cook the same dish at once, or the food will burn. A **semaphore** is like a small note that sits on the counter: it says “1 chef may use the pan right now.” When Chef A wants to start cooking, she checks the note. If it reads 1, she flips it to 0 (takes the pan) and begins; if it reads 0, she must wait until Chef B finishes and flips it back to 1.

In Linux, a semaphore is a lightweight counter stored in shared memory. Processes perform two basic operations:  
- **wait (P)**: decrement the counter; if the result would be negative, the process blocks until another releases the resource.  
- **signal (V)**: increment the counter and wake a blocked process.

Thus, semaphores let processes coordinate access to limited resources—just like chefs sharing one pan—without stepping on each other’s toes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
