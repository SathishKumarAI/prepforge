---
qid: vq_21d19a4bb7__aws__local
question: What are some unique traditions in your family?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 337
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:42:31-05:00'
sources: []
---

**Situation & Task**  
In the summer of 2021, my family was planning a multi‑generational reunion that had been postponed for three years because of the pandemic. The goal was to re‑establish our signature “heritage potluck” tradition—every branch of the family contributes a dish representing their cultural roots—while ensuring safety and inclusivity.

**Action (Ownership & Dive Deep)**  
I took ownership of logistics, creating a shared Google Sheet that mapped each relative’s dietary restrictions, travel constraints, and preferred contribution. I then built a lightweight AWS‑based solution: an S3 bucket for photo uploads of dishes, a Lambda function to generate a daily email reminder, and DynamoDB to track RSVPs. Using CloudWatch I monitored the number of updates in real time.

**Result (Deliver Results & Customer Obsession)**  
The event drew 120 attendees—30% more than the last reunion—and every dish was logged with an image, reducing confusion about portions by 40%. The AWS cost stayed under $12 for the entire campaign. Post‑event surveys showed a 95 % satisfaction rate on “food variety” and “family connection.”  

**Learning & Bar‑raiser Signals**  
I learned that small, serverless automation can scale personal events just as well as enterprise projects. The bar‑raiser will notice my end‑to‑end ownership, data‑driven design, and the measurable uplift in family engagement—hallmarks of Amazon’s leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
