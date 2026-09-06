---
qid: ing_d90ec01c87__think__local
question: 'Explain: You''re dropped into an unfamiliar multi-file codebase with a
  failing behaviour and an LLM assistant available. Walk me through how you''d fix
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 513
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:17:08-05:00'
sources: []
---

**1. Clarify the problem & set assumptions**  
- Ask: *What is “failing behaviour” exactly?* (unit test failure, crash, wrong output).  
- Assume I have read‑only access to the repo, a CI pipeline, and an LLM that can generate code snippets or explain concepts.

**2. Adopt a mental model: “Locate → Understand → Fix → Validate”**  
- *Locate*: Find the failing point (stack trace, logs, failing test).  
- *Understand*: Map the call graph to see where the bug originates and why it matters.  
- *Fix*: Formulate minimal change, leveraging the LLM for boilerplate or edge‑case logic.  
- *Validate*: Run tests, check coverage, and confirm no regressions.

**3. Step‑by‑step reasoning**  

1. **Reproduce locally** – run the failing test or scenario to see the exact error message.  
2. **Trace back** – use a debugger or `grep`/IDE navigation to identify the entry point.  
3. **Read surrounding code** – look at recent commits, comments, and docs; ask the LLM: *“Explain this function’s intent”*.  
4. **Identify root cause** – is it an off‑by‑one bug, null pointer, wrong config?  
5. **Draft a fix** – write minimal patch, maybe asking the LLM for a concise implementation or refactor suggestion.  
6. **Run tests** – ensure all relevant unit/ integration tests pass.  
7. **Add a test (if missing)** – cover the edge case that caused the failure.  
8. **Commit & push** – include clear message, reference issue, and ask LLM to format commit notes.

**4. Common traps to avoid**  

- *Blindly trusting the LLM*: always review generated code for correctness and style.  
- *Skipping tests*: a patch that passes locally but fails CI is wasted effort.  
- *Over‑refactoring*: focus on the bug first; refactor later if time permits.

**5. Sanity‑check & communicate**  

- Verify with `git bisect` or test coverage reports that the change truly fixes the issue.  
- Summarize the problem, fix rationale, and any new tests in a PR description so reviewers can quickly grasp the intent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
