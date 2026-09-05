---
qid: ing_9d0cfb8342__eli5__local
question: 'Explain: Why not a Selenium farm — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 274
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:46:22-05:00'
sources: []
---

Imagine you’re building a smart assistant that learns to do tasks on a PC—typing emails, filling forms, opening apps—just like a child learning to play with toys. A “Selenium farm” is a big collection of virtual browsers that can click and type, but it’s designed for testing web pages, not for teaching a robot how to use the whole computer.

**Why it’s not ideal:**  
1. **Limited scope** – Selenium only knows how to control web elements (buttons, links). It can’t interact with desktop programs, file dialogs, or keyboard shortcuts that real users rely on.  
2. **Fragile scripts** – Web pages change often; a test script breaks every time a site redesigns its layout, so the assistant would need constant re‑wiring.  
3. **No learning signal** – Selenium follows prewritten steps; it can’t “understand” what’s happening or adapt based on feedback like a real agent.

A better approach is to use tools that capture and replay *every* user action (mouse, keyboard, window focus) across the whole OS, allowing the AI to learn from true interactions rather than just web clicks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
