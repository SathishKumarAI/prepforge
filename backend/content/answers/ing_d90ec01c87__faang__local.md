---
qid: ing_d90ec01c87__faang__local
question: 'Explain: You''re dropped into an unfamiliar multi-file codebase with a
  failing behaviour and an LLM assistant available. Walk me through how you''d fix
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 456
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:04:04-05:00'
sources: []
---

**Clarify**  
*Problem:* A feature that used to work now throws a runtime error after a recent refactor.  
*Assumptions to confirm:*  
1. Which user‑visible behavior is broken?  
2. Is the failure deterministic or intermittent?  
3. Are there any unit tests for the affected path?  
4. What does the LLM assistant offer—code suggestions, documentation lookup, or debugging hints?

**Approach**  
1. Reproduce locally and capture the stack trace.  
2. Use the LLM to fetch project docs, `README`, and recent commit messages that touch the failing module.  
3. Run static analysis (`pylint`, `mypy`) to surface type or syntax issues.  
4. Identify the minimal set of files involved: controller → service → repository.  
5. Insert targeted breakpoints/logging (or use a debugger) around the failure point.

**Depth**  
- The stack trace points to `UserService.get_profile` calling `Database.fetch_user`.  
- LLM reveals that `fetch_user` now returns an `Optional[User]`, but callers assume non‑null.  
- Add a guard: if `None`, raise a custom `UserNotFoundError` and log context.  
- Update unit tests to cover the `None` path; use mocking for DB responses.  
*Complexity:* O(1) per request; added branch costs negligible.

**Edge Cases**  
- Concurrent updates causing stale data → test with race conditions.  
- Database schema changes that rename columns → run integration tests against a staging DB.  
- LLM mis‑suggested fix leading to import cycles – verify imports after change.

**Optimize & Communicate**  
Explain the root cause (“API contract changed without consumer update”) and how the guard restores safety. Propose adding a linter rule for `Optional` handling to catch future regressions early. Highlight that the LLM helped locate documentation quickly, saving hours of manual grep. This shows structured thinking, clear communication, and depth in both analysis and solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
