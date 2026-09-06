---
qid: ing_84c789e182__think__local
question: Here are ~120 lines of working but messy code with passing tests. Improve
  the architecture without breaking them. What do you change first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 410
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:48:08-05:00'
sources: []
---

**1️⃣ Clarify scope & constraints**  
- Identify the public API that tests exercise (functions, classes, return types).  
- Confirm that refactors must keep the same signatures and side‑effects.  
- Note any hidden dependencies (e.g., global state, file I/O) that could break tests.

**2️⃣ Adopt a “clean‑up first” framework**  
- Treat the code as a *black box*: change internal structure only if it doesn’t alter observable behaviour.  
- Use the *Rule of Least Surprise*—tests are your contract; refactor to make the contract clearer, not to rewrite it.

**3️⃣ Reason step‑by‑step**  
1. **Extract modules**: group related functions into separate files/packages to reduce coupling.  
2. **Encapsulate globals**: replace module‑level mutable state with a context or config object passed explicitly.  
3. **Introduce interfaces/abstract base classes**: define clear contracts for pluggable components (e.g., data loaders, processors).  
4. **Add type hints and docstrings**: improve readability without affecting runtime behaviour.  
5. **Run tests after each small change** to ensure no regression.

**4️⃣ Avoid common traps**  
- Don’t rename or remove public functions unless you provide backward‑compatible wrappers.  
- Beware of implicit imports that can introduce circular dependencies when reorganising files.  
- Refrain from over‑optimizing early; focus on clarity first, then performance if needed.

**5️⃣ Sanity‑check & communicate**  
- Verify that `pytest -q` still passes and coverage is unchanged.  
- Summarise the changes in a concise commit message: “Refactor architecture—module extraction, state encapsulation, type hints—tests intact.”  
- If possible, add a brief diagram or comment explaining the new module interactions for future maintainers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
