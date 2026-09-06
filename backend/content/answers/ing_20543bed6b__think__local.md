---
qid: ing_20543bed6b__think__local
question: 'Explain: 4.3 Handling failure of Jobs — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 695
total_tokens: 894
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:49:32-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “failure” in this context?* – worker crash, task exception, timeout, network partition, data corruption.  
- *Which failure modes must be handled?* – transient vs permanent, single‑node vs cluster‑wide.  
- *Assume a typical distributed environment:* stateless workers, message queue or streaming backend, persistent metadata store.

**2️⃣ Adopt a mental model**  
Think of the scheduler as a **state machine** with three core layers:  
1. **Job definition & metadata** (what to run, inputs, constraints).  
2. **Execution engine** (dispatching, tracking, retry logic).  
3. **Recovery & compensation** (detect failure, rollback or compensate).

Use classic distributed‑systems patterns: *Leader election* for single point of coordination, *idempotent tasks*, *exactly‑once semantics*, and *eventual consistency* for state.

**3️⃣ Step‑by‑step reasoning**  

| Step | What to do | Why |
|------|------------|-----|
| **Job ingestion** | Store job spec in a durable store (e.g., Cassandra, PostgreSQL). Mark status `PENDING`. | Guarantees persistence before scheduling. |
| **Scheduling loop** | Leader polls for `PENDING` jobs → assigns to workers via a broker (Kafka, SQS). | Centralized decision‑making keeps load balanced. |
| **Execution ack** | Worker acknowledges receipt → job state becomes `RUNNING`. | Detects lost messages or worker crashes early. |
| **Heartbeat / watchdog** | Workers send periodic heartbeats; leader times out on miss → marks job as `FAILED` and requeues. | Handles silent failures. |
| **Retry policy** | On failure, exponential back‑off + max retries; after exhaustion mark `PERMANENT_FAILURE`. | Prevents infinite loops. |
| **Idempotency key** | Include unique ID in task payload; workers check deduplication table before processing. | Allows safe re‑delivery without double work. |
| **Compensation / rollback** | For stateful ops, publish compensating actions or use a saga pattern. | Ensures eventual consistency across services. |

**4️⃣ Common traps to avoid**  

- *Assuming single leader is fault‑tolerant:* it can become a bottleneck; add graceful failover.  
- *Ignoring idempotency:* duplicate messages will corrupt data.  
- *Over‑simplifying retry logic:* exponential back‑off plus circuit breaker prevents thrashing.  
- *Neglecting observability:* without metrics/alerts you won’t know failure patterns.

**5️⃣ Sanity‑check & articulate**  

1. **Test edge cases:** simulate worker crash, broker partition, network latency spikes.  
2. **Verify idempotency:** replay same task and confirm no side effects.  
3. **Explain trade‑offs aloud:** e.g., “We chose a single leader for simplicity but will shard it later if load grows.”  

By following this structured approach—clarifying assumptions, mapping to a state‑machine framework, iteratively reasoning through each component, guarding against common pitfalls, and validating with edge scenarios—you can confidently design a robust distributed job scheduler that gracefully handles failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
