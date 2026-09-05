---
qid: ing_88c19b9ad1__eli5__local
question: 'Explain: AWS Step Functions — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 222
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:13:11-05:00'
sources: []
---

Imagine you’re running a kitchen where every dish (task) needs to be prepared in a specific order—first chop onions, then sauté them, next add sauce, and finally plate the meal. **AWS Step Functions** is like a smart recipe book that tells each cooking station exactly what to do and when, but it does this without you having to keep the kitchen staff (servers) on shift all the time.

In technical terms, Step Functions orchestrates **serverless functions** (small, self‑contained pieces of code). It defines a *state machine*—a flow chart of steps that can run in parallel or one after another. Each step runs as an AWS Lambda function or other service, and when it finishes, the recipe book automatically triggers the next step. If something goes wrong, Step Functions can retry, skip, or route to error‑handling logic—all without you provisioning or managing any servers. This lets developers build complex workflows quickly while paying only for the exact compute time each step consumes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
