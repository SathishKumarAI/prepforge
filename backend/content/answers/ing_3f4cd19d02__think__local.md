---
qid: ing_3f4cd19d02__think__local
question: A teammate edited the prompt in production and quality dropped. How do you
  fix the immediate problem and the process problem?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 499
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:54:09-05:00'
sources: []
---

**1. Clarify & Assume**  
- *Clarify*: Confirm what “prompt” was edited (model name, context window, prompt text).  
- *Assume*: The change is already live; no rollback tool exists yet, and the team values quick fixes but also wants a durable process.

**2. Mental Model / Framework**  
Use a **dual‑track approach**:  
a) *Immediate Incident Response* – isolate, roll back or patch quickly.  
b) *Process Improvement Cycle* – implement controls to prevent repeat edits.

**3. Step‑by‑Step Reasoning**  

| Step | Action | Why |
|------|--------|-----|
|1|Identify the exact edit (diff).|Pinpoint root cause.|
|2|Revert to last known good config (if versioned) or manually restore prompt.|Stop further degradation.|
|3|Deploy a “fail‑safe” fallback prompt in production temporarily.|Maintain service while we investigate.|
|4|Run sanity tests on the restored prompt – compare metrics vs baseline.|Verify quality recovery.|
|5|Notify stakeholders of rollback and plan for permanent fix.|Transparency & trust.|
|6|Introduce version control (e.g., Git) + CI pipeline to enforce linting, unit‑test prompts.|Prevent future unauthorized edits.|
|7|Implement change‑approval workflow: code review + automated tests before merge.|Process gate.|
|8|Add monitoring for prompt changes (audit logs, alerts on prod writes).|Early detection.|
|9|Document the incident and lessons learned; update runbooks.|Continuous learning. |

**4. Common Traps to Avoid**  
- *Assuming rollback is trivial*: ensure you have a backup or diff before editing.  
- *Skipping testing after restore*: quality may still be off if underlying issue persists.  
- *Over‑engineering the process*: add controls that slow legitimate changes; balance agility and safety.

**5. Sanity‑Check & Communicate**  
- Re‑run key metrics to confirm they return to acceptable ranges.  
- Speak aloud: “We reverted the prompt, restored baseline performance, and are adding version control + approval gates to stop accidental edits.”  
- Ask a teammate to repeat the steps; if they can articulate them, you’ve internalized the fix and process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
