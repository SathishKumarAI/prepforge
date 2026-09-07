---
qid: ing_85949c63be__aws__local
question: Why Safety Check Before Send? — Customer Support Automation
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 488
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:26:40-05:00'
sources: []
---

**Situation & Task**  
When I led the AI‑driven ticket triage pilot at my last company, our bot was routing 70 % of inbound tickets to agents in real time. Early adopters reported “irrelevant suggestions” and a spike in customer churn (15 % over two weeks). The task: build a safety layer that verifies every automated response before it reaches the user.

**Action**  
I introduced a *Safety Check* microservice that runs each bot reply through three independent filters:

1. **Semantic relevance** – Amazon Comprehend Custom Classification scores <0.6 → flag for human review.  
2. **Sentiment consistency** – AWS Lambda checks that sentiment matches the original ticket; mismatches trigger rollback.  
3. **Policy compliance** – DynamoDB‑backed policy rules (e.g., no disallowed language) are enforced in a containerized ECS task.

All filters execute in parallel on an Fargate cluster, ensuring <200 ms latency. The system writes audit logs to CloudWatch and SQS for post‑mortem analysis. We also added a *confidence threshold* that automatically escalates low‑score tickets to agents 1.5× faster than the baseline.

**Result**  
Within one month:  
- Customer satisfaction rose from 78 % to **92 %** (NPS +15).  
- First‑contact resolution improved by **22 %**.  
- Ticket escalations dropped 30 %, saving $18k/month in agent hours.  

**Reflection & Learning**  
Ownership drove me to own the entire pipeline, not just the bot. Diving deep into AWS services revealed that a hybrid Lambda‑ECS approach balanced cost and latency better than pure serverless or monolithic deployments. The bar‑raiser would note my quantified impact, systematic failure analysis (why the first model misclassified), and continuous learning loop—every false positive became a new rule in DynamoDB.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – directly improved satisfaction metrics.  
- **Ownership & Dive Deep** – end‑to‑end control and technical depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
