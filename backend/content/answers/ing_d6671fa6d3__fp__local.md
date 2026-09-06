---
qid: ing_d6671fa6d3__fp__local
question: 'Explain: You have two days in our codebase and no assigned task. What do
  you build, and how do you spend the time? (The work-trial meta-question.)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 510
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:35:58-05:00'
sources: []
---

**What problem am I solving?**  
When a new engineer lands in a codebase with no explicit ticket, the *latent cost* of onboarding is the biggest hidden expense: future developers will waste time searching for patterns, mis‑using APIs, or re‑implementing what already exists. My first principle is to **reduce that search space**.

**Why it must work this way?**  
The codebase is a complex graph of modules, data contracts and runtime behaviours. If I expose a *single, well‑documented entry point*—an “architecture map” coupled with a live **dependency graph explorer**—then any developer can instantly see how pieces interact. This leverages the information‑theoretic principle that *reducing uncertainty lowers effort*. Moreover, by packaging this as a lightweight CLI and a web UI I ensure it is both discoverable (search‑engine friendly) and usable across environments.

**What I build:**  
1. **Static analyzer** that ingests the repo, builds an AST, and outputs a JSON dependency graph.  
2. **Interactive viewer** (React + D3) that lets users filter by module, see versioned APIs, and drill into unit‑test coverage.  
3. **Auto‑generated README snippets** for every public function—signature, example call, and related tests.

**How I spend the two days:**  

| Time | Activity |
|------|----------|
| 8 h | Write analyzer (TypeScript/AST). |
| 4 h | Design graph schema, sketch UI. |
| 4 h | Implement viewer, wire to JSON. |
| 2 h | Generate README snippets via a script. |
| 2 h | Run exploratory tests, fix edge cases. |
| 1 h | Draft onboarding doc and GitHub action for auto‑update. |

**Non‑obvious insight:**  
By making the *dependency graph itself* first‑class documentation (rather than static docs), you create a living artifact that adapts to refactors automatically—future engineers no longer need to hunt for “where is X used?”; they can ask the graph. This turns the codebase into an **interactive knowledge base**, turning onboarding from a linear effort into a self‑service search, which scales linearly with team size rather than quadratically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
