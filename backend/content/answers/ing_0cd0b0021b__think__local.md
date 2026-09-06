---
qid: ing_0cd0b0021b__think__local
question: In this round you can use a coding agent, and we'll be watching how you
  use it. How do you approach that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 427
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:33:34-05:00'
sources: []
---

**1️⃣ Clarify the task & assumptions**  
- Identify what “using a coding agent” means (e.g., a separate tool that writes code).  
- Assume I have access to an API or interface that accepts prompts and returns code snippets.  
- Note constraints: time limits, output format, debugging expectations.

**2️⃣ Adopt a structured mental model**  
- *Problem‑definition → Goal‑setting → Planning → Execution → Validation*.  
- Treat the coding agent like a collaborator: give it clear specs, then iterate on its output.

**3️⃣ Step‑by‑step reasoning**  
1. **Restate the problem** in plain language and list required inputs/outputs.  
2. **Specify the exact code task** (e.g., “write a Python function that parses CSV rows into dicts”).  
3. **Choose the agent’s prompt format**: concise, include examples if helpful.  
4. **Send the prompt** to the agent and receive the draft code.  
5. **Review** for syntax, logic, edge cases; add missing comments or type hints.  
6. **Iterate**: tweak the prompt or ask for fixes on specific lines.  
7. **Test** locally (or via a sandbox) with representative inputs.  
8. **Refine** until it passes tests and meets style guidelines.

**4️⃣ Avoid common pitfalls**  
- Don’t over‑specify; let the agent’s generality shine.  
- Beware of “hallucinated” code: always validate logic, not just syntax.  
- Don’t assume the first output is perfect—iterate.  
- Watch out for missing imports or variable names that clash.

**5️⃣ Sanity‑check & verbalize**  
- Run a quick mental walk through the code path.  
- Explain to the audience why each step was chosen, highlighting the collaborative loop with the agent.  
- Conclude by summarizing how the prompt–response cycle produced correct, maintainable code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
