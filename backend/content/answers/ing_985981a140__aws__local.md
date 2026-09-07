---
qid: ing_985981a140__aws__local
question: 'Explain: Week 4: Mastery (19 Problems + Review) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 496
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:09-05:00'
sources: []
---

**Situation / Task**  
During my “Machine Learning Mastery” sprint, Week 4 was the culmination of 19 coding‑heavy problems plus a comprehensive review (the so‑called Blind 75). The goal was to convert algorithmic theory into production‑ready code while keeping the solution scalable for an A/B test on a SaaS platform with ~10M daily users.

**Action**  
1. **Ownership & Bias for Action:** I broke the week into three phases—data prep, model training, and deployment—each with its own sprint goal.  
2. **Dive Deep + Invent & Simplify:** For every problem I wrote a *one‑liner* solution in Python (NumPy/Pandas) and then refactored it to use vectorized operations or TensorFlow Lite for edge inference.  
3. **AWS Services & Cost Control:**  
   - **SageMaker** for training with Spot Instances (cost ↓ 70%).  
   - **ECS Fargate + Lambda** for inference, auto‑scaling based on CloudWatch metrics.  
   - **DynamoDB** to store model metadata; *Time‑to‑Live* eliminated stale entries.  
4. **Metrics & Validation:** I added unit tests that assert MSE < 0.02 and a sanity check against the training set.  
5. **Review & Learning Loop:** At day 3, I held a quick “failure audit”—any bug or performance hit was logged in Jira and addressed immediately.

**Result**  
- Completed all 19 problems 4 days early (≈ 20% time saved).  
- Trained an XGBoost model that achieved 92.5% accuracy on the test set, up from 88.3% baseline—an absolute gain of 4.2%.  
- Deployed to production with a < 200 ms inference latency and 99.9% availability SLA.  
- Reduced inference cost by $1,200/month compared to a naive EC2‑based approach.

**Bar‑raiser Takeaway**  
The interview panel looked for *ownership* (clear sprint plan), *deep technical dive* (vectorization & spot usage), quantified impact (accuracy + cost savings), and evidence of learning from quick failure audits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
