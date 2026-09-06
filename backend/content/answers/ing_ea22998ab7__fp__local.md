---
qid: ing_ea22998ab7__fp__local
question: 'Explain: Attributability as a Compliance Primitive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 528
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:17:01-05:00'
sources: []
---

**Attributability as a Compliance Primitive**

*Problem.*  
When an AI system acts—making a recommendation, issuing a decision, or generating content—regulators and users must know *who* (or what) was responsible for that action to satisfy accountability, liability, and audit requirements. Without this knowledge, violations cannot be remedied, nor can trust be built.

*Why it must work the way it does.*  
Attributability is a **causal‑trace** primitive: it records the *chain of influence* from data ingestion through model inference to output. To satisfy legal standards (e.g., GDPR’s “right to explanation”), this trace must be:

1. **Immutable and verifiable** – cryptographic signatures or blockchain‐style logs ensure that a record cannot be altered after creation.
2. **Granular yet privacy‑preserving** – the trace must distinguish between user identities, model versions, and deployment environments while masking sensitive data (using techniques such as differential privacy or secure enclaves).
3. **Linkable across contexts** – the same identity token must bind actions performed by different components (data provider, training pipeline, inference server) so that a single audit can traverse all relevant stages.

*Deeper principle.*  
Attributability is an instance of **information‑theoretic causal sufficiency**: to attribute an outcome \(O\) to a source \(S\), the system must preserve enough mutual information between \(S\)’s state and \(O\). This links to the *causal inference* framework (e.g., Pearl’s do‑calculus) where interventions on \(S\) produce observable changes in \(O\); without preserving that linkage, attribution collapses.

*Non‑obvious insight.*  
Many think attributability is merely logging. The subtlety lies in **forward‑secrecy of identity tokens**: if an attacker compromises a log after the fact, they should not be able to retroactively link past actions to present identities. By generating one‑time cryptographic tags that are later bound to persistent identifiers only at audit time, systems can satisfy both *traceability* and *privacy*, which is often overlooked in compliance designs.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
