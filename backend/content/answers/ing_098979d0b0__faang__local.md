---
qid: ing_098979d0b0__faang__local
question: 'Explain: Core Tools — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 505
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:06:31-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Core Tools – Claude Code* (the set of utilities that let you run, debug, and iterate on Claude‑generated code).  
Assumptions:  
1. The audience knows what Claude is (OpenAI‑style LLM).  
2. “Core tools” refers to the command‑line & API features in Claude’s playground/SDK.

**Approach**  
1. Define each tool category.  
2. Show how they fit into a dev workflow.  
3. Highlight key parameters and trade‑offs (speed vs safety).

**Depth**  

| Tool | Purpose | Typical usage | Complexity / Trade‑offs |
|------|---------|---------------|------------------------|
| **/run** | Execute code in the sandbox. | `./my_script.py` | O(1) API call; limited to 5 min runtime, memory capped at 4 GB. |
| **/debug** | Step‑through or print‑based debugging. | `debug my_script.py --line 42` | Adds ~10 % latency; no state persistence across runs. |
| **/test** | Auto‑generate unit tests from prompts. | `test my_function()` | Generates 5–10 assertions; may miss edge cases. |
| **/optimize** | Suggest refactors or vector‑size tweaks. | `optimize my_script.py` | Can introduce subtle bugs if not reviewed. |
| **/profile** | Runtime profiling (CPU, memory). | `profile my_script.py` | Extra 2 s runtime; useful for bottleneck analysis. |

Typical workflow: write → `/run` → `/debug` (if fails) → `/test` → `/optimize`.  

**Edge Cases**  
- Infinite loops → sandbox auto‑kill after 5 min.  
- External dependencies → not allowed; must be bundled or stubbed.  
- Non‑Python languages → limited support, may fall back to generic exec.

**Optimize & Communicate**  
Explain that for production pipelines you’d wrap these calls in CI/CD hooks, cache intermediate artifacts, and use the `/profile` data to set resource limits. Narrate the reasoning by stressing safety (sandboxing) vs developer speed, and how each tool balances those goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
