---
qid: ing_588becf856__eli5__local
question: 'Explain: Futures and Promises Pattern — Top 6 Multithreading Design Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 203
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:56:44-05:00'
sources: []
---

Think of a **Future** as a “ticket” you buy for a concert that will happen later, and a **Promise** as the ticket‑seller who promises to deliver that ticket once the show starts.  

When your program needs a big calculation, it asks a worker thread to do it and immediately receives a Future—just like getting the ticket. The main thread can keep doing other things (buy snacks, chat with friends). Later, when the worker finishes, it “fulfills” the Promise by putting the result into the Future. Your program can then ask the Future for the answer; if the calculation isn’t done yet, it simply waits, just as you wait at the gate until your ticket arrives.  

This pattern lets many threads share work safely without constantly checking each other’s status, keeping code simple and avoiding messy “busy‑waiting.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
