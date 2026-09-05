---
qid: ing_f9ecbbb640__eli5__local
question: 'Explain: Non-Functional Requirements (What Are the Constraints?)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 227
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:10:29-05:00'
sources: []
---

Think of building a smart assistant that learns to recognize your voice and answer questions. The *non‑functional* part is everything that doesn’t say what it should do, but how well it must do it. It’s like the rules for a race car: speed (how fast it answers), safety (never crashing or giving wrong info), reliability (working all day long), and cost (not too expensive to run). In machine learning these constraints might include:

- **Latency** – predictions should finish within 200 ms so you feel an instant reply.  
- **Accuracy** – at least 95 % of the time, it must pick the right answer.  
- **Scalability** – handle 10,000 users simultaneously without slowdown.  
- **Privacy** – keep user data on device and never share it.

These are the “what‑must‑be” rules that guide design, just as a race car’s regulations shape its engine, brakes, and tires.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
