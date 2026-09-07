---
qid: ing_84c789e182__faang__local
question: Here are ~120 lines of working but messy code with passing tests. Improve
  the architecture without breaking them. What do you change first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 383
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:53:21-05:00'
sources: []
---

**Clarify**  
The task is: *take a ~120‑line codebase that passes tests but feels messy and refactor it without breaking any functionality.*  
Key assumptions I’d confirm with the interviewer:
1. Tests are comprehensive enough to act as our regression suite.
2. The project is a single script/module (no external services).
3. There’s no strict performance requirement; maintainability matters most.

**Approach**  
1. Run the test suite → ensure baseline.  
2. Perform a quick static analysis: identify long functions, duplicated logic, magic strings/nums.  
3. Create a minimal change‑set that isolates one responsibility at a time (single‑responsibility principle).  

**Depth**  
- **Extract small helper classes/functions**: move domain logic into dedicated modules (`calculator.py`, `parser.py`).  
- **Introduce dependency injection**: replace global state with constructor parameters or context objects.  
- **Use type hints and docstrings** to surface intent.  
- **Replace magic constants** with named enums/constants.  
All changes are wrapped in the same test harness, so any regression is caught immediately. Complexity stays O(n) for each function; we add negligible runtime overhead.

**Edge Cases**  
- Functions that modify global state may break hidden tests; verify by mocking globals.  
- Refactoring loops: ensure no off‑by‑one errors introduced.  
- Preserve original API surface (function names, return types).

**Optimize & Communicate**  
I’d commit changes incrementally, describe each refactor in the commit message, and explain how it reduces coupling and improves testability. This demonstrates clear communication, structured problem solving, and depth—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
