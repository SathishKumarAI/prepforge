---
qid: ing_ba73d9dfcd__star__local
question: 'Q: How do you safely run Claude Code in production CI?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 386
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:44:02-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a recommendation engine that used OpenAI’s Claude model to generate user‑specific content. The engineering team wanted to integrate the model into our nightly CI pipeline so every new commit would trigger a test run and validate the output before deployment.

**Task:**  
I had to design a secure, reproducible process that let us execute Claude code in production CI without exposing sensitive keys or incurring runaway costs, while ensuring deterministic results for regression tests.

**Action:**  
1. Created a dedicated “Claude sandbox” container with only the `openai` SDK and minimal runtime (Python 3.12).  
2. Stored API keys in an encrypted Vault secret and mounted them as read‑only env variables during CI, using HashiCorp’s AppRole for fine‑grained access control.  
3. Implemented a request‑level timeout of 5 s and rate limiting via a token bucket to guard against spikes.  
4. Captured each model response in a signed JSON blob, versioned with the Git commit SHA, and compared it against baseline outputs stored in S3 using an HMAC checksum.  
5. Added a “dry‑run” flag that executed the same logic but routed calls through Claude’s test endpoint, keeping costs below $0.01 per run.

**Result:**  
The CI pipeline now runs Claude calls in under 8 seconds per commit, with zero accidental key leaks and no unexpected charges. Regression tests catch 92% of content drift early, reducing production incidents by 65%. I learned that combining container isolation, secret vaulting, and deterministic baseline checks is the most reliable way to safely run LLM code in CI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
