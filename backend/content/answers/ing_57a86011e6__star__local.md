---
qid: ing_57a86011e6__star__local
question: 'Explain: Local and CI — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 357
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:22:55-05:00'
sources: []
---

**Situation**  
In my last role I built a conversational agent that pulled data from multiple APIs and had to be deployed in real‑time customer support. Our QA team was frustrated because unit tests were flaky: sometimes the model returned the wrong intent, other times it hit rate limits on external services.

**Task**  
I needed to create a reliable testing pipeline that could catch semantic drift and performance regressions before each release, without blocking developers from iterating quickly.

**Action**  
First, I set up **local testing** using LangWatch’s mock‑context feature. Developers run the agent locally against a curated JSON dataset of user utterances; LangWatch records intent predictions, response quality scores, and latency, comparing them to baseline metrics stored in a local SQLite DB. Next, I integrated LangWatch into our CI workflow on GitHub Actions. Every pull request triggers an automated test that spins up a sandboxed container with the same mock data but also injects live‑API stubs via WireMock. The CI job runs a full evaluation script: it measures intent accuracy (target >92%), response relevance (BLEU score), and end‑to‑end latency (<200 ms). If any metric falls below threshold, the PR is blocked.

**Result**  
The dual approach cut regression bugs by 75% and reduced QA turnaround from 3 days to 6 hours. Developers could iterate locally with instant feedback, while CI ensured production stability. I learned that combining deterministic local tests with realistic CI simulations gives the best of both worlds for AI agent reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
