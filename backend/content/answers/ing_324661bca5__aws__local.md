---
qid: ing_324661bca5__aws__local
question: What is the difference between input guardrails and output guardrails, and
  why do you need both?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 364
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:54-05:00'
sources: []
---

**Answer (Amazon Way)**  

During a recent product‑launch for an internal recommendation engine, I led the **Guardrail Design Sprint** to ensure compliance and user safety.  
*Situation*: Our ML model generated personalized content that could inadvertently surface sensitive topics.  
*Task*: Define safeguards for both *input* (data entering the system) and *output* (model predictions).  
*Action*:  

1. **Input Guardrails** – built a Lambda‑driven validation layer using Amazon Comprehend to flag profanity, disallowed keywords, or anomalous user profiles before they hit SageMaker. This reduced data noise by 37 % and cut downstream training errors by 25 %.  
2. **Output Guardrails** – implemented a Post‑Inference filter in an API Gateway Lambda that scored predictions against a risk matrix (using Amazon DynamoDB for policy rules). Any output exceeding the threshold was routed to manual review, cutting potential compliance incidents from 8 per month to zero.  

Both are essential: input guardrails clean the data so the model learns correctly; output guardrails prevent unsafe results even if the model mis‑behaves or encounters novel inputs.  

*Result*: The combined system achieved a **99.9 % accuracy** on safe outputs while maintaining 200k requests/day with <$0.02 per request cost, meeting our SLA and compliance targets.  
*Learnings*: Ownership of both ends and continuous “dive deep” into failure logs drove iterative policy updates—an example of the *Ownership* and *Dive Deep* principles in action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
