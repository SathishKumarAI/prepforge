---
qid: ing_580122d47b__eli5__local
question: 'Explain: Creating the client — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 267
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:56:05-05:00'
sources: []
---

Think of a **client** as a friendly waiter at a restaurant that asks the kitchen (the server) for food.  
In Go, you write this waiter’s script so it knows how to talk to the kitchen over a special language called **gRPC**.

1. **Install gRPC tools** – like giving the waiter a menu and a phone line.  
2. **Generate client code from a .proto file** – the menu tells the waiter what dishes (methods) are available and what ingredients (messages) look like.  
3. **Create a connection** (`grpc.Dial`) – the waiter picks up the phone to the kitchen’s address.  
4. **Build a client stub** (`NewYourServiceClient(conn)`) – this is the waiter’s personal notebook with all menu items written out.  
5. **Call a method** (`client.DoSomething(ctx, req)`) – the waiter writes an order (request), sends it over the line, and waits for the kitchen’s reply (response).  

That’s all: a Go client that talks to a gRPC server, just like a waiter ordering food from a kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
