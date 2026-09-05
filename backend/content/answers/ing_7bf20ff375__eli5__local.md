---
qid: ing_7bf20ff375__eli5__local
question: 'Explain: Browser vs Desktop Automation — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 217
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:53:14-05:00'
sources: []
---

Think of a computer as a giant office building.  
A **desktop automation agent** is like an employee who walks inside, uses the desk tools (Word, Excel, files) directly—clicking, typing, and moving between programs on that machine. It works only where it’s physically present.

A **browser automation agent** is more like a remote‑control robot that sits outside the building but can open doors to specific rooms (web pages). It talks to those rooms through a special language called HTTP: “Show me this page, click that link, fill out this form.” The robot never needs to be inside; it can work from anywhere with internet access.

Both agents follow scripts you give them. Desktop agents use the computer’s own software APIs (like Windows messages), while browser agents send web‑specific commands over the network. That’s why a desktop agent can do anything in its environment, but a browser agent is limited to what the website exposes through its web interface.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
