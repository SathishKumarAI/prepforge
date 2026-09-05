---
qid: ing_590bcc90c7__star__local
question: 'Explain: Unexpected Dialogs — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 342
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:25:47-05:00'
sources: []
---

**Situation**  
During a quarterly rollout of our AI‑powered virtual assistant for remote desktop support, the bot started failing on about 12 % of tickets because it hit unexpected “Do you want to save changes?” dialogs from legacy Windows applications.

**Task**  
I had to make the agent robust enough to detect and handle any modal dialog that could interrupt its scripted workflow without slowing down response times.

**Action**  
First, I instrumented the bot with UI‑Automation Toolkit (UIA) to listen for Window Message events. I wrote a generic “dialog handler” module that captures the dialog title, button list, and any input fields. Using Python’s `pywinauto`, I scripted a fallback routine: if the dialog matches a known pattern, click the default button; otherwise log the event and retry after a short back‑off. To avoid false positives, I added a confidence score based on OCR text matching and window class names. Finally, I integrated this into our CI pipeline so each build runs a sandboxed test against a catalog of legacy apps.

**Result**  
The bot’s success rate jumped from 88 % to 99.7 %, cutting average ticket resolution time by 23 %. I learned that designing agents with a modular dialog‑handling layer is essential for scaling automation across heterogeneous software stacks, and that lightweight event listeners can keep latency low while providing resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
