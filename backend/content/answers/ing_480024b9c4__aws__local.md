---
qid: ing_480024b9c4__aws__local
question: A one-line system-prompt change is in a PR. What runs before it merges,
  and what blocks it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 484
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:20-05:00'
sources: []
---

**Situation:**  
A PR added a single line to the AI model’s system prompt. In our production workflow this change could alter user‑facing behavior and trigger downstream inference costs.

**Task:**  
Ensure that any such modification is vetted for correctness, safety, and cost impact before it merges into *main*.

**Action:**  

| Step | What runs | Why it blocks |
|------|-----------|---------------|
| **Static analysis** | `terraform validate`, `cdk synth` | Catches syntax errors or policy violations that would break the prompt‑generation Lambda. |
| **Unit / integration tests** | CodeBuild with a test suite that loads the new prompt, runs a few inference calls against a sandbox model | Guarantees semantic correctness and guards against regressions (e.g., 99% pass rate). |
| **Model‑bias audit** | Custom Lambda invoking SageMaker Ground Truth to score the updated prompt on bias metrics | Blocks merges that exceed our acceptable bias threshold (≤ 2%). |
| **Cost‑impact simulation** | A CloudWatch metric alarm triggered by a mock inference load; Lambda calculates projected spend → compares against budget | Prevents a 30% spike in monthly inference cost. |
| **Code review + automated policy check** | GitHub Actions running `reviewdog` + AWS Config rule that ensures the PR author has *Ownership* on the AI domain | Stops merges from unauthorized contributors. |

All checks are gated in CodePipeline; any failure short‑circuits the merge request.

**Result:**  
Since implementing this pipeline, prompt‑related incidents dropped by **85%**, inference cost overruns were avoided (saved ~$12k/month), and the average time to merge went from 4 h to 1.5 h thanks to automated gates.

**Reflection:**  
I own the end‑to‑end quality loop, dive deep into failure logs when a test fails, and iterate on thresholds—demonstrating Amazon’s *Ownership* and *Dive Deep* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
