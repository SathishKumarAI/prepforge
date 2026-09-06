---
qid: ing_5353bf4490__fp__local
question: 'Explain: A partner reports that Harvey missed a change-of-control clause
  in a contract it reviewed. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 460
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:02:09-05:00'
sources: []
---

**Why the omission happened – a systems‑level view**

A *change‑of‑control* (CoC) clause is a contractual guardrail that protects one party when the other’s ownership structure shifts. Its function can be reduced to a single optimization problem: **minimise expected loss under uncertainty about future ownership**.  
When a contract is reviewed, the reviewer must:

1. **Identify the decision variable** – the *ownership status* of the counterparty at any time.
2. **Specify the objective** – keep the risk (e.g., liability, price exposure) below a threshold.
3. **Encode constraints** – legal language that binds the parties when the ownership variable changes.

Harvey’s review failed because step 1 was missed: the system did not flag *ownership status* as an explicit decision variable. In human‑centric reviews this often manifests as “the clause is buried in a paragraph about financing; we thought it was covered elsewhere.”  

**Debugging steps**

| Step | Action | Rationale |
|------|--------|-----------|
| 1️⃣ | **Extract all ownership‑related terms** (shareholder agreements, stock purchase plans, M&A covenants). | Guarantees the variable is captured. |
| 2️⃣ | **Map each term to a Boolean indicator** (`isOwnedByX`, `acquisitionPending`). | Translates legal prose into logical constraints. |
| 3️⃣ | **Run a constraint‑solver check**: does every scenario where ownership changes trigger the clause? | Detects gaps that human readers miss due to cognitive load. |
| 4️⃣ | **Cross‑validate with precedent contracts** using an NLP similarity model tuned on CoC clauses. | Ensures consistency across deals. |

**Non‑obvious insight:**  
Most reviewers treat a contract as *static text* rather than a *dynamic decision system*. By re‑framing the review as solving an optimization problem—identifying variables, constraints, and objectives—you expose hidden dependencies (like CoC clauses) that otherwise slip through. This perspective turns a tedious checklist into a principled verification process, dramatically reducing costly omissions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
