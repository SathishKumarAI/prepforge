---
qid: ing_11a1b9e83f__eli5__local
question: 'Explain: Calling service methods — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 307
total_tokens: 468
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:03:38-05:00'
sources: []
---

Imagine you’re in a busy coffee shop that offers a *menu* (the “service”) with different drinks—espresso, latte, cappuccino. Each drink is like a **method** you can order. The shop’s *barista system* is the **gRPC server**, and your phone app is the **client**.

1. **Define the menu** – In Go you write a `.proto` file (like a written menu) listing each drink (method) and what ingredients (parameters) it needs.  
2. **Generate baristas** – The `protoc` compiler turns that menu into Go code: stubs for the client to ask for drinks, and server handlers that actually make them.  
3. **Serve the shop** – Your Go program starts a gRPC server listening on a port (the shop’s open window).  
4. **Order a drink** – The client creates a channel (a phone line) to that port and calls `MakeLatte(ctx, &Request{Size: "Large"})`.  
5. **Barista prepares it** – The server receives the call, runs your handler logic, and returns a response (`Response{CupID: 42}`).  

Just like ordering at a coffee shop, you send a request over a network connection, the server does work, and you get back a result—all handled automatically by gRPC’s generated code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
