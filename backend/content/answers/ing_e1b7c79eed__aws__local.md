---
qid: ing_e1b7c79eed__aws__local
question: 'Explain: Likely interviewer follow-ups — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 510
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:52-05:00'
sources: []
---

**Answer (Amazon Way)**  

> *“When you talk about an AI‑powered customer‑support agent, what do you think the interviewer will ask next?”*  

I’d frame it around **Customer Obsession** and **Ownership**—two principles that surface whenever we discuss automated support. The likely follow‑ups are:  

| # | Follow‑up | Why it matters (Leadership Principle) |
|---|-----------|---------------------------------------|
| 1 | *How do you measure the agent’s impact on customer satisfaction?* | **Customer Obsession** – metrics drive empathy. |
| 2 | *What safeguards ensure the model doesn’t mislead a user?* | **Ownership** – accountability for failure modes. |
| 3 | *Can you explain how you would scale this to millions of concurrent chats?* | **Dive Deep / Deliver Results** – architecture and cost. |

---

### STAR Response (≈200 words)

**S**: At my previous role, we built an AI chat agent that answered product‑related queries for a SaaS platform with 1M monthly users.  
**T**: The goal was to reduce ticket volume by 30% while keeping CSAT ≥ 4.5/5.  
**A**: I owned the end‑to‑end pipeline: data ingestion (AWS Kinesis), training on SageMaker, and deployment via **Amazon Lex** + **Lambda** for dynamic intent handling. To ensure safety, I added a human‑in‑the‑loop flagging system using DynamoDB to surface high‑confidence risk cases. For scalability, the agent spun up additional Lex containers in an ECS cluster behind an Application Load Balancer; auto‑scaling thresholds were set at 80 % CPU.  
**R**: After three months, ticket volume dropped 35%, CSAT rose to 4.68/5, and we saved ~$120K/month on support staff costs. The system handled peak loads of 10k concurrent chats with <2 s latency.  

**Bar‑raiser takeaways** – I demonstrated **ownership** (end‑to‑end), **dive deep** (AWS services & cost reasoning), quantified impact, and learned from early false‑positive errors by iterating the confidence thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
