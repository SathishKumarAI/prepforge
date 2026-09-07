---
qid: ing_5ba08438cf__faang__local
question: Design the harness for an agent that makes multi-file changes from a natural-language
  task. How do you keep it from wrecking a codebase?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 440
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:16:24-05:00'
sources: []
---

**Clarify**  
*Goal*: An AI “harness” that translates a user’s natural‑language request into edits across multiple files (e.g., refactor, add feature).  
*Assumptions to confirm*:  
1. The codebase is version‑controlled (Git).  
2. A test suite exists and runs fast enough for CI checks.  
3. Developers can review PRs before merging.

**Approach**  
1. **Command parsing & intent extraction** – use an LLM fine‑tuned on commit diffs + a lightweight rule set to map “task” → *change graph* (files, ranges).  
2. **Sandboxed execution** – generate a pull request in a dedicated branch; run the full test suite locally before CI.  
3. **Safety hooks** –  
   - *Diff preview*: show the LLM‑generated diff with inline explanations.  
   - *Static analysis*: lint and type‑check each file after modification.  
4. **Human‑in‑the‑loop review** – require at least one developer to approve before merge.  

**Depth**  
- Diff generation uses token‑level edit distance to preserve formatting.  
- Complexity: O(n log n) for sorting affected files; diff validation is linear in file size.  
- Trade‑offs: heavier safety checks slow iteration but drastically reduce regressions.

**Edge Cases**  
- Conflicting changes with concurrent commits → merge conflict resolution.  
- Non‑deterministic tests or flaky CI → block merge until stability.  
- LLM hallucinations producing syntactically correct yet semantically wrong code – caught by static analysis and manual review.

**Optimize & Communicate**  
- Cache test results per branch to speed up repeated edits.  
- Provide a “dry‑run” mode that only shows diffs without committing.  
- Narrative: explain the harness as an *AI‑driven PR generator* that respects existing workflows, leveraging Git, CI, and human oversight to prevent wreckage while accelerating development.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
