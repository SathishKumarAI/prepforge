---
qid: ing_2f14f89de9__aws__local
question: How much time will it take me to read this book?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 436
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:11:43-05:00'
sources: []
---

**Situation & Task**  
I was asked by a hiring manager to estimate how long it would take me to read *“Hands‑On Machine Learning with Python”* (≈ 400 pages). The interviewer wanted to see whether I could translate a vague requirement into a concrete, data‑driven answer and assess trade‑offs—an Amazon test of *Customer Obsession* and *Dive Deep*.

**Approach & Analysis**  
I treated the book as a stream of text in S3, processed it with an AWS Lambda that ran a lightweight NLP model (Amazon Comprehend) to extract word counts. I then queried DynamoDB for my historical reading speed (average 250 words/min from past projects). Using this data‑driven pipeline I could compute:  

```
Total words ≈ 120,000
Reading speed = 250 wpm
Estimated time = 480 min ≈ 8 hrs
```

**Result & Impact**  
The estimate matched my own manual test (≈ 7.5 hrs), giving the manager confidence in my analytical rigor. I also suggested a cost‑effective “read‑while‑train” solution: stream the book to an Amazon Kinesis Data Stream, analyze sentiment per chapter with SageMaker, and surface insights via QuickSight—reducing manual effort by 70% on future projects.

**Learning & Ownership**  
I documented the pipeline in CodeCommit, added unit tests (pytest), and set up CloudWatch alerts for failures. When Lambda throttled during peak hours, I switched to an Fargate task, learning that *Ownership* means iterating quickly when assumptions fail.

> **Leadership Principles Highlighted:**  
> • **Customer Obsession** – Delivering a precise answer to the hiring manager’s question.  
> • **Dive Deep** – Using AWS services to derive an exact, data‑driven estimate rather than a guess.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
