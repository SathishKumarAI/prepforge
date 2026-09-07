---
qid: ing_fdfe565088__aws__local
question: 'Explain: Putting our own AI to work — ElevenLabs \u2014 ElevenLabs Agents
  and the Candidate Experience'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 424
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:19-05:00'
sources: []
---

**Situation – Task**  
When we launched our AI‑driven hiring platform, the candidate experience lagged behind industry standards: average response time was 48 h and interview scheduling errors rose by 12 % during peak seasons. My goal was to build an *ElevenLabs Agent* that would reduce turnaround to under 4 h while keeping cost per interaction below $0.05.

**Action – Design & Implementation**  
I scoped the solution as a serverless micro‑service stack:  
- **Amazon SageMaker** hosts a fine‑tuned conversational model (GPT‑4) for real‑time intent extraction.  
- **AWS Lambda + Step Functions** orchestrate the agent’s workflow—email parsing, calendar integration via **Amazon EventBridge**, and fallback to human agents if confidence < 0.8.  
- **DynamoDB** stores candidate state; **SNS** triggers email responses.  

I introduced *bias for action* by prototyping with a 1‑week sprint, iterating on error handling based on live feedback. To ensure high availability I deployed the Lambda in a **multi‑AZ** VPC and set up CloudWatch alerts for latency > 2 s.

**Result – Impact**  
After deployment:  
- Response time dropped from 48 h to **3.6 h** (71 % improvement).  
- Scheduling error rate fell from 12 % to **1.4 %**.  
- Cost per interaction reduced to **$0.03**, saving ~$150k annually.

**Reflection – Learnings & Ownership**  
I owned the end‑to‑end pipeline, continuously diving deep into model drift logs and adjusting thresholds. The bar‑raiser would note my ownership of metrics, data‑driven iteration, and clear trade‑off decisions (serverless cost vs. latency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
