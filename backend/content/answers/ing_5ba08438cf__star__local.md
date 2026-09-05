---
qid: ing_5ba08438cf__star__local
question: Design the harness for an agent that makes multi-file changes from a natural-language
  task. How do you keep it from wrecking a codebase?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 355
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:42-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were tasked with automating the migration of our legacy payment engine to a new micro‑service architecture. The codebase spanned 120 k lines across ten repositories, and any accidental change could bring the entire platform down.

**Task** – I had to design a harness that allowed an AI agent to propose multi‑file changes from natural‑language prompts while guaranteeing zero regressions and minimal manual review time.

**Action** – First, I wrapped the agent in a sandboxed CI environment that cloned each repo into a disposable Docker container. The agent’s output was parsed by a static analysis pipeline (using ESLint + TypeScript compiler) to detect syntax errors, dependency mismatches, or API contract violations before any commit. Next, I built a diff‑scoring engine that weighted changes by file criticality and historical churn; the AI could only push changes below a threshold unless overridden by an engineer’s “override token.” Finally, I integrated a unit‑test harness that ran 95 % of our test suite in parallel on every proposed change set, with fail thresholds that blocked merge if coverage dropped or new failures appeared.

**Result** – The harness reduced manual review effort from 4 hours per PR to 30 minutes and caught 97 % of potential bugs before they hit staging. We delivered the migration two weeks ahead of schedule and saw a 12 % drop in production incidents during the rollout. I learned that combining sandboxing, static analysis, weighted diff gating, and automated testing is essential for safe AI‑driven code changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
