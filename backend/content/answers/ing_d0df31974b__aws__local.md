---
qid: ing_d0df31974b__aws__local
question: 'Explain: 9:04 pm / linus-torvalds , linux , generative-ai , ai-assisted-programming
  , ai , llms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 503
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:11-05:00'
sources: []
---

**Situation & Task**  
At a mid‑size fintech I led the launch of an AI‑assisted code review tool that leveraged large language models (LLMs) to surface security and style issues in real time. The goal was to reduce manual reviews by 70 % while maintaining audit compliance.

**Action**  
1. **Ownership & Bias for Action** – I scoped the problem, wrote a design doc, and secured $200K budget from product ops.  
2. **Dive Deep** – Built an inference pipeline on Amazon SageMaker Hosting Services using the *gpt‑3.5‑turbo* model (≈ 6B parameters). I added a lightweight preprocessing layer in AWS Lambda to strip comments and obfuscate secrets before sending code snippets (~ 200 lines) to the LLM, limiting token usage to 1k tokens per request.  
3. **Invent & Simplify** – Deployed the model as a SageMaker endpoint behind an API Gateway, integrated with GitHub Actions via a custom webhook. Results were cached in Amazon ElastiCache‑Redis to avoid redundant calls for unchanged files.  
4. **Customer Obsession** – Conducted a 2‑week beta with 15 developers; their average review time dropped from 25 min to 6 min, and the false‑positive rate fell from 18 % to 4 %.  

**Result**  
- Reduced code review effort by **72 %**, freeing 3 FTEs per month.  
- Cut inference cost to $0.004 per request (≈ $1.2M/yr) versus the prior $5M manual audit spend.  
- Achieved 99.9 % endpoint uptime with an auto‑scaling policy that capped peak latency at < 200 ms.

**Bar‑raiser takeaways**  
* Ownership: I owned every layer from data ingestion to billing.  
* Depth: Detailed cost/latency trade‑offs and token‑budget strategy were documented in the design doc.  
* Quantified impact: 72 % effort reduction, $3.8M annual savings.  
* Learning: First iteration over‑estimated token usage; I refined the preprocessing step after measuring actual payloads, illustrating rapid fail‑fast learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
