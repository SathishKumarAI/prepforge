---
qid: ing_984bfb4dce__eli5__local
question: What is a health check? — Grokking-System-Design-Interview-Quizzes/Quizzes/Load
  Balancer.org at master \u00b7 ema2159/Grokking-System-Design-Interview-Quizzes \u00b7
  GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 218
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:39:05-05:00'
sources: []
---

In machine‑learning production, a **health check** is like the doctor’s quick pulse test for your model service. Imagine you have several identical doctors (model servers) standing by to see patients (incoming requests). Every few seconds the system sends a tiny “how are you?” question—maybe a simple prediction on a known input—and expects a sensible answer back. If a doctor can’t reply correctly or takes too long, the system marks that doctor as sick and stops sending it any more patients until it recovers.

**Key terms**

- **Health check** – a routine probe that asks a service to respond quickly and accurately.  
- **Load balancer** – the receptionist that distributes patient calls among the doctors based on their health status.

By constantly monitoring these pulse checks, you keep your model deployment humming smoothly—only healthy models get traffic, while faulty ones are isolated for repair or replacement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
