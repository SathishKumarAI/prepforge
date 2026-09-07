---
qid: ing_a3ba19304a__aws__local
question: You want to change your agent's system prompt. How do you ship it without
  finding out from customers that you broke something?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 349
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:37:23-05:00'
sources: []
---

**Situation / Task**  
I was responsible for a conversational AI used by 200K daily users in a regulated financial app. The product team wanted to update the system prompt to improve compliance tone without risking user confusion or policy violations.

**Action**  
1. **Ownership & Bias for Action** – I drafted an automated feature‑flag rollout plan and set up a canary test on 5 % of traffic.  
2. **Dive Deep** – Built a monitoring stack (CloudWatch, X-Ray, SageMaker Model Monitor) to capture intent‑matching accuracy, sentiment drift, and error rates in real time.  
3. **AWS Services** – Deployed the new prompt via an `AppConfig` feature flag, triggered Lambda for on‑demand inference, and logged all inputs/outputs to a Kinesis stream for audit.  
4. **Customer Obsession** – Created a hidden A/B experiment that surfaced the updated prompt only in the UI but kept the original in the underlying model; users saw no difference until we validated quality.

**Result**  
The canary showed a 0.3 % drop in intent accuracy (below our SLA of 1 %) and sentiment scores improved by 12 %. After scaling to 100 %, the feature was fully activated with zero user‑reported issues, saving $4k/month in support tickets. The experiment reinforced my learning: always surface changes behind a flag and monitor metrics before full release.

**Bar‑raiser takeaways** – ownership of risk, deep metric analysis, quantified impact, and rapid learning from small failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
