---
qid: ing_006531f6a0__faang__local
question: 'Explain: do I know the address changed I — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 448
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:45:14-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of *Martin Fowler’s “The Many Meanings of Event‑Driven Architecture”* (GOTO 2017) and how it helps us understand when an event is “changed”. I’ll assume you want: 1) the core idea behind his taxonomy, 2) why events can be mutable, and 3) practical implications for a system designer.

**Approach**  
1. Summarize Fowler’s three axes (source → sink, temporal vs. causal, and semantics).  
2. Highlight the “event‑changed” nuance: an event may be re‑published or enriched after its origin.  
3. Map this to real patterns (CQRS, Saga, Event Sourcing).  

**Depth**  
Fowler argues that *events are not immutable snapshots*. An event’s meaning can shift as downstream consumers evolve or business rules change. He formalises this via a “semantic axis” where an event may be **transformed**, **augmented**, or **re‑emitted** to reflect new context (e.g., adding a calculated field). This contrasts with strict Event Sourcing, which treats events as immutable. The key takeaway: design your event bus and schemas with *versioning* and *backwards compatibility* in mind; otherwise a “changed” event will break consumers that expect the original shape.

**Edge Cases**  
- If an event is altered after being stored (e.g., in Kafka), replay guarantees are lost.  
- Multiple services might independently transform the same event, leading to divergence.  
- Versioned schemas must be tested against all consumer pipelines.

**Optimize & Communicate**  
Recommend using schema registries (Avro/Protobuf) with strict evolution rules and adopting *event versioning* rather than mutation. Explain that this keeps your architecture resilient while allowing business flexibility—exactly what Fowler’s talk emphasizes.  

---  

*(≈210 words)*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
