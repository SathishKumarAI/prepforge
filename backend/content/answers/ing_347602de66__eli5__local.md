---
qid: ing_347602de66__eli5__local
question: 'Explain: Creating a stub — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 283
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:58:55-05:00'
sources: []
---

Imagine you’re writing a letter to a friend who lives far away, but you can only talk through a messenger service that knows exactly how to deliver your words and receive replies. In gRPC, the **stub** is like that messenger’s written note: it tells the service “Hey, here’s my request” in a format the server understands, then waits for the reply.

In Go, creating a stub starts with a *proto* file that describes the conversation—what messages you can send and what replies look like. You run `protoc` (the protocol compiler) with a Go plugin; it reads the proto and writes two things: a **client interface** (your stub) and a **server skeleton**.

You import the generated package, create a gRPC client connection (`grpc.Dial`), and then call methods on the stub just as if they were local functions. The stub packs your Go struct into binary protobuf data, sends it over the network, waits for the server’s response, unpacks it back into a Go struct, and hands it to you.

So, a stub is simply an auto‑generated helper that translates between Go code and the gRPC wire format, letting you call remote services with familiar function calls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
