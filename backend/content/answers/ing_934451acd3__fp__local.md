---
qid: ing_934451acd3__fp__local
question: Design an LLM agent that files and updates work orders in a customer's ERP
  - real writes to a production system. How do you make that safe?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 603
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:18:20-05:00'
sources: []
---

**Why the problem is hard**

A production ERP contains *stateful, immutable business rules* (e.g., inventory limits, audit trails). An LLM that directly writes to it risks violating constraints, creating data corruption or financial loss. The root of the risk is **semantic drift**: the model can generate syntactically correct commands that are semantically wrong.

---

### 1. Declarative intent + constraint‑driven synthesis

*Extract a *declarative intent* from the user prompt (e.g., “create work order #123 for part X, quantity = 10”).  
Translate this intent into a **policy graph**—a set of formal constraints that capture business rules:  
- Inventory ≥ quantity,  
- Supplier exists,  
- User has role *Technician*.  

Run the policy graph as a constraint solver; only if all constraints hold do we synthesize the concrete ERP command. This is essentially an *optimization* problem: maximize intent fidelity subject to feasibility constraints.

---

### 2. Multi‑layer safety net

| Layer | Purpose |
|-------|---------|
| **Sandbox replay** | Execute the synthesized command in a read‑only replica; compare pre/post state against invariants. |
| **Human‑in‑the‑loop confirmation** | If any invariant is close to violation, present a concise diff and ask for approval. |
| **Audit & rollback** | Log every change with cryptographic hashes; enable point‑in‑time restoration if post‑conditions fail. |

---

### 3. Non‑obvious insight

Most designs treat the LLM as a *black box* that must be trusted after a single pass of filtering. Instead, view the LLM as an **intent generator** whose output is *never directly executed*. By converting intent to constraints first, we leverage *optimization theory*: each write is a solution to a constrained optimization problem, guaranteeing that the ERP’s geometric (state‑space) boundaries are respected before any real action occurs.

---

### 4. Implementation sketch

```python
def safe_write(prompt):
    intent = llm.extract_intent(prompt)
    constraints = build_policy_graph(intent)
    if not constraints.satisfied():
        raise ValueError("Intent violates business rules")
    cmd = synthesize_command(intent, constraints)
    if sandbox_verify(cmd) and human_approve(cmd):
        erp.execute(cmd)
        audit_log(cmd)
```

This pipeline—intent → constraints → synthesis → sandbox → approval—provides *mathematical guarantees* that each write preserves ERP integrity while keeping the LLM’s flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
