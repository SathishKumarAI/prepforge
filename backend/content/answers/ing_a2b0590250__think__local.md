---
qid: ing_a2b0590250__think__local
question: How do you put eval gates into CI/CD for prompts and model versions?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 519
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:50:15-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   * Identify what “eval gates” mean: automated checks (unit tests, sanity, safety, performance).  
   * Assume you have a versioned prompt repo and model artifacts stored in a registry.  
   * Assume CI/CD tooling (GitHub Actions, GitLab CI, Jenkins) is already in place.

**2. Adopt a layered mental model**  
   * **Prompt layer** – static text, token count, syntax.  
   * **Inference layer** – model checkpoint, hyper‑parameters, runtime metrics.  
   * **Evaluation layer** – safety filters, correctness tests, latency & cost checks.  
   Treat each layer as an independent gate that must pass before promotion.

**3. Step‑by‑step reasoning**  
   1. **Trigger**: Pull request or push to a branch.  
   2. **Build**: Lint prompts (e.g., `promptlint`), build model image/registry tag.  
   3. **Run unit tests**: Verify prompt syntax, token limits, placeholder resolution.  
   4. **Run integration tests**: Spin up a sandbox inference server with the new model; send test inputs and capture outputs.  
   5. **Evaluation scripts**: Apply safety classifiers, compute perplexity or BLEU against golden responses.  
   6. **Gate decision**: If any metric falls below threshold → fail pipeline, otherwise mark as “green”.  
   7. **Promotion**: Tag model and prompt versions; push to production environment.

**4. Common traps to avoid**  
   * Mixing unit & integration tests in the same job – leads to long runtimes.  
   * Hard‑coding thresholds without a review board.  
   * Ignoring data drift: always re‑run evals against current test set.  
   * Overlooking environment differences (dev vs prod) that can cause false negatives.

**5. Sanity‑check & communicate**  
   * Verify that each gate produces deterministic, reproducible results.  
   * Log all metrics to a dashboard for visibility.  
   * In PR comments, explain which gate failed and provide actionable feedback.  

By structuring CI/CD around these layers and gates, you ensure that every new prompt or model version meets safety, quality, and performance criteria before it reaches users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
