---
qid: ing_3c6b8279f1__think__local
question: 'Explain: Q125: A self-propagating npm worm planted editor and agent auto-execution
  hooks in poisoned packages, so simply opening the repository ran the payload with
  no install step. Design supply-chain defense for a team running coding agents.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 565
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:47:50-05:00'
sources: []
---

**1️⃣ Clarify the scenario & assumptions**  
- *What* is “self‑propagating npm worm”?  A malicious package that, once pulled into any repo, auto‑executes payloads (editor/agent hooks) without a separate `npm install`.  
- *Who* are we defending?  Teams that run coding agents (e.g., AI pair programmers, CI bots).  
- Assume the team has normal npm tooling and can modify build pipelines but may not control every pull request or fork.

**2️⃣ Mental model: supply‑chain defense layers**  
1. **Ingress filtering** – validate what enters the repo.  
2. **Build isolation** – sandbox execution of any package code.  
3. **Runtime monitoring** – detect anomalous hooks/side‑effects.  
4. **Post‑execution audit** – verify nothing persisted beyond intended scope.

**3️⃣ Step‑by‑step reasoning**  

| Layer | What to do | Why it works |
|-------|------------|--------------|
| Ingress | *Pin package versions* (exact hash or lockfile), *require signed packages*, *scan npm registry for CVEs*. | Stops arbitrary code from being pulled in. |
| Build isolation | Run `npm install` in a read‑only, network‑isolated container; use `--ignore-scripts`. | Prevents auto‑exec during installation. |
| Runtime monitoring | Hook into the agent’s startup to log all file writes and process spawns; enforce a policy that disallows editor/agent hooks unless explicitly whitelisted. | Catches post‑install payloads before they act. |
| Audit | Periodic static analysis of `node_modules`, automated checks for unexpected scripts in `package.json`. | Detects hidden or mutated code after the fact. |

**4️⃣ Common traps to avoid**  
- *Overreliance on lockfiles*: a malicious maintainer can ship a bad package with a fixed hash.  
- *Blindly trusting CI agents*: they may run privileged containers if not sandboxed.  
- *Ignoring post‑install scripts*: many npm packages legitimately use them; blanket removal breaks functionality.

**5️⃣ Sanity‑check & communicate**  
Run a “red‑team” test: intentionally pull in a known malicious package, observe whether the payload runs under each layer. If it doesn’t, you’re safe. Present results as a table of layers vs. attack success to stakeholders, highlighting that defense is cumulative, not singular.

---

This staged approach turns an invisible, auto‑executing worm into a detectable, controllable event—protecting teams that rely on coding agents while preserving legitimate npm workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
