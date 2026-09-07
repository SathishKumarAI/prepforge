---
qid: ing_b46ea5ce05__aws__local
question: 'Explain: How do you evaluate an agent? Compare trajectory evals and final-outcome
  evals.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 404
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:12:36-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the evaluation framework for a reinforcement‑learning chatbot that needed to satisfy both *customer obsession* and *deliver results*. The goal was to decide whether to adopt **trajectory‑based** (step‑by‑step) or **final‑outcome** (end‑state) metrics.

**Action – Technical Design**  
1. **Requirements** – Accuracy of intent recognition, user satisfaction score (CSAT), and time‑to‑resolution.  
2. **Trajectory evals**: Use Amazon SageMaker Processing to replay recorded sessions, compute per‑turn BLEU & perplexity, and aggregate into a weighted loss.  
3. **Final‑outcome evals**: Deploy the agent on an A/B test in CloudFront + API Gateway; capture CSAT via DynamoDB, calculate mean time to resolution (MTTR).  
4. **Scalability/Availability** – Serverless (Lambda + Step Functions) ensures 99.9% uptime and auto‑scaling with minimal cost ($0.0000167 per invocation).  
5. **Trade‑offs** – Trajectory gives granular feedback (∼1 k turns/day) but can overfit; final outcome reflects real user experience but has higher variance.

**Result**  
After a 4‑week run, the hybrid approach (trajectory pre‑filter + final‑outcome post‑hoc) reduced MTTR by **23%** and increased CSAT from 78 % to 86 %. The cost stayed under $2k/month.  

**Bar‑raiser Takeaway**  
I demonstrated *ownership* by owning the full pipeline, *dive deep* into metric trade‑offs, quantified impact with clear numbers, and learned that combining both evals yields a robust, customer‑centric model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
