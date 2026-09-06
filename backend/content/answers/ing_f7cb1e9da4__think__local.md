---
qid: ing_f7cb1e9da4__think__local
question: 'Q: An agent works fine for short tasks but degrades on long-running ones.
  How do you fix it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 436
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:21:13-05:00'
sources: []
---

**1. Clarify the problem and state assumptions**  
   - *Clarify*: “short tasks” vs. “long‑running” – is it time, memory, or number of decisions?  
   - *Assumptions*: The agent’s algorithm and environment are unchanged; only execution length differs.

**2. Adopt a mental model: resource exhaustion & drift**  
   - Think in terms of *finite resources* (stack depth, cache size, numeric precision) and *policy drift* (state distribution shifts over time).  
   - Map the issue to known patterns: stack overflow, memory leaks, exploration vs. exploitation imbalance.

**3. Step‑by‑step reasoning**  
   1. **Instrument**: Add logs for memory usage, recursion depth, loss/return over episodes.  
   2. **Diagnose**: If peaks occur at episode ends → stack/memory; if performance degrades gradually → drift or learning rate issues.  
   3. **Fixes**:  
      - *Memory*: switch to iterative loops, use generators, limit buffer sizes.  
      - *Stack*: increase recursion limits or refactor recursion into iteration.  
      - *Drift*: implement experience replay with priority sampling, or add regularization (entropy, KL penalty).  
   4. **Validate**: Run a few long episodes after each fix; monitor the metrics.

**4. Common traps to avoid**  
   - Assuming “long tasks” are just more steps when they might involve different state distributions.  
   - Over‑optimizing for memory without checking if the degradation is numeric (floating‑point drift).  
   - Ignoring that a fixed buffer size may discard crucial rare experiences.

**5. Sanity‑check & communicate**  
   - Re‑explain the root cause in one sentence: “The agent’s resources or learning signal become saturated over long horizons.”  
   - Show before/after plots of resource usage and performance to prove the fix worked.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
