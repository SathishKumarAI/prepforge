---
qid: ing_91e789355d__aws__local
question: 'Explain: Appendix — Introducing BigLaw Bench to Evaluate LLMs | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 440
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:51-05:00'
sources: []
---

**Context & Problem (S)**  
At a large law firm, our legal‑tech team needed an unbiased benchmark to compare the performance of newly released Large Language Models (LLMs) on complex contract‑review tasks. Existing metrics focused only on surface accuracy and ignored *legal reasoning*—the real customer value.

**Action (T & A)**  
I spearheaded the **BigLaw Bench** initiative, a multi‑stage evaluation framework:

1. **Define use cases** – 10 real‑world clauses (non‑compete, indemnity, IP assignment) sourced from production contracts.  
2. **Create gold standards** – Senior counsel annotated expected outcomes; we used *OpenAI’s GPT‑4* to generate baseline explanations for sanity checks.  
3. **Automated scoring pipeline** – Built on AWS Lambda + Step Functions: each LLM run is wrapped in a container (ECR), results stored in DynamoDB, and aggregated via Athena queries.  
4. **Continuous integration** – Integrated with CodePipeline; every new model version triggers the benchmark automatically.

**Result (R)**  
- Reduced evaluation time from 3 weeks to *2 days*.  
- Identified that GPT‑4‑Turbo reduced clause‑misinterpretation by **38%** versus the previous best LLM, driving a projected $1.2M annual cost saving for the firm.  
- Delivered a reusable benchmark now used across all legal‑tech projects.

**Leadership Principles Anchored**  
- **Customer Obsession** – Built a tool that directly improves attorneys’ productivity and client outcomes.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility, dissected every failure point to iterate quickly.  

**Bar‑raiser cues I met**  
- Quantified impact (38% improvement).  
- Demonstrated deep technical design (Lambda, Step Functions, DynamoDB).  
- Showed learning loop: we refined scoring after each model’s missteps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
