---
qid: ing_c4855229bf__eli5__local
question: How Does Long Polling Work? — Long Polling vs WebSockets - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 216
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:47:27-05:00'
sources: []
---

Think of your web page as a phone call to a busy restaurant kitchen that only sends you a dish when it’s ready.  
**Long polling** is like holding the line and waiting for the kitchen to finish preparing a meal before they call you back. You send a request (“Hey, I’d like my order”), then your browser keeps the connection open while the server waits. Once the requested data (the dish) is ready, the server replies immediately, closing that single “call.” Your browser receives it and can instantly ask for more if needed.

With **WebSockets**, instead of a new call every time, you’d set up a dedicated walkie‑talk channel: both sides keep an open line and can speak whenever they want. Long polling uses ordinary HTTP requests—each one is a separate “call” that stays alive until data arrives or a timeout occurs. It’s simple to implement on any server, but it means more overhead because each update requires a new request/response pair.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
