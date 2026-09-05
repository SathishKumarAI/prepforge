---
qid: ing_71fc27b347__star__local
question: 'Explain: How to build your first AI agent — How Do AI Agents Work - by
  Neo Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 324
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:15:18-05:00'
sources: []
---

**Situation:** I was working on a university capstone where my team needed an automated customer support bot for a local e‑commerce startup that had just launched its API but no live chat system. The client wanted the bot to handle FAQs and simple order inquiries, and they gave us a tight two‑week deadline.

**Task:** My role was to design and deploy the first AI agent that could understand user intent from natural language, fetch data from their REST endpoints, and respond in real time, all while keeping latency under 300 ms.

**Action:** I started by building a lightweight intent classifier with spaCy and a small BERT fine‑tuned on the company’s FAQ corpus. For state management, I used a finite‑state machine that tracked conversation context. The agent was wrapped in a Flask microservice, deployed to AWS Lambda behind an API Gateway, and connected to the e‑commerce backend via secure OAuth tokens. I added a fallback rule engine for edge cases and logged every interaction into DynamoDB for later analysis.

**Result:** Within 10 days we launched the bot; it handled over 1,200 queries with a 92 % accuracy rate and reduced average response time from 2.5 s to 0.28 s. The startup reported a 15 % drop in support tickets and I learned how to balance NLP precision with deployment constraints in a real‑world setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
