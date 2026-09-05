---
qid: ing_4ed935a2b2__eli5__local
question: What Does RPC do? — Remote Procedure Call (RPC) in Operating System - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 231
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:42:04-05:00'
sources: []
---

Think of a remote procedure call (RPC) like ordering pizza through an app.  
The *client* (your phone) wants something—say “make me a pepperoni pizza.”  
It sends a message to the *server* (the pizzeria’s kitchen), telling it exactly what to do and giving any details needed (size, toppings).  
The server receives that request, runs its own internal code (“prepare dough, add sauce…”) and then returns a response—either the finished pizza or a status like “out of pepperoni.”  

In computing, the client is one program, the server is another, possibly on a different computer. RPC lets the client invoke a function (the “procedure”) on the server as if it were local: you write `orderPizza(size, toppings)` and the system handles all the network talk behind the scenes.  
So RPC is simply a way to call remote code with minimal effort, just like ordering food from a distance but receiving the result as if it happened right next door.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
