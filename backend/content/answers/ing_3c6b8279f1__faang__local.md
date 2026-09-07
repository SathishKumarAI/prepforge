---
qid: ing_3c6b8279f1__faang__local
question: 'Explain: Q125: A self-propagating npm worm planted editor and agent auto-execution
  hooks in poisoned packages, so simply opening the repository ran the payload with
  no install step. Design supply-chain defense for a team running coding agents.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 494
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:04:35-05:00'
sources: []
---

**Clarify**  
The problem: an npm package was compromised to auto‑execute malicious code (a “worm”) when its repository was simply opened, bypassing `npm install`. The goal is to design a supply‑chain defense for a team that uses coding agents (bots) to pull and run packages. I’ll assume the team uses CI/CD pipelines, has access to source control, and relies on public npm registries.

**Approach**  
1. **Source validation** – lock package versions & verify signatures.  
2. **Integrity monitoring** – hash checks & change‑detection in repos.  
3. **Execution sandboxing** – run agents in isolated containers with least privilege.  
4. **Behavioral analysis** – detect unexpected side‑effects (file writes, network calls).  
5. **Incident response automation** – auto‑rollback & alerting.

**Depth**  
- Use `npm audit` + `snyk` to flag vulnerable deps; enforce `package-lock.json` pinning.  
- Sign packages with PGP or npm’s new “verified publishing” and validate signatures before execution.  
- Store a hash (SHA‑256) of every pulled repo in a secure log; any deviation triggers an alert.  
- Containers run with read‑only rootfs, no network unless whitelisted, and limited CPU/memory.  
- Agents log all file system changes; if the agent writes to `/etc` or initiates outbound traffic, it is quarantined.  
- On detection, automatically revert to the last known good commit and notify security.

**Edge cases**  
- Legitimate post‑install hooks (e.g., `postinstall`) must be whitelisted.  
- Packages that legitimately modify config files should be vetted manually.  
- False positives in behavioral analysis could stall development; calibrate thresholds with baseline metrics.

**Optimize & communicate**  
Start with the “lock‑and‑sign” policy—most attacks fail at the signature check, so it’s low cost and high ROI. Then layer sandboxing and monitoring for a defense‑in‑depth posture. Communicate the strategy to devs as: *“We lock versions, verify signatures, run your code in an isolated container that screams if anything weird happens.”* This keeps the pipeline fast while ensuring robust supply‑chain security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
