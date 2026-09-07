---
qid: ing_c20d2e45e6__aws__local
question: 'Explain: Ollie: Write Fixes Directly to Your Codebase'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 620
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:41:40-05:00'
sources: []
---

**Situation (S)**  
At my previous role we had a monorepo with 12 k lines of TypeScript and an automated QA pipeline that ran nightly. Bugs were flagged in the CI logs but developers still had to manually cherry‑pick the suggested patch, which took ~15 min per issue and caused backlog spikes during release cycles.

**Task (T)**  
I was tasked with reducing the mean time to resolve a defect by 70% while keeping merge conflicts below 5%.

**Action (A)**  
I introduced **Ollie – “Write Fixes Directly to Your Codebase”**.  
1. **Requirements & Design**:  
   * Input: CI failure log + failing test stack trace.  
   * Output: A pull‑request with minimal, targeted changes.  
2. **AWS Services Used**  
   * **Lambda** – stateless code‑generation engine (Python + OpenAI API).  
   * **Step Functions** – orchestrate validation and approval workflow.  
   * **CodeCommit** – source repo; Lambda writes commits via the GitHub API.  
   * **SQS** – buffer CI alerts to avoid rate limits.  
3. **Scalability & Availability**  
   * Each Lambda runs in a VPC with 10 ms cold‑start, auto‑scales with SQS length.  
   * Dual‑AZ deployment for high availability; SQS DLQ captures failures.  
4. **Cost Trade‑offs**  
   * $0.0000167 per Lambda invocation + OpenAI token cost (~$0.02/token).  
   * For ~200 fixes/month, <$15/month vs. manual effort (~$3k/month in dev hours).  

**Result (R)**  
Within 6 weeks:  
* Mean time to resolve a defect dropped from **45 min** to **12 min** (+73% reduction).  
* Merge conflicts fell to **2%** of PRs, and the CI pass rate improved from 91% to 98%.  
* The team reported higher confidence in code quality and freed ~15 dev‑hours per week for feature work.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivering faster, cleaner fixes directly benefits internal “customers” (our own developers).  
- **Ownership & Dive Deep** – I owned the end‑to‑end pipeline, dug into Lambda cold‑starts, and iterated on cost vs. speed trade‑offs.

### What a Bar‑Raiser Listens For
- Quantified impact (time saved, conflict rate).  
- Depth of technical understanding (service choices, scalability).  
- Learning from failures – we instrumented the DLQ to analyze why some fixes failed, leading to a 10% improvement in future suggestions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
