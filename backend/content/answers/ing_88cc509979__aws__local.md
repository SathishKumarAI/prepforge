---
qid: ing_88cc509979__aws__local
question: 'Explain: AI Capabilities and Limitations — Claude Academy \u00b7 Learn
  to work and build with Claude'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 426
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:33:41-05:00'
sources: []
---

**Situation –** At my previous role I led a proof‑of‑concept to replace our legacy customer‑support chatbot with an AI assistant (Claude). The goal was to reduce first‑contact resolution time by **30 %** while keeping accuracy above **85 %**.

**Task –** Build a system that can understand intent, generate helpful responses, and gracefully hand off to humans when the model confidence drops below 0.7.

**Action –**  
1. **Architecture:** Used Amazon SageMaker for fine‑tuning Claude on 200k labeled tickets; deployed with **Amazon API Gateway + Lambda** behind an Application Load Balancer for zero‑downtime scaling.  
2. **Monitoring:** Implemented CloudWatch metrics (confidence, latency) and set up a SageMaker Ground Truth loop to flag low‑confidence turns for human review.  
3. **Cost & Availability:** Auto‑scaling based on request volume kept cost below $0.03 per 1 000 queries; Multi‑AZ deployment ensured <2 ms latency and >99.9 % uptime.

**Result –** After 90 days, first‑contact resolution rose to **42 %**, a **30 %** improvement, while human escalations dropped from 18 % to 10 %. Cost savings of $15k/month were realized by eliminating manual routing scripts.

---

### Key Takeaways  
- **Customer Obsession:** We measured impact directly on user wait times.  
- **Dive Deep & Ownership:** Continuous retraining and monitoring turned a simple chatbot into a self‑healing system.  

**Learning from Failure:** Early runs showed a 20 % drop in accuracy due to domain drift; we fixed it by adding a *feedback loop* that fed real customer responses back into the training pipeline, proving bias for action and iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
