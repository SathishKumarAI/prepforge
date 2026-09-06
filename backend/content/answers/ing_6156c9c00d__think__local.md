---
qid: ing_6156c9c00d__think__local
question: Half our application code is now written by AI tools. How does your job
  change - and how do you use those tools yourself?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 437
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:26:51-05:00'
sources: []
---

**1️⃣ Clarify the premise & set assumptions**  
   * Ask whether “half our code” means *written* or *generated* by AI, and if this includes everything from scripts to UI logic.  
   * Assume the team already has a pipeline (CI/CD, testing, code‑review) that can ingest AI output, and that developers still own architecture & design decisions.

**2️⃣ Adopt a “human‑in‑the‑loop” framework**  
   * Treat AI as an assistant, not a replacement.  
   * Define clear boundaries: AI drafts boilerplate, tests, documentation; humans vet logic, performance, security, and business rules.

**3️⃣ Step‑by‑step reasoning**  
   1. **Identify repetitive patterns** (e.g., CRUD endpoints, auth scaffolds).  
   2. **Feed minimal context to the model** (desired language, framework version, constraints).  
   3. **Generate code snippets** and run them through the existing test suite automatically.  
   4. **Review & iterate**: humans tweak edge‑cases, refactor for readability, and add comments.  
   5. **Document the workflow** so new hires know when to ask the model vs. write from scratch.

**4️⃣ Avoid common pitfalls**  
   * Don’t trust “magic” outputs; always validate against security and compliance checks.  
   * Guard against “over‑fitting” – AI may produce code that works locally but fails in production due to environment differences.  
   * Prevent “AI fatigue” by limiting model calls to high‑value tasks (boilerplate, unit‑test generation).

**5️⃣ Sanity‑check & communicate**  
   * Run a quick sanity test: does the generated module compile? Does it pass unit tests?  
   * Share results in stand‑ups: “Model produced X lines of CRUD code; we added Y security headers.”  
   * Iterate on the process and document lessons learned for future reference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
