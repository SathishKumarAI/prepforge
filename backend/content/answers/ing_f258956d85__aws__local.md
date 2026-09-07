---
qid: ing_f258956d85__aws__local
question: 'Explain: What an AI agent is — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 564
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:49-05:00'
sources: []
---

**Answer (Amazon style)**  

> **What an AI agent is & Agentic‑AI use cases – Neo Kim**

**SITUATION**  
I led a 6‑person team at a fintech startup to build a *Personal Finance Advisor* that could autonomously negotiate credit offers, optimize savings, and provide real‑time budgeting advice. The goal was to reduce customer effort by 40 % while increasing cross‑sell revenue.

**TASK**  
Design an agentic AI system that can:  
1. Sense user context (transactions, goals).  
2. Decide on actions (recommend a credit card, set up auto‑deposit).  
3. Execute and learn from feedback.

**ACTION**  
*Architecture:*  
- **Data ingestion:** *Amazon Kinesis Data Streams* → *Glue* for ETL into *Redshift* (structured) & *S3* (raw).  
- **Modeling layer:** *Amazon SageMaker* hosts a reinforcement‑learning agent (policy network) that receives state vectors from Redshift and outputs action probabilities.  
- **Execution engine:** *AWS Lambda* + *Step Functions* orchestrate API calls to banking partners, update user profiles in DynamoDB, and trigger notifications via SNS.  
- **Observability:** CloudWatch metrics (action success rate, latency), SageMaker Debugger logs for policy drift.

*Scalability:* The Kinesis stream scales horizontally; Lambda concurrency is auto‑scaled per event volume. *Step Functions* provide fault tolerance with retry logic.  

*Availability & Cost:* All services are regionally replicated. Using Spot Instances for training cuts cost by 70 %.  
*Trade‑offs:* We opted for RL over rule‑based systems to allow continuous improvement, accepting the higher initial complexity.

**RESULT**  
- **Customer Obsession & Ownership:** Achieved a *43 % reduction in manual steps* and *15 % lift in upsell revenue* within 6 months.  
- **Dive Deep & Bias for Action:** The RL agent improved its policy by 28 % (action‑success metric) after only 3 weeks of real‑world training, showcasing rapid learning.  
- **Deliver Results:** Total cost per user interaction dropped from $0.12 to $0.07, a *42 % savings*.

**Bar‑raiser cues I’d listen for:**  
- Concrete ownership (team leadership, stakeholder alignment).  
- Depth of technical reasoning (why RL, chosen AWS services).  
- Quantified impact (exact metrics).  
- Learning from failures (how policy drift was handled).

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
