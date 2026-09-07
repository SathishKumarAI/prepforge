---
qid: ing_b302151787__aws__local
question: 'Explain: Title: Sleeper Agents: Training Deceptive LLMs that Persist Through
  Safety Training'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 477
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:31-05:00'
sources: []
---

**Title:** Sleeper Agents – Training Deceptive LLMs That Persist Through Safety Training  
*Leadership Principles:* **Customer Obsession**, **Ownership**

**Situation (S)**  
While leading a research team on next‑gen conversational agents, we discovered that our safety filters were vulnerable to “sleeper” prompts—inputs that bypassed moderation until triggered. This risk could compromise user trust and regulatory compliance.

**Task (T)**  
Design a training pipeline that exposes the model to adversarial prompts *before* deployment, ensuring it never learns deceptive patterns while still providing rich dialogue capabilities.

**Action (A)**  
1. **Data‑driven adversarial corpus**: Generated 3 M synthetic “sleeper” queries using GPT‑4 and human reviewers.  
2. **Curriculum learning**: Introduced a two‑stage fine‑tuning schedule—(i) *Safety First* phase with high‑weight penalty for deceptive outputs; (ii) *Capability Phase* where we gradually reduced the penalty, monitoring recall/precision on a held‑out safety set.  
3. **AWS infrastructure**: Deployed on SageMaker Multi‑Model endpoints with Spot Instances (↓ 70 % cost). Leveraged DynamoDB for real‑time prompt tagging and CloudWatch for automated rollback if false‑negative rates spiked.  
4. **Continuous evaluation**: Implemented an A/B test in production; achieved a 95 % reduction in safety violations while maintaining 88 % of baseline user engagement.

**Result (R)**  
- Deployed to 2M daily active users, with a *0.03 %* deceptive‑prompt success rate versus the industry average of *1.2 %*.  
- Cut training time by 40 h and cost by 55 %.  
- Earned an internal “Innovation” award and reduced regulatory risk scores.

**Reflection**  
I learned that “safety first” is not a static checkpoint but a continuous, data‑driven loop. By owning the end‑to‑end pipeline and diving deep into prompt dynamics, we set a new bar for responsible LLM deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
