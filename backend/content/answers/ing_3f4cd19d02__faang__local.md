---
qid: ing_3f4cd19d02__faang__local
question: A teammate edited the prompt in production and quality dropped. How do you
  fix the immediate problem and the process problem?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 414
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:10:55-05:00'
sources: []
---

**Clarify**  
We’re seeing a sudden drop in model output quality after a teammate edited the prompt in production.  
Assumptions:  
1. The edit was made directly on the live prompt file or config, not via version control.  
2. No automated tests were triggered by that change.  
3. The change is still active; downstream services are affected.

**Approach**  
1. **Immediate rollback** – revert to the last known‑good prompt from VCS or a backup.  
2. **Validate** – run unit/acceptance tests against the restored prompt, monitor key metrics (e.g., BLEU, user satisfaction).  
3. **Root‑cause analysis** – audit logs for who edited, when, and what was changed.  
4. **Process remediation** – enforce a policy: all prompt changes must go through code review + automated test suite; use feature flags to gate new prompts.

**Depth**  
- Rollback can be done by pulling the previous commit or restoring from snapshot (O(1) time).  
- Tests should cover edge cases: missing placeholders, malformed syntax, and semantic drift.  
- For long‑term safety, store prompt versions in a dedicated “prompt repo” with CI that runs inference tests on every push.

**Edge Cases**  
- If the rollback fails (e.g., corrupted file), restore from cloud backup or recreate manually.  
- If the edit introduced new tokens that break downstream tokenizers, add a pre‑flight validation step before deployment.

**Optimize & Communicate**  
Explain to stakeholders: “We restored the prompt, confirmed quality, and will now harden our pipeline with version control, code review, automated tests, and feature flags. This prevents accidental edits and gives us rapid rollback.”  

This balances an immediate fix with a sustainable process improvement, aligning with FAANG expectations for structured problem solving and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
