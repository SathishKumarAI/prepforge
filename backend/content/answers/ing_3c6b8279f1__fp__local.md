---
qid: ing_3c6b8279f1__fp__local
question: 'Explain: Q125: A self-propagating npm worm planted editor and agent auto-execution
  hooks in poisoned packages, so simply opening the repository ran the payload with
  no install step. Design supply-chain defense for a team running coding agents.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 450
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:12:59-05:00'
sources: []
---

**Why this attack works**

A Node package’s *install* script is executed automatically by npm when `npm install` runs. The attacker exploited the fact that every dependency listed in a project’s `package.json` is fetched and its lifecycle hooks are run without user intervention. By inserting a malicious script (`postinstall`) that writes an editor extension and spawns a background agent, the payload activates *as soon as the repository is cloned*—no explicit `npm install` is required because many IDEs auto‑fetch dependencies on project open.

**Fundamental principle: “trust no implicit side effect”**

In supply‑chain security, the core assumption is that any artifact we import may contain hidden behavior. The attack demonstrates that *implicit execution* (the automatic running of scripts) is a loophole; it turns what should be a benign dependency into an autonomous code runner.

**Designing a defense for coding‑agent teams**

1. **Explicit install policy** – Disable npm’s auto‑install on repo open (`npm config set ignore-scripts true`).  
2. **Lockfile verification** – Use `package-lock.json`/`pnpm-lock.yaml` and verify checksums against a known good registry or an internal mirror.  
3. **Script audit** – Enforce a linting rule that flags any lifecycle script (`preinstall`, `postinstall`, etc.) in dependencies, or require manual approval of such scripts.  
4. **Sandboxed execution** – Run dependency installation inside a disposable VM/container with network isolation; capture and inspect all spawned processes before merging into the dev environment.  
5. **Continuous monitoring** – Integrate an agent that watches for new editor extensions or background services started by unknown packages, alerting immediately.

**Non‑obvious insight**

Many teams assume “install = build” is safe because it’s routine. The true risk lies in *the moment the dependency tree resolves*, not in the act of installation itself. By treating every dependency as a potential autonomous agent and enforcing isolation at that resolution point, you convert the supply chain from a single‑point vulnerability into a controlled sandbox.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
