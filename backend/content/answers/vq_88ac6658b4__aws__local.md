---
qid: vq_88ac6658b4__aws__local
question: What’s the best advice a teacher has given you?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 412
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:50-05:00'
sources: []
---

**Situation / Task**  
During my senior year I taught a group of 30 students the fundamentals of data‑structures in an online class that ran on AWS Classroom (S3 for content, CloudFront for low latency). One student struggled to grasp recursion and was falling behind, threatening both his grade and our course completion rate.

**Action**  
I adopted the *Customer Obsession* principle: I first asked the student what specific part of recursion confused him. He said he couldn’t visualize the call stack. I created a live‑coding session using **AWS CloudWatch Logs Insights** to capture real‑time stack traces and displayed them on an **Amazon QuickSight** dashboard that plotted depth vs. time. I then built a small interactive demo in **AWS Amplify** where students could step through recursive calls visually, each step stored in DynamoDB for persistence.

I also applied *Bias for Action* by launching this micro‑service within 48 hours of the first failed quiz. The solution required only one EC2 instance (t3.medium) and a serverless Lambda function, keeping costs below $5/month.

**Result**  
The student’s quiz score jumped from **58% to 92%** in the next assessment. Course completion rose from **84% to 97%**, and overall average increased by **7 points**. I received a “Student Success” badge from the university, and the demo was adopted as part of the official curriculum.

**Bar‑raiser cues**  
- Ownership: I identified the problem, owned the solution, and tracked its impact.  
- Dive Deep: Leveraged CloudWatch, QuickSight, and DynamoDB to surface stack traces.  
- Quantified Impact: Clear before/after metrics.  
- Learning from Failure: The initial quiz failure prompted a rapid pivot to visual tooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
