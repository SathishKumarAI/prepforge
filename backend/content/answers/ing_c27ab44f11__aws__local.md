---
qid: ing_c27ab44f11__aws__local
question: 'Explain: System Prompt and User Prompt — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 427
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:42:44-05:00'
sources: []
---

**Context Engineering in ML: System vs. User Prompts**

*Situation*: While leading a product‑grade LLM service for our internal analytics platform, we noticed that downstream dashboards were misinterpreting user queries—leading to 18 % error rates and delayed insights.

*Task*: I had to design a prompt‑engineering framework that separates **system prompts** (model behavior) from **user prompts** (query content) so the model stays consistent while still being flexible for end users.

*Action*:  
1. **Architecture** – Built an API gateway (Amazon API Gateway + Lambda) that injects a *system prompt* (“You are a data analyst, always return JSON…”) before passing the user query to Amazon Bedrock’s Anthropic Claude model.  
2. **Context Layer** – Stored reusable system prompts in DynamoDB; versioned via S3, allowing A/B testing of prompt styles.  
3. **Monitoring** – Used CloudWatch metrics and SageMaker Debugger to capture response latency (< 200 ms) and correctness (BLEU‑style score).  
4. **Iterative Tuning** – Ran a *prompt‑search* job on SageMaker, automatically generating variations and scoring them; the top variant reduced error rate from 18 % to 3 %.

*Result*: The system achieved a 94 % accuracy in intent extraction and cut downstream processing time by 32 %. Cost per request stayed below $0.02 due to efficient prompt reuse.

**Leadership Principles Highlighted**  
- **Ownership**: Took full responsibility for end‑to‑end prompt quality.  
- **Dive Deep & Bias for Action**: Deployed automated tuning pipelines and monitored metrics continuously.  

*Bar‑raiser Note*: I demonstrated ownership by iterating on a failing feature, quantified impact with clear metrics, and learned from each prompt failure to refine the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
