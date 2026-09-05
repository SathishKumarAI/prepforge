---
qid: ing_fe1f69c36d__star__local
question: 'Q88: Agent-as-judge vs LLM-as-judge - when does the upgrade pay off, and
  what new failure modes does it introduce?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 387
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:57:01-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we had an internal compliance bot that used an LLM to evaluate loan applications and flag red‑flags for human reviewers. By the end of Q2, our false‑positive rate was 18%, inflating review time by ~40 hours per week.

**Task:**  
I needed to reduce the false‑positive rate below 10% while keeping latency under 200 ms so that the bot could run in real time on our serverless platform.

**Action:**  
I prototyped an *Agent-as-Judge* architecture: a lightweight rule engine (Python + PyKE) wrapped around the LLM. The agent first applied deterministic policy checks (e.g., KYC thresholds, AML watchlists). Only if those passed did it invoke the LLM for nuanced risk scoring. I also added a confidence‑based fallback that sent borderline cases to a second LLM fine‑tuned on historical audit data. We deployed this on AWS Lambda with a 512 MB memory allocation and used OpenAI’s gpt‑4o-mini for the LLM calls.

**Result:**  
The false‑positive rate dropped to 7%, cutting review hours by 55% (≈22 hrs/week). Latency stayed at ~180 ms. However, we discovered a new failure mode: when the rule engine incorrectly flagged an edge case, the LLM never got a chance to override it, leading to missed approvals. We mitigated this by adding a periodic audit of rule mismatches and re‑training the agent’s policy layer every two weeks. The experience taught me that upgrading to Agent-as-Judge pays off when deterministic checks can prune most noise, but careful monitoring is essential to avoid hard‑coded blind spots.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
