---
qid: ing_7c26292c67__aws__local
question: 'Explain: Types of Guardrails — GitHub - NVIDIA-NeMo/Guardrails: NeMo Guardrails
  is an open-source toolkit for easily adding programmable guardrails to LLM-based
  conversational systems. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 388
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:07-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:*  
While leading the migration of our internal chatbot from a monolithic Flask app to an LLM‑powered service, I noticed frequent hallucinations that risked user trust.

*Task:*  
Implement programmable guardrails so every response met compliance and quality thresholds before reaching the end user.

*Action:*  
I studied NVIDIA’s NeMo Guardrails library. The core idea is **policy layers**—rules written in a declarative DSL that intercept, modify, or block LLM outputs. I:

1. **Defined policies** for factuality (cross‑check with DynamoDB knowledge base), safety (block toxic content via Comprehend moderation), and privacy (redact PII using KMS‑encrypted regex patterns).
2. Deployed the guardrail engine as a **Lambda@Edge** function in front of an API Gateway that fronts a SageMaker endpoint hosting the LLM.
3. Configured **SQS + Step Functions** to queue failed responses for human review, ensuring no loss of data and enabling continuous learning.

*Result:*  
Within two weeks, hallucination rate dropped from 18 % to <2 %, user satisfaction scores rose by 15 pts (NPS), and we cut manual review time by 70 %. The guardrail cost was <$0.02 per inference due to serverless scaling, keeping the overall latency under 350 ms.

*Learnings:*  
I discovered that policy granularity directly affects both safety and performance; too many nested checks increased cold‑start times. By iterating on a single “factuality” rule first, I balanced speed and reliability—an approach that now scales to our global product line.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
