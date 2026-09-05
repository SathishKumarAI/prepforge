---
qid: ing_ad418b60bc__star__local
question: 'Explain: Set environment variables first — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 380
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:18:36-05:00'
sources: []
---

**Situation:**  
When I joined a startup building an LLM‑driven recommendation engine, we had to run continuous evaluation tests on our models. The test suite used Langwatch for monitoring and Langfuse for tracing, but the first runs failed because API keys were missing from the environment.

**Task:**  
I needed to set up a reliable, repeatable process so that every CI pipeline, local developer machine, and staging server could run evaluations without manual intervention, while keeping secrets secure.

**Action:**  
1. I created a `.env.example` file listing all required variables: `LANGWATCH_API_KEY`, `LANGFUSE_PROJECT_ID`, `LANGFUSE_SECRET`.  
2. Using Docker Compose, I added a `secrets` section that mounted the real `.env` file at `/run/secrets/ai-evals.env` and configured the container to load it with `dotenv`.  
3. In our CI workflow (GitHub Actions), I stored the secrets in the repository settings and used the `actions/setup-dotenv@v1` step to inject them into the job environment before running `pytest -m evals`.  
4. I wrote a small Python helper that validates presence of all env vars at startup, raising clear errors if any were missing.

**Result:**  
After implementing this, evaluation runs went from 60 % failures due to missing keys to 100 %. The CI pipeline now completes in under 5 minutes per test batch, and we logged a 30 % reduction in manual setup time for new developers. I learned that a disciplined env‑var strategy not only prevents runtime errors but also speeds up onboarding and ensures consistent evaluation metrics across environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
