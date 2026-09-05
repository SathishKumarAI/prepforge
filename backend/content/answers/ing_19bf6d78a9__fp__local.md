---
qid: ing_19bf6d78a9__fp__local
question: 'Explain: How do you test an agent in CI? Not evals - CI, on every pull
  request, in under five minutes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 420
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:01:04-05:00'
sources: []
---

**Testing an AI agent in CI (≤ 5 min per PR)**  

The core problem is *verifying that a new code change preserves the agent’s functional contract*—policy stability, safety guarantees, and performance bounds—without waiting for full‑scale deployments.  
1. **Contract extraction**: From the agent’s specification (e.g., “never take action A in state S”), generate a set of *unit assertions*.  
2. **Deterministic replay**: Wrap every environment step with a fixed random seed and deterministic observation encoder; this turns stochastic policy evaluation into a reproducible unit test.  
3. **Policy‑to‑code translation**: Compile the agent’s decision logic into an intermediate representation (e.g., a control‑flow graph). Static analysis then checks for unreachable branches, over‑tightening of safety constraints, or violation of monotonicity properties.  
4. **Monte‑Carlo sanity check**: Run 50–100 lightweight simulations on a *pre‑selected* set of “corner‑case” states (e.g., edge‑cases from the previous PR). The number is chosen to keep the wall‑time < 5 min while still giving a 95 % confidence interval for the failure rate.  
5. **Coverage & drift metrics**: Compute coverage of symbolic execution paths and compare reward statistics against the baseline; any drift beyond a configurable threshold triggers a fail.

**Non‑obvious insight:**  
Because CI budgets are tight, *embedding the policy into static analysis* turns an inherently probabilistic problem (policy robustness) into a deterministic one. This eliminates the need for long rollouts while still catching subtle logic regressions that would otherwise slip through pure simulation tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
