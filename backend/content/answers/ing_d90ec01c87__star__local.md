---
qid: ing_d90ec01c87__star__local
question: 'Explain: You''re dropped into an unfamiliar multi-file codebase with a
  failing behaviour and an LLM assistant available. Walk me through how you''d fix
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 279
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:42:50-05:00'
sources: []
---

**Situation:** I was handed a 30‑file Python microservice that had just been deployed to production. The API endpoint `/process` started returning 500 errors after a recent dependency bump. No logs were helpful because the stack trace was truncated by our custom error handler.

**Task:** My goal was to identify the root cause, patch it, and get the service back online within the two‑hour incident window while ensuring no new regressions.

**Action:** First I cloned the repo locally, ran `pytest -q`—all tests passed. I then used the LLM assistant to generate a quick diff of the recent commit that introduced the failing dependency. The assistant suggested inspecting the change in `requirements.txt`. It pointed out that `numpy>=1.25` had been added, which is incompatible with our legacy C extension. I rolled back to the previous version via Git and redeployed. To confirm, I used the LLM to craft a minimal reproducer: a script that imported the problematic module and printed its version. The script ran successfully after the downgrade.

**Result:** The service restored 95% of traffic within 45 minutes, and our SLA was maintained. I learned that automated diff analysis can pinpoint problematic dependencies quickly, but always validate with a reproducible test.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
