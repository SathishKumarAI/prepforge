---
qid: vq_e0b14c5127__fp__local
question: What are the Control Flow activities in the Azure Data Factory?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 471
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:00:46-05:00'
sources: []
---

In Azure Data Factory (ADF), *Control Flow* is the orchestrator that decides **when** and **in what order** data‑movement or transformation activities run.  
From a systems perspective, the control flow solves the problem of **dependency management under uncertainty**: tasks must respect prerequisites, yet also react to runtime conditions such as success/failure, data availability, or dynamic thresholds. ADF’s control primitives are therefore designed as *stateful, event‑driven constructs* that expose a minimal set of logical operators (sequential, branching, looping) and enrich them with failure‑handling hooks.

The key components are:

| Activity | Purpose | Core Principle |
|----------|---------|----------------|
| **If Condition** | Branch based on an expression evaluated at runtime | Conditional logic as in any programming language |
| **Switch** | Multi‑way branch (like `switch`/`case`) | Finite‑state machine transition |
| **ForEach** | Iterate over a collection of items | Iterator pattern + parallelism control |
| **Until** | Loop until an exit predicate is true | Guarded loop, akin to while‑do |
| **Wait** | Pause execution for a specified duration | Timing control (scheduling) |
| **Execute Pipeline** | Call another pipeline as a subroutine | Modular composition |
| **Web**, **Azure Function**, **Databricks Notebook** (as activities) | Trigger external services or code | Integration points |

### Non‑obvious insight  
Control flow in ADF is *not* merely about sequencing; it is fundamentally an **event‑driven state machine**. Each activity’s output becomes part of the global state, and downstream decisions can depend on any previous activity’s result (success, failure, or data metrics). This allows for highly dynamic pipelines that adapt to real‑time data quality signals—something most users overlook when they treat control flow as static scripting.

> *Why it must work this way:* The data‑engineering lifecycle is asynchronous and distributed; only a stateful orchestrator can guarantee correct ordering while still allowing parallelism, fault tolerance, and integration with external services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
