---
qid: ing_10254ef858__fp__local
question: 'Explain: traps for you early on that you — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 444
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:39:43-05:00'
sources: []
---

**Why the “Event‑Driven” label is a trap**

At its core an event‑driven system is *any* software that reacts to inputs, not just to explicit user actions.  
From this simple observation follows a chain of implications:

1. **“Events” ≠ “Messages.”**  
   In practice developers conflate the two: they assume every external stimulus is a message on a queue.  
2. **“Event” ≠ “State Change.”**  
   A state change can be silent; an event can be a transient notification that does not alter state at all.

Because of (1) and (2), teams fall into the following pitfalls:

| Trap | Why it arises | Deeper principle |
|------|---------------|------------------|
| Treating all I/O as publish/subscribe | It feels “modern” to wrap every socket or file read in a message bus. | **Information bottleneck** – you’re forcing unrelated data through a single channel, inflating latency and coupling. |
| Over‑use of “event sourcing” | Every change is logged for auditability; developers think it’s always needed. | **Causal sufficiency** – only events that affect future decisions should be stored. |
| Ignoring *contextual boundaries* | The same event type is reused across domains, leading to ambiguity. | **Compositionality** – a well‑scoped event must be self‑contained and unambiguous; otherwise the system’s semantics become undecidable. |

A non‑obvious insight: **the “event” that matters is not what *happens*, but what the receiving component *needs* to know to make its next decision**.  
If a consumer can compute a required state from its local data, exposing an event for it is unnecessary and introduces noise.  
Thus, true event‑driven design starts with *decision points*, not with arbitrary I/O, ensuring that the architecture remains lean, testable, and aligned with information‑theoretic efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
