---
qid: ing_5234d2b69f__faang__local
question: How is a system prompt for a long-running agent different from one for a
  single-shot feature?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 475
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:55:32-05:00'
sources: []
---

**Clarify**  
We’re comparing two LLM‑driven scenarios: (1) a *long‑running agent* that persists across many turns, updating its state; (2) a *single‑shot feature* that runs once per request. Key assumptions: same base model, similar token budget, no external memory unless explicitly provided.

**Approach**  
Outline differences in intent framing, context management, and safety hooks before coding the prompts.

| Aspect | Long‑running Agent | Single‑Shot Feature |
|--------|--------------------|---------------------|
| **State persistence** | Must encode/refresh internal variables each turn. | No state; prompt must be self‑contained. |
| **Prompt length** | Smaller core instruction + dynamic context snippet. | Full instruction in one block. |
| **Safety & bias control** | Re‑inject guardrails at every step to avoid drift. | One‑time safety checks suffice. |
| **Error handling** | Include rollback or clarification steps. | Single retry logic. |

**Depth**  
A long‑running agent prompt looks like:  

```
"You are a customer‑support bot named Helix. Maintain these variables across turns:
- ticket_id
- issue_status
- user_satisfaction

Current context: {context}
User says: {user_input}

Respond following the policy rules."
```

The single‑shot prompt is:

```
"Translate the following sentence to French, ensuring formal tone and no contractions."
```

Complexity: agent prompt requires O(n) token overhead per turn for context injection; single‑shot stays O(1). Trade‑offs: agents need careful state serialization; single‑shots avoid cumulative drift.

**Edge Cases**  
- *Agent*: stale or corrupted state → reset to defaults.  
- *Single‑shot*: malformed input → generic fallback.  
Test both with long conversations vs. isolated requests.

**Optimize & Communicate**  
For agents, use a lightweight JSON “state buffer” and only re‑prompt essential fields; for single‑shots, compress instruction into concise bullet points. I’d explain to interviewers how this keeps token budgets low while preserving safety and correctness, demonstrating structured reasoning and depth expected at FAANG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
