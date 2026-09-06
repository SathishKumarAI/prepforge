---
qid: ing_dbe2fc70b5__fp__local
question: 'Explain: SWE-bench Verified Scores (May 2026) — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 453
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:46:43-05:00'
sources: []
---

### Why *SWE‑Bench* uses **Verified Scores**  
In a benchmark that tests software‑engineering ability, the raw output of an LLM is only a *candidate solution*.  A candidate may pass unit tests, yet still violate coding standards, introduce subtle bugs, or fail on edge cases.  The verification step therefore formalises “solving” as **satisfying all specification constraints** rather than merely producing plausible code.

1. **Specification → Constraint Set**  
   Each SWE‑Bench problem is encoded as a set of logical predicates (e.g., type signatures, pre/postconditions, runtime invariants).  This mirrors *formal verification*: a program is correct iff it satisfies the predicate \(P(x)\).

2. **Model Checking the LLM Output**  
   The generated code \(C\) is compiled and run against an exhaustive suite of tests (unit + integration).  If every test passes, we assert \(\forall t \in T: \text{Test}(C,t)=\text{pass}\).  This is a *finite* verification; if it holds, the verifier returns “verified”.

3. **Score as Probabilistic Success**  
   Let \(S(C)\) be the probability that a randomly sampled solution from the model’s distribution satisfies all predicates.  The verified score estimates \(E[S(C)]\), which is the true *expected correctness* of the LLM on that task.

### Non‑obvious Insight  
Most people treat a single pass/fail test as proof of correctness, but **verification collapses the infinite solution space into a finite decision problem**.  The key insight is that *verified scores are essentially empirical estimates of the model’s posterior over correct solutions*.  Therefore, improvements in verified scores reflect genuine gains in the LLM’s ability to reason about constraints—not just its language fluency.

> **In short:** Verified Scores on Claude Code equal the probability that a randomly drawn output from Claude satisfies all formal SWE‑Bench specifications, estimated by exhaustive testing. This bridges natural‑language generation with rigorous software correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
