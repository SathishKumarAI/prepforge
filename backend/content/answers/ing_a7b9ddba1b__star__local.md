---
qid: ing_a7b9ddba1b__star__local
question: 'Work contract layer: should MCP include signed authorization + execution
  receipts for tool calls?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 350
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:13-05:00'
sources: []
---

**Situation:** In a recent fintech project, we built an automated compliance monitoring system that used third‑party risk‑assessment APIs. Our client required auditability of every tool call to prove they had explicit authorization before data was transmitted.

**Task:** I needed to design the work‑contract layer so it would store signed authorizations and execution receipts for each API invocation, while keeping latency below 200 ms per request and ensuring GDPR compliance.

**Action:** I introduced a lightweight “Contract Ledger” service written in Go. Each contract is a JSON Web Signature (JWS) that contains the user’s consent scope and expiration. Before invoking an external tool, the system signs the request payload with the private key of the ledger and attaches the JWS as a header. The target API verifies the signature against our public key. After execution, the service writes an immutable receipt—containing timestamp, status code, hash of the response—to a PostgreSQL table indexed by contract ID. We used pgcrypto to store the hashes securely and enabled logical replication so auditors could pull only the receipt data without accessing raw payloads.

**Result:** The added layer increased request latency by just 12 ms on average, well within our SLA. Audit logs showed 100% of tool calls were traceable back to a signed contract. Post‑deployment reviews confirmed compliance with ISO 27001 and GDPR, and the client praised the transparent audit trail, leading to an extension of the contract for another year. I learned how cryptographic signing can be woven into operational flows without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
