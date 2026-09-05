---
qid: vq_edf77dd35f__fp__local
question: Constraints cannot be exported through Export command ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 309
total_tokens: 477
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:02:56-05:00'
sources: []
---

In **Data‑Subject Access (DSA)** the *Export* command is a request for a complete copy of a subject’s personal data as stored by an organization.  
The fundamental problem it solves is the right to **re‑use** one’s own information: you must be able to move or back‑up every field that the system holds. Constraints, however, are *rules* that govern how those fields may change; they are not data themselves.

Because constraints live in a separate meta‑model (often in a policy engine), exporting them would require serialising the entire rule‑base—including versioning, dependencies, and possibly proprietary logic. From an information‑theoretic view, the *data* and its *validation* are orthogonal dimensions: one can copy the data without carrying the validator that produced it.

Thus DSA exports only the **data payload** (attributes, timestamps, provenance). The system deliberately omits constraints to avoid leaking internal governance logic, to keep the export lightweight, and to respect the separation of concerns between *information* and *policy*.  

**Non‑obvious insight:** If you need the same constraints elsewhere, you must explicitly request a *policy export* or use an API that mirrors the rule engine; otherwise, the exported dataset will be unusable for re‑validation in another environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
