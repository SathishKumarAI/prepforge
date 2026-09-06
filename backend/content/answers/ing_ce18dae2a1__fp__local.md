---
qid: ing_ce18dae2a1__fp__local
question: 'Explain: Q119: A popular coding CLI was caught silently uploading entire
  repositories, secrets included, while its privacy toggle did nothing. Design telemetry
  for your own coding agent so this class of failure is impossible.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 425
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:18:47-05:00'
sources: []
---

**Telemetry that makes silent‑repo uploads impossible**

1. **Information‑flow graph + runtime enforcement**  
   Build a *static* dependency graph where every file, environment variable, and network endpoint is a node. At runtime the agent performs a *dynamic taint analysis*: any data originating from the local filesystem is tagged “local”. The telemetry engine records *edge traversals*. A policy rule declares that a “local” tag may never cross a boundary to an external host unless it first passes through a *sanitizer* node (e.g., encryption, hashing). If the agent attempts to send a file without this gate, the runtime aborts and emits an audit event.

2. **Cryptographic commitment + immutable log**  
   For every outbound message, the agent computes a hash‑chain commitment that is appended to an append‑only, tamper‑evident ledger (e.g., a Merkle tree stored in a distributed key–value store). The ledger entry contains: timestamp, repository root hash, list of files, and a signed statement “no secrets were transmitted”. If the agent later modifies the log or attempts to re‑upload, the chain breaks, making the violation instantly detectable.

3. **Zero‑knowledge sanity checks**  
   The telemetry server can request a zero‑knowledge proof that the payload contains no secret patterns (regex or ML‑based). This adds an extra layer of assurance without exposing the secrets themselves.

*Non‑obvious insight*: By coupling **runtime taint enforcement** with an **immutable cryptographic log**, you convert the problem from “how to detect after the fact” to “how to make detection impossible before it happens”. The audit trail becomes a *self‑enforcing contract*—any attempt to violate it is instantly visible and unforgeable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
