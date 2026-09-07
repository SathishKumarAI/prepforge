---
qid: ing_3f4cd19d02__aws__local
question: A teammate edited the prompt in production and quality dropped. How do you
  fix the immediate problem and the process problem?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 379
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:48:46-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession* – we can’t let a single mistake hurt user experience; *Ownership* – I take full responsibility for the impact and for preventing recurrence.

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| A teammate accidentally edited a production prompt, causing an 18 % drop in model accuracy (BLEU score fell from 0.82 to 0.68). | Immediate: restore correct prompt and mitigate user impact; Process: prevent future edits. | **Immediate** – Roll back the change via the GitOps pipeline (`git revert` + redeploy), trigger a canary test, and push the fix to all replicas within 5 min. Notify stakeholders through Slack and an incident page. <br>**Process** – Implement “prompt‑as‑code” with immutable tags in S3 (e.g., `prompts/v1_20240907.json`). Add a CodePipeline approval step that requires two reviewers, enforce signed commits, and enable CloudWatch metrics to flag any prompt changes outside the pipeline. | Accuracy restored to 0.82 within 8 min; downtime < 10 s. New guardrails cut accidental edits by **100 %** over the next quarter and reduced incident response time from 45 min to 15 min. |

**Technical stack:** S3 for versioned prompt storage, CodePipeline + CodeBuild for CI/CD, Lambda to auto‑deploy on new versions, CloudWatch Alarms to detect deviations in model scores.

**Bar‑raiser signals I hear:** ownership (I own both the fix and the process), depth (I dug into pipeline logs to find root cause), quantified impact (exact accuracy drop & recovery time), learning from failure (new guardrails).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
