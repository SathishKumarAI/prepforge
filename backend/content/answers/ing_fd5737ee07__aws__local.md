---
qid: ing_fd5737ee07__aws__local
question: What are you building? — Pydantic AI | Pydantic Docs
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 467
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:50:47-05:00'
sources: []
---

**Situation / Task**

When I joined Pydantic, the docs team was overwhelmed by 12 k+ lines of handwritten examples that were hard to keep in sync with the evolving library. The product owner asked me to build an AI‑powered documentation assistant that could auto‑generate and validate code snippets, ensuring they compile against the latest schema definitions.

**Action**

1. **Ownership & Bias for Action** – I scoped a 4‑week sprint, defined the MVP, and set up a lightweight CI pipeline in GitHub Actions.
2. **Dive Deep & Technical Design**  
   * Used **OpenAI GPT‑4** (via the `openai` Python SDK) to generate snippet drafts from natural language prompts.  
   * Created a **Pydantic validator service** on AWS Lambda, triggered by a CloudWatch Event whenever a PR touched `docs/`.  
   * The Lambda parses the generated code with `pydantic.parse_obj_as`, catches validation errors, and posts a comment back to GitHub via the API.  
3. **Scalability & Cost** –  
   * Lambda concurrency capped at 100; each invocation < 1 s → ~\$0.000016 per run.  
   * GPT‑4 calls are billed by token; we batch prompts (≈30 tokens) to stay under \$20/month for the docs repo.  
   * For high‑traffic periods, we switch to **AWS Step Functions** to orchestrate retries and dead‑letter queues.
4. **Deliver Results & Customer Obsession** – After deployment, snippet errors dropped from 18% to < 2%, cutting manual review time by 70%. Docs readers now get instantly validated examples.

**Result**

- **Metric:** Validation error rate ↓ 18 → < 2 %.  
- **Impact:** Manual QA effort cut 5 h/week → $1,200/month saved.  
- **Learning:** Initial version didn’t account for circular imports; added a static analysis step with `mypy` to catch that—now the system is robust.

This project exemplifies *Ownership*, *Dive Deep*, and *Deliver Results*—core Amazon leadership principles I live by.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
