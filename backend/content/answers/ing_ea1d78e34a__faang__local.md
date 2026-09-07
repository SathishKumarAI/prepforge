---
qid: ing_ea1d78e34a__faang__local
question: 'Explain: Q: An agent called a broken tool 400 times in five minutes. Diagnose
  and design the fix.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 442
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:44:21-05:00'
sources: []
---

**Clarify**  
We have an autonomous agent that repeatedly reports “broken tool” 400 times over 5 min (~13 Hz). Likely a sensor or state‑check loop is stuck in a failure branch. Confirm: is the same tool always flagged? Is there any external trigger (e.g., command, environment change)? Check logs for exception stack traces or state transitions.

**Approach**  
1. **Reproduce locally** – run the agent with instrumentation to capture the exact moment of first failure.  
2. **Trace control flow** – instrument the `isToolFunctional()` routine and surrounding logic.  
3. **Identify invariant violation** – look for a flag that never clears or a timeout that resets too often.  
4. **Patch** – add a debounce/guard: only report after consecutive failures > N (e.g., 5).  

**Depth**  
The bug stems from a missing *state reset* in the tool‑health monitor. After an exception, the flag `toolBroken = true` is never cleared because the recovery path (`resetTool()`) is bypassed when the agent enters “safe mode.” Adding a guard:

```python
if not self.tool_broken or self.consecutive_failures >= 5:
    report_break()
```

ensures that transient glitches are ignored. Complexity stays O(1) per cycle; memory overhead negligible.

**Edge Cases**  
- A real, persistent failure will still be reported after 5 consecutive checks.  
- If the tool recovers between checks, `consecutive_failures` must reset – verify this in tests.  
- Ensure that a timeout during recovery doesn’t re‑enter the broken state prematurely.

**Optimize & Communicate**  
After patching, run load tests to confirm the rate drops below 1 Hz. Document the change in the issue tracker with unit tests covering transient vs persistent failures. Explain to stakeholders: “We added debouncing logic so the agent only flags a tool after sustained failure, eliminating noisy reports while still catching real faults.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
