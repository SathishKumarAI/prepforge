---
qid: ing_fdf510c62d__star__local
question: 'Explain: Functional Requirements — ChatGPT System Design - by Neo Kim and
  Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 374
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:37-05:00'
sources: []
---

**Situation**  
In mid‑2023 I was part of a startup’s core AI team building an internal chatbot to triage customer support tickets. The product owner demanded that the system respond in under 500 ms for 95 % of queries while supporting dynamic intent recognition across 12 languages.

**Task**  
I had to define the functional requirements and design architecture that would meet latency, scalability, and multilingual accuracy targets without exceeding our $200k cloud budget.

**Action**  
First I mapped user flows and created a high‑level use‑case diagram in Lucidchart. Then I drafted a “functional spec” document: (1) intent classification API with 99 % precision, (2) response generation module leveraging OpenAI’s GPT‑3 fine‑tuned on 200k support transcripts, (3) caching layer using Redis to store the top 10 most common intents, and (4) fallback rule engine for low‑confidence cases. I used AWS Lambda + API Gateway for serverless compute, SQS for request queuing, and DynamoDB for persistent ticket metadata. I also set up A/B testing in Postman to simulate traffic spikes of up to 5k RPS.

**Result**  
The prototype met the 500 ms SLA for 96 % of requests during load tests, reduced server costs by 30 %, and cut average first‑response time from 12 hrs to 3 min. I learned that clear functional specs not only guide engineers but also expose hidden trade‑offs early—especially around cache hit ratios vs. model freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
