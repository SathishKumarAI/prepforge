---
qid: ing_c47e8ae283__eli5__local
question: 'Explain: HTTP-based MCP for new servers; sandboxed STDIO for legacy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 240
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:47:28-05:00'
sources: []
---

Think of a **new server** like a brand‑new smart phone that talks to the internet with modern apps (HTTP). Its “management control protocol” is just a simple chat over the web: you send a text message (a request) and the phone replies in kind. That’s the HTTP‑based MCP – it keeps things tidy, secure, and easy for anyone who knows how to use the web.

A **legacy server** is more like an old rotary phone that can only handle plain voice calls (STDIO). To keep it safe, we put a small “sandbox” around it—a protective bubble that lets the call go through but stops any harmful noise from leaking out. Inside this sandbox the server still speaks its simple language (standard input/output), but everything is isolated so it can’t interfere with newer systems or be attacked.

So, new servers talk over the web; old ones stay in their safe voice‑call mode, each wrapped in a shield that keeps them secure and compatible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
