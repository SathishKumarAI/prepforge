---
qid: ing_3f4cd3c2d3__eli5__local
question: 'Explain: 2.4 System Design: Design an API for an LLM with a Safety Layer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 272
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:16:11-05:00'
sources: []
---

Imagine you’re building a smart kitchen robot that can cook any recipe you ask it to, but you also want a “chef’s watch” that stops it from using dangerous ingredients or giving unsafe instructions.  
**API (Application Programming Interface)** is the set of menus and buttons the robot exposes so other software can tell it what to do—just like a remote control lets you pick dishes.  
**LLM (Large Language Model)** is the brain inside the robot that understands your recipe requests and writes the cooking steps in natural language.  
**Safety Layer** is a guard that checks every instruction before the robot acts: it scans for profanity, disallowed content, or instructions that could harm people or property—like a fire alarm that triggers if the oven temperature rises too high.

When designing the API:

1. **Input endpoint** – accepts a recipe prompt (text) and optional safety flags.  
2. **Safety check** – runs the text through filters; if it fails, returns an error message instead of cooking.  
3. **Output endpoint** – gives back safe, cooked‑recipe instructions.

This keeps the robot helpful while ensuring it never serves you a dangerous dish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
