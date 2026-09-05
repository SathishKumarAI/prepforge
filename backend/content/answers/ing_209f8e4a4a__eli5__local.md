---
qid: ing_209f8e4a4a__eli5__local
question: 'Explain: Signal — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 232
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:28:08-05:00'
sources: []
---

Think of a Linux computer as a big office building where each program is an employee working at their desk (a *process*).  
Sometimes one employee needs to tell another something urgent—like “stop what you’re doing” or “you have new data”—but they can’t sit next to each other. They use **signals**, the office’s whisper system, to send short messages that don’t need a full conversation.

A **signal** is just a tiny code (like a single word) that the operating system delivers from one process to another. The recipient can choose to ignore it, handle it specially, or terminate. It’s similar to knocking on someone’s door: quick, no paperwork, and the person decides what to do when they see the knock.

Because signals are lightweight—no data copying, just a number—the office can keep many employees running smoothly without waiting for long chats. In short, Linux signals let processes talk fast and simple, like polite office whispers that trigger immediate actions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
