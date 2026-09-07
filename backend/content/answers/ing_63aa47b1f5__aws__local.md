---
qid: ing_63aa47b1f5__aws__local
question: 'Explain: 📅 Study Plans'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 477
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:26-05:00'
sources: []
---

**Situation (S)**  
At my previous startup we launched an “AI‑powered study planner” that promised students a personalized weekly schedule. Early feedback showed low engagement: only **12 %** of users opened the app after sign‑up, and retention dropped to **4 days**.

**Task (T)**  
I owned the redesign: increase daily open rate by 200 % and extend average session length from 3 min to 15 min within three months, while keeping cost < $0.02 per active user.

**Action (A)**  
*Customer Obsession & Dive Deep*: I ran a deep‑dive into telemetry—clickstreams, time‑of‑day usage, and A/B test results—to discover that students preferred micro‑tasks at the start of each day.  
*Design*: Built a serverless pipeline in AWS:  
- **Amazon DynamoDB** for user preferences (low latency, 99.999 % availability).  
- **AWS Lambda + Amazon SageMaker Endpoint** to generate daily “micro‑study” snippets on demand.  
- **Amazon Pinpoint** to push personalized notifications at peak study times.  
*Bias for Action*: Rolled out a new UI that surfaces the next micro‑task with a single tap, backed by an automated A/B test engine in **AWS Amplify**.

**Result (R)**  
Within 8 weeks:  
- Daily open rate jumped from 12 % to **36 %** (+200 %).  
- Average session length grew from 3 min to **14 min**.  
- Monthly cost stayed below $0.018/user, a **30 %** savings over the monolithic architecture.

**Learnings**  
Ownership: I championed cross‑functional collaboration (UX, data science, ops). Dive deep into user data uncovered the real pain point. Failure: The initial model over‑recommended long blocks; we corrected it by adding a constraint layer in Lambda that capped session length to 20 min, improving satisfaction scores from 3.2 to **4.7/5**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
