---
qid: ing_8ead421a8e__eli5__local
question: 'Explain: Functional Requirements: — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 249
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:22:56-05:00'
sources: []
---

Imagine you’re running a big kitchen with many chefs (computers) and a menu of dishes (jobs). A **distributed job scheduler** is like the head chef’s calendar that tells each cook when to start which dish so no one stalls or overworks.

1. **Worklist** – Think of it as a pantry list: all pending recipes are stored in a shared place everyone can see.
2. **Workers** – Each chef pulls a recipe from the pantry, cooks it, and then returns the finished dish to the fridge (results storage).
3. **Coordination** – A simple “first‑come, first‑served” rule prevents two chefs from grabbing the same recipe at once. If one fails, another picks up where it left off.
4. **Scalability** – Adding more chefs automatically lets the kitchen handle more dishes because each new worker just reads the shared pantry.

The scheduler’s job is to keep the pantry organized, hand out recipes fairly, and collect finished dishes quickly—so the kitchen runs smoothly even as orders grow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
