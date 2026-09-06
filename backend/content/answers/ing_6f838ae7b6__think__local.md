---
qid: ing_6f838ae7b6__think__local
question: LLMs are non-deterministic, but a refund over $200 must never be auto-approved.
  Where's the line between prompting and code?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 475
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:21:14-05:00'
sources: []
---

### 1️⃣ Clarify the problem & assumptions  
- **What is “non‑deterministic” here?** LLMs can give different outputs on each run; we need a stable rule for refunds.  
- **What defines an “auto‑approval”?** A code path that, once triggered, approves without human review.  
- **Where do the boundaries lie?** Prompt‑level logic (what we ask the model) vs. programmatic checks (if/else in code).  
- Assume: The system uses a prompt to generate approval text, then a separate validator inspects the numeric amount.

### 2️⃣ Adopt a layered mental model  
1. **Prompt layer:** Generates human‑readable justification or reason.  
2. **Code layer:** Enforces hard constraints (amount thresholds, audit flags).  
3. **Decision layer:** Combines both—if prompt says “approve” *and* code passes checks → approve; else → flag.

### 3️⃣ Step‑by‑step reasoning  
- **Step A:** Prompt the LLM: “Should we auto‑approve this refund request?”  
- **Step B:** Capture the answer.  
- **Step C:** Independently run a deterministic check: `if amount > $200 => reject`.  
- **Step D:** If code says *reject*, ignore prompt result; if code says *allow*, use prompt’s justification to log or audit.

### 4️⃣ Common traps to avoid  
- **Over‑trusting the LLM** – let it decide thresholds.  
- **Embedding business rules in prompts** – makes them mutable and hard to audit.  
- **Circular logic** – letting code depend on a prompt that itself references code logic.

### 5️⃣ Sanity‑check & communicate clearly  
- Test edge cases: $200 exactly, $201, $199.99.  
- Explain to stakeholders: “The LLM supplies narrative; the code enforces the $200 ceiling.”  
- Document the boundary: “All refunds >$200 bypass auto‑approval regardless of LLM output.”

This framework keeps deterministic safety in code while leveraging LLMs for interpretability, ensuring no auto‑approvals slip past the $200 guard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
