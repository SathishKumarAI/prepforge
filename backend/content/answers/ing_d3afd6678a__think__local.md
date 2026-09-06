---
qid: ing_d3afd6678a__think__local
question: 'Explain: Step 8: Sending the Notification — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 467
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:55:33-05:00'
sources: []
---

**1. Clarify scope & constraints**  
- Identify what “notification” means (email, push, SMS, in‑app).  
- Ask about scale: how many users per second? Peak load?  
- Determine latency tolerance and reliability expectations (at least once vs exactly once).  
- Note any regulatory or privacy constraints (GDPR, opt‑out).

**2. Adopt a mental model**  
- Think of the notification flow as an *event‑driven pipeline*: user action → event → processing → delivery.  
- Map to classic patterns: **Producer–Consumer**, **Pub/Sub**, **Queueing**, and **Retry/Dead‑Letter** mechanisms.  
- Separate concerns: *What* is notified vs *how* it’s sent.

**3. Reason step‑by‑step**  
1. Capture event → write to a durable log (Kafka, Pulsar).  
2. Consume events in parallel workers; each worker resolves delivery channel(s).  
3. For each channel, dispatch via an appropriate provider API (SMTP, FCM, Twilio).  
4. Record success/failure; on failure, schedule exponential back‑off retries.  
5. Persist final status to a “notification state” store for audit and analytics.  
6. Expose metrics/alerts for throughput, error rates, latency.

**4. Avoid common traps**  
- Don’t hard‑code provider limits; enforce rate‑limiting per API key.  
- Beware of *thundering herd*: don’t let all workers hit the same downstream service simultaneously.  
- Skip “fire‑and‑forget” without a retry strategy; otherwise you lose messages.  
- Ignore message ordering when it matters (e.g., multi‑step workflows).

**5. Sanity‑check & communicate**  
- Verify that the design meets latency, throughput, and durability goals.  
- Explain each layer’s purpose: event log → worker pool → provider adapter → state store.  
- Highlight trade‑offs (e.g., using a simple queue vs a full stream processing system).  
- End with how you’d monitor, scale, and iterate on the service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
