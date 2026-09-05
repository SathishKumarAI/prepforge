---
qid: ing_72f2556e2d__eli5__local
question: 'Explain: AutoGLM and CogAgent operate real GUIs - a phone or a browser
  - from screenshots, over tens of steps. Design the agent: perception, action space,
  and error recovery for a 50-step task.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 325
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:38:42-05:00'
sources: []
---

Imagine you’re a detective who can only see a crime scene through photos taken by a camera that keeps moving around the room. The detective’s job is to find a hidden key and open a locked door, but she must decide where to move next, what tool to use, and how to fix a mistake if she steps into a trap.

**Perception**  
The agent looks at each snapshot (a screenshot) and extracts two things: the layout of buttons and text (“what is here”) and the meaning behind them (“what do they do”). It’s like reading a map that shows both streets and traffic signs.

**Action space**  
At every step the agent can choose one of three simple moves: click, type, or scroll. Each move is like a finger touch on a phone or mouse click in a browser. The action also includes where to apply it—like pointing at a particular button in the image.

**Error recovery for 50 steps**  
After each move the agent checks the new screenshot. If something went wrong (the screen didn’t change as expected, or an error pops up), the agent rolls back: it undoes the last action and tries another path. Think of it as a safety net that lets the detective keep going even if she stumbles.

With these three parts—seeing the scene, deciding on a simple touch, and bouncing back from mistakes—the agent can reliably navigate long tasks, just like a well‑trained detective solving a 50‑step mystery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
