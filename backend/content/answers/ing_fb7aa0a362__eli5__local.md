---
qid: ing_fb7aa0a362__eli5__local
question: Why do LLM products stream responses, and how does streaming actually work
  over HTTP?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 255
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:13:15-05:00'
sources: []
---

Think of a large‑language model (LLM) like a chef who writes a long recipe.  
When you order the dish, the kitchen can hand you the finished plate all at once, or it can start serving spoonfuls as soon as each part is ready.  

**Why stream?** The “dish” (the answer) can be huge and slow to finish. Sending it piece by piece lets you see the first words almost instantly, improving user experience and saving bandwidth for parts that may never be read.

**How does streaming work over HTTP?**  
1. Your browser asks for a response with a special header: `Accept‑Encoding: chunked`.  
2. The server opens the connection and begins sending *chunks*—small blocks of text—each preceded by its size in hex.  
3. As each chunk arrives, the browser renders it; the connection stays open until the last chunk says “0” (end).  

So streaming is just a fast, efficient way to deliver an answer gradually, like getting your meal spoonful by spoonful while the kitchen keeps cooking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
