---
qid: ing_a4c8576894__aws__local
question: I have a question. How can I contact you?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 375
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:53-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“How can I contact you?”*  
>   
> **S – Situation:** In a recent ML project I was asked by the product team how they could reach me for quick clarifications on feature‑engineering decisions.  
> **T – Task:** My goal was to set up a reliable, low‑friction channel that respected both my bandwidth and the team's need for rapid feedback.  
> **A – Action:**  
> 1. I created an *AWS Chatbot* integration in Slack that forwards all “@ML‑ops” mentions to a dedicated Lambda function.  
> 2. The Lambda writes the query to a DynamoDB table (keyed by user, timestamp) and triggers an SNS topic that notifies me via email and SMS.  
> 3. I scheduled a weekly “Ask Me Anything” slot on Teams for live, real‑time interaction.  
> **R – Result:** Within two weeks, the average response time dropped from ~12 h to < 30 min, and we reduced duplicated effort by 35 % (tracked via JIRA issue counts). The Slack channel now has a 90 % engagement rate among stakeholders.  

**Leadership Principles Highlighted**

- **Customer Obsession:** Designed the contact flow around end‑user speed & convenience.  
- **Ownership:** Built and maintained the automated notification system, ensuring continuity even when I’m on leave.  

**Bar‑raiser cues:** Look for evidence of *ownership* (I took full responsibility), *dive deep* (understood Slack, Lambda, DynamoDB, SNS interplay), quantified impact (time & cost savings), and learning from failure (iterated after initial trial).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
