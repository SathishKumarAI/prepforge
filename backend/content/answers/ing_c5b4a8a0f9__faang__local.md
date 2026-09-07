---
qid: ing_c5b4a8a0f9__faang__local
question: 'Q66: When would you use Claude''s extended or adaptive thinking vs. standard
  mode, and how do you control costs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 511
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:20:47-05:00'
sources: []
---

**Clarify**  
We’re deciding when to switch Claude from its default “Standard” prompt‑completion mode to the higher‑capacity **Extended/Adaptive Thinking** (EAT) mode that lets it maintain longer context and perform more reasoning steps. The key variables: task complexity, latency tolerance, cost budget, and data sensitivity.

*Assumptions to confirm:*  
- Is the user request a single short query or a multi‑step problem?  
- Does the answer need deep inference (e.g., legal drafting, code synthesis)?  
- Are we constrained by a per‑minute or per‑token cost cap?

**Approach**  
1. **Profile the task**: benchmark standard mode on a sample prompt to measure token usage and latency.  
2. **Decision rule**: if tokens > threshold (≈ 5k) *or* required reasoning depth > 3 steps, flag for EAT.  
3. **Cost control**: set a hard cap per request (e.g., $0.02) and enforce via API‑side budget checks; fall back to standard mode if the cap would be exceeded.

**Depth**  
EAT uses a larger context window (~ 32k tokens) and internally splits the problem into sub‑tasks, returning partial results that are stitched together. This reduces hallucinations on complex prompts but incurs ~ 2× token cost. Standard mode is cheaper (≈ $0.0006/1k tokens) and faster (≤ 300 ms). The API call for EAT also adds a 50–100 ms overhead.

**Edge Cases**  
- *Over‑triggering*: trivial tasks unnecessarily using EAT leads to waste; guard by a min‑token threshold.  
- *Under‑triggering*: complex prompts stuck in standard mode cause incomplete answers; monitor user feedback loops.  
- *Budget overruns*: if token count spikes mid‑run, abort and revert to partial standard output.

**Optimize & Communicate**  
Iteratively refine the heuristic with A/B testing: track completion quality vs. cost per cohort. Explain to stakeholders that EAT is reserved for “reasoning‑heavy” requests (e.g., multi‑step code generation) while standard mode handles “lookup/clarification” queries, keeping overall spend predictable. This structured trade‑off satisfies both product and finance teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
