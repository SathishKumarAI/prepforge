---
qid: ing_480024b9c4__faang__local
question: A one-line system-prompt change is in a PR. What runs before it merges,
  and what blocks it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 471
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:31:16-05:00'
sources: []
---

**Clarify**  
We’re looking at a *system‑prompt* (the base prompt that drives an LLM) being updated in a pull request.  
Key questions:  
1. What CI checks run on the PR before it can be merged?  
2. Which checks must pass to unblock the merge?  

Assumptions:  
- The repo uses GitHub Actions or similar CI;  
- Prompt changes are treated as code and stored under `prompts/` or a config file;  
- There’s an automated test harness for LLM outputs.

**Approach**  
1. Identify all workflows triggered by `push`/`pull_request`.  
2. Filter those that reference the prompt files (e.g., lint, syntax, unit tests).  
3. Determine the “blocking” status—i.e., a job marked `required` or part of `mergeable` checks.

**Depth**  
- **Linting & Schema Validation** – runs first to catch YAML/JSON syntax errors.  
- **Unit Tests** – mock the LLM call and assert expected token counts or prompt structure; these are fast but critical.  
- **Integration Test** – spins up a real LLM (or a sandbox) with the new prompt, verifies output consistency against golden data.  
- **Model‑Safety Scan** – checks for disallowed content or bias triggers; fails if unsafe patterns detected.  

Only when *all* of these jobs pass does GitHub mark the PR as mergeable. A single failing job (e.g., safety scan) blocks the merge.

**Edge Cases**  
- Prompt size exceeding token limits → lint fails.  
- External LLM API rate‑limit hits → integration test retries or marks as unstable.  
- Changes that break backward compatibility with downstream services → unit tests fail.

**Optimize & Communicate**  
Explain to interviewers: “I’d prioritize safety and correctness by making the safety scan a hard gate, while keeping linting fast for quick feedback. If the repo grows, we could cache LLM responses to speed up integration tests.” This shows awareness of trade‑offs, clear communication, and depth in system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
