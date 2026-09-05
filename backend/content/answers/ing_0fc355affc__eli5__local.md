---
qid: ing_0fc355affc__eli5__local
question: 'Explain: Walk me through the taxonomy of evaluation methods for LLM systems
  and when you''d use each.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 297
total_tokens: 464
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:00:28-05:00'
sources: []
---

Imagine a large library that can write stories, answer questions, or translate languages. To know how good it is, we test it in three ways—just like checking a new car with a dashboard, a road trip, and a race.

1. **Intrinsic tests (dashboard)** – We give the model a set of standard puzzles (e.g., “complete the sentence”) and score its answers automatically. It’s quick, repeatable, and tells us if the engine runs correctly. Use it when you’re building or fine‑tuning a model and need fast feedback.

2. **Extrinsic tests (road trip)** – We let the model perform real tasks that people care about—helping doctors draft notes or powering chatbots for customers—and measure how well users finish their jobs. It shows practical usefulness. Use it when you’re deploying the system in the wild and want to see its impact.

3. **Human‑in‑the‑loop tests (race)** – Experts read a sample of outputs, judge quality, and give ratings or rankings. This captures nuance that numbers miss, like creativity or safety. Use it for high‑stakes applications or when you need trustworthy judgments before release.

By rotating through these “dashboard,” “road trip,” and “race” tests, you get a full picture of an LLM’s strengths and weaknesses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
