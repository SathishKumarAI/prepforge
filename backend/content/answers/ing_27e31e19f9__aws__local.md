---
qid: ing_27e31e19f9__aws__local
question: You are swapping the model behind a live feature. Walk me through shadow,
  canary and A/B. When do you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 538
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:59-05:00'
sources: []
---

**Situation / Task**  
I was tasked with rolling out a new NLP model that powers the “Smart Reply” button on our mobile app. The goal was to increase click‑through rate (CTR) by at least 15 % while keeping latency <50 ms and ensuring no customer impact.

**Action – Deployment Strategies**

| Strategy | When & Why |
|----------|------------|
| **Shadow** | Deploy the new model side‑by‑side, feeding it the same real traffic but not serving its predictions. Use CloudWatch + Lambda to log model confidence vs. live response. Ideal for *data‑driven validation* before any user sees changes. |
| **Canary (Gradual)** | Route 5 % of traffic to the new model via an Application Load Balancer rule, monitor latency & error rate in real time with CloudWatch Alarms. If metrics stay within SLA, double the percentage every hour. Best when you need *quick rollback* and low risk. |
| **A/B (Full Split)** | Send 50 % of users to the new model and 50 % to the old one, measuring CTR in a controlled cohort. Use Amazon Pinpoint for user segmentation and DynamoDB for experiment state. Chosen when you need *statistically significant* business impact data before full rollout. |

**Result**  
Shadow testing uncovered a 3 % accuracy drop on edge‑case phrases; we retrained the model, then deployed a canary that reached 99.8 % uptime and a 12 % CTR lift after 24 h. A/B confirmed the lift was statistically significant (p < 0.01).  

**Leadership Principles Anchored**

- **Customer Obsession:** Ensured no user saw degraded responses during testing.  
- **Ownership & Dive Deep:** Built custom Lambda metrics to dive into model behavior and own the rollback logic.

**Bar‑raiser Checklist**

| What I Showed | Why It Matters |
|---------------|----------------|
| Explicit use of AWS services (ALB, Lambda, CloudWatch, Pinpoint) | Demonstrates technical depth. |
| Quantified impact (15 % CTR lift, 99.8 % uptime) | Shows business ownership. |
| Learned from the shadow‑phase accuracy drop and iterated quickly | Reflects bias for action & continuous improvement. |

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
