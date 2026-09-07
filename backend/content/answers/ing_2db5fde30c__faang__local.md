---
qid: ing_2db5fde30c__faang__local
question: 'Q51: Your agent takes 47 LLM calls to complete a task that should take
  5. How do you debug this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 479
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:29:42-05:00'
sources: []
---

**Clarify**

You’re asked why an LLM‑driven agent needs 47 calls when the task should finish in ~5 and how to debug it.  
Assumptions to confirm:  
1. The “5” refers to the number of logical sub‑tasks (e.g., fetch, parse, validate, format, output).  
2. Each LLM call is a round‑trip to an external API; cost/time is significant.  
3. The agent follows a predefined workflow or planner.

**Approach**

1. Instrument every LLM invocation (timestamp, prompt size, response length).  
2. Log the state transition graph of the agent’s internal plan.  
3. Compare actual calls vs expected sub‑tasks.  

**Depth**

- **Profiling**: Attach a lightweight wrapper around the LLM client to capture latency and token usage per call.  
- **Plan audit**: After each call, output the current planner state (e.g., OpenAI’s `ChatCompletion` with `function_call` logs).  
- **Reconstruction**: Re‑run the task locally with a mock LLM that echoes prompts; count logical steps without external latency.  
- **Root causes**:  
  * Over‑generation of intermediate thoughts → repeated “clarify” loops.  
  * Planner mis‑interpretation of partial results → backtracking.  
  * Prompt drift or hallucination causing retries.  

Complexity: O(n) over calls; memory linear in log size.

**Edge Cases**

- Token limits forcing prompt truncation → loss of context, causing redundant calls.  
- Rate‑limit throttling triggers automatic retries.  
- Malformed JSON responses break the planner loop.

**Optimize & Communicate**

Present findings as a concise dashboard: call count vs expected, latency heatmap, and a “root‑cause” chart. Recommend:
- Tighten prompt templates to reduce ambiguity.  
- Cache intermediate results (e.g., parsed data).  
- Introduce a “confidence threshold” before committing to a sub‑task.  

Explain that debugging is an iterative cycle: instrument → analyze → refactor prompts/plan → re‑profile, ensuring the agent stays within the 5‑call budget while maintaining correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
