---
qid: ing_5ba08438cf__think__local
question: Design the harness for an agent that makes multi-file changes from a natural-language
  task. How do you keep it from wrecking a codebase?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 523
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:02:20-05:00'
sources: []
---

**1️⃣ Clarify Scope & Constraints**  
   - *What is “wrecking” exactly?* (syntax errors, broken tests, security leaks)  
   - *Which codebases are we targeting?* (languages, frameworks, CI pipelines)  
   - *Assumptions*: the agent has read‑only access to a VCS, can run unit tests, and that a human reviewer will approve final changes.

**2️⃣ Mental Model: Defensive Layering**  
   Treat the harness like a gatekeeper with multiple safeguards: *sandbox*, *lint & type checks*, *test execution*, *semantic diff filters*, and *human‑in‑the‑loop* approval. Each layer reduces risk before code hits production.

**3️⃣ Step‑by‑Step Reasoning**  
   1. **Sandbox Execution** – run the proposed changes in an isolated container, with resource limits.  
   2. **Static Analysis** – lint, format, type‑check; reject if violations exceed a threshold.  
   3. **Unit/Integration Tests** – automatically execute all tests; fail fast on any failures.  
   4. **Semantic Diff Review** – flag large changes to unrelated modules or high‑impact files (e.g., config, security).  
   5. **Policy Engine** – enforce rules (no eval, no raw exec, no network calls in certain directories).  
   6. **Human Oversight** – present a concise diff + rationale; require explicit approval before merge.

**4️⃣ Common Pitfalls to Avoid**  
   - *Over‑tuning thresholds* → false negatives block useful edits.  
   - *Blind trust in tests* → tests may be incomplete or flaky.  
   - *Ignoring non‑functional impact* (performance regressions, memory leaks).  
   - *Assuming sandbox isolation is perfect* – remember container escape vectors.

**5️⃣ Sanity Check & Communication**  
   • **Run a “dry run” on a minimal repo** to confirm all layers trigger correctly.  
   • **Explain the pipeline verbally**: “The agent proposes changes → sandbox test → lint → policy → human review.”  
   • **Iterate on feedback loops** – adjust thresholds and policies based on real failures.  

By layering automated safety checks with human judgment, you keep an autonomous multi‑file editor from inadvertently corrupting a codebase while still allowing it to be productive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
