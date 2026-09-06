---
qid: ing_ddb9331727__think__local
question: 'Explain: Cost Model for CI — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 477
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:36:04-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “CI” here?* (Continuous Integration pipeline, not cost‑infrastructure).  
- *Claude Code* refers to the open‑source project that uses OpenAI’s Claude model for code generation.  
- Assume the audience knows basic CI concepts but may not know how AI costs are factored.

**2️⃣ Adopt a layered mental model**  
1. **Infrastructure layer** – servers, containers, networking.  
2. **Service layer** – the AI API (Claude) that actually generates code.  
3. **Operational layer** – CI orchestration tools (GitHub Actions, Jenkins, etc.).  
4. **Cost accounting layer** – how each layer’s spend is measured and attributed.

**3️⃣ Step‑by‑step reasoning**  
- *Identify usage patterns:* number of jobs per day, average run time, average tokens processed by Claude per job.  
- *Map API pricing:* e.g., $0.02/1K tokens for Claude 2.0.  
- *Compute token cost per job:* `tokens_per_job × price_per_token`.  
- *Add infrastructure overhead:* compute‑time on CI runners, storage for artifacts.  
- *Aggregate over period:* multiply by number of jobs, add fixed monthly fees (GitHub Actions free tier limits).  
- *Present a formula:* `Total Cost = Σ_jobs (TokenCost + InfraCost) + FixedFees`.

**4️⃣ Avoid common pitfalls**  
- Don’t double‑count: API cost vs. compute time on CI runner.  
- Ignore cache effects—cached builds reduce token usage.  
- Forget about edge cases like large pull requests that trigger many jobs.

**5️⃣ Sanity‑check & communicate**  
- Verify numbers against a real run (e.g., 10 k tokens → $0.20).  
- Use a simple example: “If we run 100 jobs/day with an average of 5 k tokens, the monthly AI cost is ≈$300.”  
- Summarize in bullet points and offer a quick‑reference spreadsheet or diagram for clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
