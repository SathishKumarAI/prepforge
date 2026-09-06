---
qid: ing_636ef621c1__fp__local
question: 'Explain: Public APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 408
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:36:29-05:00'
sources: []
---

### Why a “public API” exists

In any system we want **decoupled components**: the core logic should not be rewritten whenever a new client or platform arrives.  
The *fundamental problem* is that two software parts must exchange data and behaviour without knowing each other’s internal representation.  This is an instance of **information theory**—we need a minimal, well‑defined interface that transmits only what the caller can use.

### What the interface must provide

1. **Abstraction layer** – hide storage format, business rules, and evolution of underlying models.  
2. **Idempotent operations** – repeated calls yield the same result (a property needed for retry logic).  
3. **Statelessness or session tokenisation** – each request contains all information it needs so that any server instance can process it (horizontal scaling).  
4. **Versioning** – because new features change semantics; version numbers encode a contract in the *semantic‑version* sense of *information geometry*.

### Public API as an optimisation problem

Designing an endpoint is essentially selecting a set of *features* that maximise utility for clients while minimising bandwidth and complexity—an instance of **rate‑distortion theory**.  The API designer chooses which fields to expose, how to encode them (JSON, Protobuf), and what operations to bundle into a single call.

### A non‑obvious insight

Most developers treat an endpoint as a “do this” command, but it is actually a *probabilistic model* of the system’s state.  The response distribution is determined by the current data and any hidden variables (e.g., user context).  Understanding the API as a **generative process** lets you reason about caching, consistency guarantees, and how changes to business logic propagate to clients—far beyond simple CRUD semantics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
