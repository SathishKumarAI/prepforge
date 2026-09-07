---
qid: vq_3c4df7b821__aws__local
question: Do you have siblings? How do you get along with them?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 532
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:47:33-05:00'
sources: []
---

**Situation:**  
When I was 12, my family expanded from two to five children. With three new siblings, household chores and screen‑time schedules became chaotic—parental supervision time dropped by **30 %**, and the average daily conflict count rose to **4–5 incidents**.

**Task:**  
I volunteered to design a “Family Ops” system that would reduce friction, increase transparency, and free up 1.5 hours per day for learning and play. The goal was to cut conflicts by at least **50 %** within three months.

**Action:**  
I treated the household as a distributed team with *Customer Obsession* (the “customers” are my parents) and *Ownership*. I mapped requirements:  
- Real‑time chore assignment  
- Shared calendar visible on every device  
- Reward points for task completion  

I chose AWS services that map directly to these needs:  
| Requirement | Service | Reasoning |
|-------------|---------|-----------|
| Task queue | **Amazon SQS** | Guarantees message delivery, decouples UI from backend. |
| Real‑time sync | **AWS AppSync (GraphQL)** + **DynamoDB Streams** | Low latency, serverless, scales to 5 users. |
| Push notifications | **SNS** | Cost‑effective, native device support. |
| Reward analytics | **Amazon QuickSight** | Visual dashboards for parents to see progress. |

I built a lightweight React web app that runs on **AWS Amplify**, with a Node.js Lambda authorizer for secure authentication (Cognito). The system logged 2,400 chore events in the first month, and we saw an immediate drop of **48 %** in daily conflicts.

**Result:**  
After three months, average conflict count fell to **1–2 per day**—a **55 %** reduction. Parents reported a 40 % increase in free time, and I earned an “Excellent” rating on the family KPI dashboard. The project taught me that *Dive Deep* into stakeholder pain points, coupled with a simple AWS‑powered design, can deliver measurable business (family) results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
