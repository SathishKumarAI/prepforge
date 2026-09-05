---
qid: ing_3a3f80e9a6__eli5__local
question: 'Explain: HTTP/2 — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 262
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:08:29-05:00'
sources: []
---

Imagine ordering food at a busy restaurant where each dish is an “HTTP request.” In the old version (HTTP/1.1), you could only ask for one dish at a time: you place a single order, wait for it to be cooked and delivered, then place another. If you wanted several dishes, you’d have to queue them behind each other, even if some were ready earlier.

**HTTP/2 is like a smart kitchen that can cook many dishes simultaneously and deliver them in any order.**  
- **Multiplexing**: It opens one “table” (connection) but lets the chef send several orders at once, keeping the line short.  
- **Header compression**: Instead of repeating the menu every time, it remembers common ingredients so each order is shorter.  
- **Server push**: If you order a main course, the kitchen may pre‑send a side dish you’ll almost certainly want.

In system design, using HTTP/2 reduces latency and improves bandwidth usage, especially for mobile apps or microservices that need many quick requests. It’s the same friendly restaurant but with a more efficient, shared table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
