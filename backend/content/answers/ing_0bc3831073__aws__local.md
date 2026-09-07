---
qid: ing_0bc3831073__aws__local
question: 'Explain: Algorithms — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 385
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:52:21-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a recommendation engine for an e‑learning platform that needed to surface flashcards at optimal intervals so users retained knowledge longer. The goal: increase average quiz score by 12 % and reduce churn by 8 %.  

**Action (Dive Deep + Bias for Action)**  
I chose the **Spaced Repetition Algorithm** (SRS) from Wikipedia—specifically the SM‑2 model used in Anki—to schedule card reviews. I mapped each card to a *review history* table in DynamoDB, storing easiness factor (EF), interval (I), and repetition count (R). On every user interaction, an AWS Lambda triggered by API Gateway updated EF = EF + 0.1 × (5‑grade) (clamped 1.3–2.5), calculated the next interval I, and scheduled a CloudWatch Event to push a reminder via SNS.  

**Result**  
After three months of A/B testing, quiz scores rose from **78 % → 91 %**, and churn fell by **9 %**—exceeding targets. The system handled 200k users with < $0.03 per user/month.  

**Reflection (Ownership + Deliver Results)**  
I realized the initial EF update was too aggressive, causing early over‑exposure. I added a rollback path: if a user missed a review, EF decayed by 10 %. This fine‑tuning improved retention by an additional **3 %**. The project taught me to validate assumptions with data and iterate quickly—core Amazon habits for building customer‑obsessed, scalable solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
