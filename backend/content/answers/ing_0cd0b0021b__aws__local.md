---
qid: ing_0cd0b0021b__aws__local
question: In this round you can use a coding agent, and we'll be watching how you
  use it. How do you approach that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 410
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:54:36-05:00'
sources: []
---

**S – Situation:**  
At my last role I was tasked to prototype a real‑time sentiment analysis engine for millions of customer reviews, but the team lacked deep NLP expertise and we had only two weeks.

**T – Task:**  
I decided to use an open‑source *coding agent* (OpenAI Codex) as a rapid prototyping tool while ensuring production quality and scalability on AWS.

**A – Action:**  
1. **Requirement Clarification** – Defined throughput (10 k reviews/sec), latency (<200 ms), and accuracy (>85% F1).  
2. **Design** – Built a stateless Lambda function that pulls batches from SQS, calls the coding agent to generate a fine‑tuned HuggingFace model, and writes results to DynamoDB.  
3. **AWS Services** – Lambda (scales to 10k concurrent invocations), Step Functions (orchestrate retries), Amazon SageMaker for hosting the final model, CloudWatch for monitoring, and Cost Explorer to keep spend <$5/day.  
4. **Dive Deep & Ownership** – I wrote unit tests for the agent’s code generation, logged all agent prompts/outputs, and performed a cost‑benefit analysis that showed a 40% reduction in engineering hours versus manual coding.

**R – Result:**  
The prototype processed 12 k reviews/sec with 87% F1 accuracy. Deployment to production cut feature rollout time from 6 weeks to 2 weeks, saving the company ~$300K annually.  

*Leadership Principles:* **Ownership**, **Dive Deep**, **Bias for Action**. The bar‑raiser will notice my end‑to‑end ownership, quantitative impact, and lessons learned when the agent produced a buggy prompt (I added validation logic, preventing future failures).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
