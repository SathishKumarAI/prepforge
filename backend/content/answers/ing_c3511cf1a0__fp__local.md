---
qid: ing_c3511cf1a0__fp__local
question: 'Explain: Webhooks — Polling vs Webhooks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 438
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:57:22-05:00'
sources: []
---

### Why “poll or wait?” is a problem

When an application needs to know *when* something changes (e.g., a new order arrives), it must decide how to receive that information.

1. **Polling**: The client repeatedly asks the server, “any updates?”  
   - *Cost*: Every poll incurs network latency, bandwidth, and CPU on both sides, even if nothing changed.  
   - *Latency*: The delay between an event and its detection equals the polling interval (plus round‑trip time).  

2. **Webhooks**: The server pushes a notification to a pre‑registered URL as soon as the event occurs.  
   - *Cost*: Only one network request is sent when an event actually happens; idle time consumes nothing.  
   - *Latency*: Near‑zero, bounded by processing time on the receiving end.

From an **optimization** standpoint, polling is a *fixed‑rate sampling* problem: you pay for samples regardless of their value. The optimal strategy (in terms of expected cost per unit information) would adapt the interval to event frequency—yet implementing such adaptive polling is error‑prone and fragile. Webhooks move the decision to the source: the server decides when to send, ensuring *zero wasted effort*.

#### Non‑obvious insight
A webhook is essentially a **state‑change channel** that turns an *event‑driven* system into a *message‑oriented* one. Because the server holds the state, it can bundle multiple changes into a single payload (batching), or include metadata (timestamps, signatures) that clients would otherwise have to request separately. This reduces not just latency but also **semantic overhead**—the client learns *what* changed, not just that something did.

---

> **Bottom line:** Polling is an inefficient “guess‑and‑wait” strategy; webhooks are a principled “push‑when‑necessary” solution that aligns resource usage with information value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
