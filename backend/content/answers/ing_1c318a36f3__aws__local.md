---
qid: ing_1c318a36f3__aws__local
question: 'Explain: Tell me about a time a prompt change broke production.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 354
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:29:50-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I managed the “Chatbot‑Assist” microservice that powered our e‑commerce support chat. A new LLM prompt was pushed to improve sentiment detection. After deployment, we saw a 35 % spike in error‑rate for “refund request” intents.

**Action (A)**  
I immediately rolled back the prompt and opened a post‑mortem ticket.  
1. **Dive deep** – I compared request logs before/after the change using CloudWatch Logs Insights; identified that the new prompt was re‑ranking “refund” with a lower confidence score, causing fallback to generic responses.  
2. **Ownership & Bias for Action** – I built an A/B test in Amazon SageMaker Hosting Services, deploying both prompts behind a weighted ALB target group (80/20).  
3. **AWS services** – CloudWatch Alarms monitored intent‑confidence thresholds; Lambda automatically switched traffic back if confidence < 0.7.  

**Result (R)**  
Within 12 hrs the new prompt was fully validated, reducing error‑rate by 28 % and restoring a 15 % increase in user satisfaction scores (CSAT). The incident report also introduced a “prompt change guardrail” that requires a 48 hr SLA for LLM prompt updates, cutting future incidents by 90 %.  

**Learning**  
I learned that even small wording shifts can cascade through inference pipelines; rigorous A/B testing and automated rollback are non‑negotiable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
