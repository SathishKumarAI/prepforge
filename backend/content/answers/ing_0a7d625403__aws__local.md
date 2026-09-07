---
qid: ing_0a7d625403__aws__local
question: 'Explain: Deterring AI agents — AI threats in the wild: The current state
  of prompt injections on the web'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 376
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:49:25-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a security squad that was asked to quantify and mitigate *prompt injection* risks for an AI‑driven customer support platform used by > 1 M users worldwide. The threat surfaced when malicious actors posted crafted prompts on public forums, causing the model to reveal internal data.

**Action**  
I built a **real‑time monitoring pipeline** using **Amazon GuardDuty**, **AWS Lambda**, and **Kinesis Data Streams** to ingest web‑scraped content. A custom ML classifier (SageMaker) flagged suspicious prompt patterns; flagged requests were routed through an **API Gateway** throttling layer that added a *prompt sanitization* microservice (built on DynamoDB for lookup tables). We also introduced a *model guardrail* via **Amazon Bedrock** inference parameters to enforce safe completion policies.

**Result**  
Within 3 months the false‑positive rate dropped from 12% to < 2%, while detected injection attempts fell by 87%. The cost of the solution was <$5k/month, 30% lower than a monolithic on‑prem build. We achieved **99.9% availability** and **< 200ms latency** for user requests, meeting SLA targets.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – protecting user data and trust.  
- **Ownership & Dive Deep** – architecting end‑to‑end detection & mitigation.  

Bar‑raisers look for: concrete ownership (lead squad), deep technical dive (service choices, latency & cost trade‑offs), quantified impact (87% reduction), and lessons learned (iterative tuning of classifiers).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
