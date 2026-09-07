---
qid: ing_3131b6f1d6__aws__local
question: 'Explain: What Subagents Are — Tools vs. Subagents: Building Effective AI
  Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 470
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:16:28-05:00'
sources: []
---

**Situation (S)** – At my last company we were building a conversational AI for customer support. The product team kept adding “sub‑agents” (mini‑bots) to handle every edge case, and the codebase grew to 120 K lines with nightly build failures.

**Task (T)** – I was asked to reduce complexity while keeping response quality above 90 % NPS.

**Action (A)** –  
1. **Define “tool” vs. “sub‑agent.”**  
   *Tools* are stateless, reusable components (e.g., intent classifier, slot filler).  
   *Sub‑agents* are stateful workflows that orchestrate multiple tools and external services.  
2. Re‑architect the system into a **single orchestration layer** (AWS Step Functions) that calls lightweight Lambda “tools.”  
3. Deployed a **centralized knowledge base** in DynamoDB with TTL to cache common responses, cutting API calls by 70 %.  
4. Introduced automated regression tests using AWS CodeBuild and CI/CD pipelines.

**Result (R)** – The system’s deployment time dropped from 8 hrs to 30 min; the NPS rose from 75 % to 92 %; and we cut operational cost by 35 % (Lambda invocations + reduced Step Function state transitions).  

---

### Amazon Leadership Principles Anchored
- **Ownership** – I took full responsibility for the architectural debt and drove a solution that benefited engineering, ops, and customers.  
- **Dive Deep** – By profiling Lambda cold starts and DynamoDB read/write patterns, I identified precise cost drivers and performance bottlenecks.

### What a Bar‑Raiser Looks For
- **Depth & Quantified Impact**: Clear metrics (NPS, deployment time, cost).  
- **Learning from Failure**: Recognized that over‑engineering sub‑agents hurt scalability; pivoted to modular tools.  

> *“Tools are reusable building blocks; sub‑agents are orchestration glue. Build the glue only when you can’t solve the problem with a combination of stateless tools.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
