---
qid: ing_fce7d443e5__faang__local
question: 'Explain: Week 2: Code-Based Evals — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 472
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:27:46-05:00'
sources: []
---

**Clarify**  
You want a concise walkthrough of *Week 2: Code‑Based Evaluations* from the AI Evals study guide—i.e., how to design, run, and interpret code‑based prompts that test an LLM’s programming skills. I’ll assume you’re familiar with the overall AI Evals framework (multiple choice, open‑ended, and code) and want a clear plan for this week.

**Approach**  
1. Outline the learning objectives: build evaluators, generate synthetic datasets, run benchmarks, analyze results.  
2. Map out the workflow: prompt design → LLM execution → output capture → automated grading.  
3. Highlight tooling (OpenAI API, LangChain, pytest) and evaluation metrics (accuracy, runtime, memory).  

**Depth**  
- **Prompt Design** – Use minimal‑context, single‑step code tasks; embed clear instructions and expected outputs.  
- **Dataset Generation** – Script a generator that randomizes variable names, edge cases, and input sizes to avoid overfitting.  
- **Execution & Safety** – Sandbox execution (e.g., Docker or `exec` with timeouts) to prevent malicious code.  
- **Grading Logic** – Compare LLM output to reference implementation via AST diff or unit tests; assign a binary pass/fail or graded score.  
- **Metrics** – Compute overall accuracy, average runtime, and failure modes. Report per‑difficulty bucket to spot bias.

**Edge Cases**  
- Infinite loops or crashes → timeout handling.  
- Non‑deterministic outputs (random seeds) → set fixed seeds in prompts.  
- Large output → stream and truncate gracefully.  

**Optimize & Communicate**  
- Cache reference solutions to reduce compute.  
- Parallelize evaluation jobs with a job queue for scalability.  
- Visual dashboards (e.g., Plotly) to track trends over time.  
When presenting, start with the problem statement, show the workflow diagram, then dive into implementation snippets and complexity analysis before summarizing key takeaways. This structure mirrors FAANG interview expectations: clear framing, thoughtful design, technical depth, edge‑case awareness, and actionable improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
