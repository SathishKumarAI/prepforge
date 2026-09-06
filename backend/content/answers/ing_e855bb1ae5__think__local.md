---
qid: ing_e855bb1ae5__think__local
question: 'Explain: Write scenarios in Claude Code — AI Agent Testing and Evaluation
  | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 427
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:21:46-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Describe how to create test cases for a Claude‑style AI agent using the “Claude Code” syntax, then evaluate its performance in the LangWatch framework.  
- *Assumptions*: The reader knows basic Python, understands that Claude Code is a domain‑specific language (DSL) for specifying prompts, responses, and expected outputs, and has access to LangWatch’s evaluation API.

**2️⃣ Adopt a “test‑scenario → execution → assertion” mental model**  
1. **Scenario definition** – write a concise prompt in Claude Code, optionally including context or constraints.  
2. **Execution** – invoke the agent with that prompt (via LangWatch’s `run_agent`).  
3. **Assertion** – compare the actual response to an expected pattern (exact string, regex, or semantic score).

**3️⃣ Step‑by‑step reasoning**  
- *Draft a scenario*: e.g., “Ask Claude for the capital of France.”  
- *Encode in Claude Code*:
  ```claude
  prompt: "What is the capital of France?"
  expected_response: "Paris"
  ```
- *Run via LangWatch*:
  ```python
  result = langwatch.run_agent(claude_code)
  ```
- *Assert*: 
  ```python
  assert result.response == "Paris", f"Got {result.response}"
  ```

**4️⃣ Common pitfalls to avoid**  
- Mixing plain text with DSL tags → syntax errors.  
- Using hard‑coded strings when the agent’s answer may vary in casing or punctuation.  
- Forgetting to escape special characters inside regex patterns.

**5️⃣ Sanity‑check & communicate**  
- Verify that the Claude Code snippet parses correctly before execution.  
- Print a summary: “Scenario ‘Capital of France’ passed with confidence 0.98.”  
- Share the test suite in version control so others can run it against new model iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
