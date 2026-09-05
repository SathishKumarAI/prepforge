---
qid: vq_d64400701c__fp__local
question: What is normalization? What are the types?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 524
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:58:33-05:00'
sources: []
---

**Why we “normalize” a schema?**  
When data are stored in tables, the same value may appear in many rows. If a single fact changes (e.g., an employee’s address), every row containing it must be updated – otherwise the database becomes inconsistent. The *problem* is to keep the representation of each real‑world object **unique** while still allowing efficient queries.  
From the principle of *information theory*, redundancy increases entropy: more bits are stored, but they carry no new information. Normalization removes that unnecessary entropy by enforcing functional dependencies (FDs) so that each determinant uniquely specifies its dependents.

---

### Types (by increasing strictness)

| Normal Form | Core Idea |
|-------------|-----------|
| **1NF** | Every attribute is atomic; table is a pure relation. |
| **2NF** | 1NF + every non‑key attribute depends on the *entire* primary key (no partial FD). |
| **3NF** | 2NF + no transitive dependency: non‑keys don’t depend on other non‑keys. |
| **BCNF** | For every non‑trivial FD, its determinant is a superkey. |
| **4NF** | No multi‑valued dependencies (beyond FDs). |
| **5NF** | No join‑dependency loss; ensures all reconstructible joins are captured. |

---

### Non‑obvious insight  
Normalization *does not* automatically mean “smaller tables” or “faster queries.” It trades off **update anomalies** for **join overhead**. In practice, a 3NF design may be optimal because further decomposition (BCNF/4NF) can introduce many small tables that make ad‑hoc reporting expensive. Thus, the choice of normal form is guided by the workload: write‑heavy systems favor higher forms; read‑heavy analytics often tolerate denormalization for performance.

In short, normalization is a disciplined way to encode functional dependencies so each piece of information appears exactly once, preserving consistency while balancing performance considerations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
