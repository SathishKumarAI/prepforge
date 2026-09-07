---
qid: ing_24b7e73a6c__faang__local
question: 'Explain: I no longer got remote Network calls — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 470
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:09:43-05:00'
sources: []
---

**Clarify**  
The question asks: *Why would an application “no longer get remote network calls” after adopting an Event‑Driven Architecture (EDA) as described by Martin Fowler?*  
Key assumptions to confirm:  
1. The system switched from synchronous RPC/REST calls to asynchronous event buses (Kafka, RabbitMQ, etc.).  
2. Network endpoints still exist but are now decoupled.  

**Approach**  
1. Map the old call flow (client → service A → B → …).  
2. Map the new EDA flow (service emits events → broker → subscribers).  
3. Identify where the “remote calls” disappeared.  

**Depth**  
- In a pure event‑driven model, services **publish** state changes or commands; they do **not** wait for a response. The consumer of an event processes it independently and may emit its own events. Thus, the direct network hop that used to happen in RPC disappears.  
- If a service was previously acting as both *caller* and *callee*, after EDA it only *listens* for relevant events; any missing listener will break the chain, making it appear as if remote calls never happened.  
- The broker (Kafka, Pulsar) is now the sole network hop; if its connectivity drops or topics are mis‑configured, downstream services won’t receive events → “no remote calls.”  

**Edge Cases**  
- **Missing consumer**: event produced but no subscriber; traffic stops.  
- **Back‑pressure / slow consumers**: broker stalls, making producers think the call failed.  
- **Schema mismatches**: deserialization errors silently drop messages.  

**Optimize & Communicate**  
Explain that EDA trades synchronous latency for eventual consistency and decoupling. To mitigate “no calls”: implement health checks on brokers, use dead‑letter queues, versioned schemas, and circuit breakers around event producers. Summarize the rationale: remote calls disappear because they are replaced by broker‑mediated events; proper monitoring restores visibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
