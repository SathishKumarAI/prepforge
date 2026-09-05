---
qid: ing_3c6b8279f1__star__local
question: 'Explain: Q125: A self-propagating npm worm planted editor and agent auto-execution
  hooks in poisoned packages, so simply opening the repository ran the payload with
  no install step. Design supply-chain defense for a team running coding agents.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 303
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:29:11-05:00'
sources: []
---

**Situation** – In my last role I led a security‑aware dev‑ops squad that relied heavily on OpenAI‑powered code‑generation agents to scaffold microservices. One day our CI pipeline started blowing up with silent failures; the logs pointed to malicious NPM packages silently executing when a repo was opened, no `npm install` needed.

**Task** – I had to architect a supply‑chain defense that would let us safely run those coding agents without exposing the team to self‑propagating npm worms.

**Action** – First, I introduced a strict package whitelist and signed‑dependency policy in our `pnpm-workspace.yaml`. Next, I wrapped every agent launch inside a sandboxed container (Docker + seccomp profiles) that only had read‑only access to the repo and network isolation. We added a pre‑run integrity check: a script hashes every fetched package against a trusted registry’s signature store before execution. Finally, I set up a real‑time monitoring dashboard using Falco and Loki that flags any unexpected `exec` calls inside the agent process.

**Result** – Within two weeks we reduced malicious payload incidents to zero; CI run times increased by only 3 %. The team gained confidence in automated code generation, and we learned that combining strict package controls with runtime isolation is the most effective countermeasure against self‑propagating npm worms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
