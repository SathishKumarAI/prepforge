---
qid: ing_abe4ab22e9__star__local
question: 'Explain: Build: Native support for A2A in the Agent Development Kit (ADK)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 383
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:16:16-05:00'
sources: []
---

**Situation** – At my previous company we were launching a new Agent Development Kit (ADK) that was supposed to let third‑party vendors embed conversational AI into our platform. The product spec called for *Agent‑to‑Agent* (A2A) communication, but the original ADK only supported direct user queries; the SDK had no built‑in messaging layer between agents.

**Task** – I was tasked with designing and implementing native A2A support so that agents could call each other’s services securely, without developers writing custom adapters. The goal was to finish before the Q3 release deadline and keep latency below 150 ms per hop.

**Action** – First, I mapped out the communication patterns: request/response, event streams, and fallback routing. I extended the ADK core with a lightweight message broker built on gRPC‑streaming, adding role‑based access control and JSON‑schema validation for payloads. To keep latency low, I introduced an in‑process “agent registry” that cached service endpoints and used HTTP/2 multiplexing. I also wrote comprehensive integration tests using pytest‑asyncio, covering 95 % of the new API surface, and set up CI/CD pipelines to run them on every PR.

**Result** – The new A2A module was shipped two weeks ahead of schedule. After launch, we saw a 40 % reduction in vendor development time and a 25 % increase in end‑user session length because agents could orchestrate complex workflows seamlessly. I learned that designing for composability early saves downstream effort and that rigorous testing is essential when adding cross‑service communication to an SDK.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
