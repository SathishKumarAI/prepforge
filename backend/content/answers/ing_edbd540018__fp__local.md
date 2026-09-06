---
qid: ing_edbd540018__fp__local
question: 'Explain: Side Effects Before Reservation — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 321
total_tokens: 494
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:24:49-05:00'
sources: []
---

**Side‑Effects Before Reservation – Idempotency (SBR‑I)**  
In distributed services that must guarantee *exactly‑once* execution, the naïve pattern is “reserve first, then perform side‑effects.” SBR‑I flips this order: a service **executes all observable changes before it claims an operation’s reservation** and then idempotently confirms the reservation.  

Why?  
- **Atomicity vs. Availability:** In highly available systems we cannot hold a lock while performing I/O; a network split would make the reservation impossible to release.  
- **Idempotent Confirmation:** By letting side‑effects happen first, any retry after failure simply re‑confirms the reservation (a lightweight idempotent “ack”), avoiding duplicate work.  
- **Optimistic Concurrency:** The system assumes “if it succeeded once, it will succeed again,” and uses a deterministic hash of input to detect duplicates.

**Deep insight:** *The reservation is not a lock but an idempotency key.* It separates the *state mutation* (side‑effects) from the *commit gate*. This mirrors the **“write‑once, read‑many”** principle in immutable data structures: once a result is stored, subsequent reads are cheap and safe. Thus SBR‑I trades a small upfront cost for global safety and higher throughput, especially under partial failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
