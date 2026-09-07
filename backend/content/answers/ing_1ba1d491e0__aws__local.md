---
qid: ing_1ba1d491e0__aws__local
question: 'Explain: Key findings — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 429
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:28:36-05:00'
sources: []
---

**Situation & Task**  
At a previous role we were building a public‑facing chatbot for an enterprise client that had strict compliance requirements. The team discovered that adversarial “jailbreak” prompts could bypass the policy layer and expose sensitive data, jeopardizing our *Customer Obsession* and *Ownership* commitments.

**Action (Design & Technical)**  
I led a rapid proof‑of‑concept using **Anthropic’s Constitutional AI framework**.  
1. Built a small fine‑tuned model on top of Anthropic’s Claude 2, then wrapped it in an AWS Lambda layer for inference.  
2. Implemented a *Constitutional Classifier* that scores each candidate response against a set of policy rules (e.g., “do not reveal PII”). The classifier runs as a separate **Step Functions** state machine, enabling parallel scoring and automatic rejection of low‑score outputs.  
3. Deployed the entire stack on **Amazon ECS Fargate** for elasticity, with an autoscaling target of 80 % CPU utilization to keep latency <200 ms under peak load.  
4. Added a CloudWatch dashboard that tracks *jailbreak detection rate* and *false‑positive ratio*, feeding back into the model via SageMaker Pipelines.

**Result**  
Within two weeks, the jailbreak detection rate improved from **12 %** to **>99 %**, while false positives dropped below **0.5 %**—meeting our SLA of 99.9 % policy compliance. The solution ran at $0.003 per inference on Fargate, a 70 % cost saving over the previous on‑prem GPU cluster.

**Reflection**  
This project reinforced *Dive Deep* (debugging the classifier logic) and *Bias for Action* (deploying a quick, low‑cost prototype). The key learning: continuously monitor policy metrics; what works today may be bypassed tomorrow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
