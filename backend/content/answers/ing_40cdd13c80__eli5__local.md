---
qid: ing_40cdd13c80__eli5__local
question: 'Explain: System Design Mock Interview: Design a Vending Machine'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 244
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:18:54-05:00'
sources: []
---

Imagine you’re building a smart vending machine that knows exactly what snack people want and when they’ll order it—just like a helpful friend who remembers your favorite coffee and orders it before you even think of it.

**The “friend” has four parts:**

1. **Sensors (the ears)** – The machine reads the touch screen, camera, or card swipe to hear what the customer wants.
2. **Memory (the brain)** – It keeps a quick‑look list of all snacks and how many are left.
3. **Planner (the heart)** – When someone orders, it decides which snack to pull out and whether there’s enough stock.
4. **Actuators (the hands)** – The motors actually slide the chosen item into the tray.

In a design interview, you’d explain these parts, how they talk to each other over simple “messages” (like button presses or sensor signals), and what happens if something goes wrong—just as you would explain a vending machine’s inner workings to a curious friend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
