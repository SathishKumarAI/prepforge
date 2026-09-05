---
qid: ing_5acb396d7b__eli5__local
question: An agent needs to iterate on code - run builds, tests, lints - without disturbing
  what the user sees in their editor. How do you architect that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 271
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:00:22-05:00'
sources: []
---

Imagine your editor is a quiet café where a customer (the user) sits and drinks coffee while reading a book. The AI “bartender” needs to keep the coffee brewing and test the latte without spilling or disturbing the customer’s table.

1. **Separate Kitchen (Build Server)** – Put all code‑running steps in a different room that never touches the café floor.  
2. **Tasting Station (Isolated Runner)** – The bartender prepares a small sample of the latte, runs tests, and lints it there. If something goes wrong, only the kitchen is affected.  
3. **Notification Table (Status Updates)** – When the sample passes, the bartender sends a polite note to the customer’s phone or a status bar in the editor: “All good!” If it fails, a quick message appears without changing what the user sees on their screen.

By keeping the heavy lifting off‑site and only communicating results, the AI can iterate endlessly while the user’s editor remains unchanged.  

*Key terms:* **Build** – compiling code into an executable; **Test** – automated checks that verify functionality; **Lint** – a tool that flags style or potential error issues in code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
