---
qid: ing_dad9391477__aws__local
question: 'Explain: The Problem — Customer Support Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 397
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:33:00-05:00'
sources: []
---

**Problem – Automating Customer Support for a Global SaaS Platform**

> **Situation (S):** Our help‑desk handled ~120 k tickets/month; response time averaged 18 h and resolution rate was 68%.  
> **Task (T):** Reduce first‑contact resolution time to <4 h while keeping cost per ticket below $0.75.  

**Action (A)** – *Customer Obsession + Ownership*  
1. **Data dive:** Logged 350k interactions → identified 45% of tickets were FAQ‑based, 30% policy queries, 25% technical bugs.  
2. **Solution design:** Deployed a two‑tier model:  
   - **Tier 1 – RAG‑bot (AWS Lex + Lambda)** for FAQs & policy checks, auto‑replying within 5 min.  
   - **Tier 2 – Contextual AI (Amazon SageMaker, Comprehend) + DynamoDB** to route complex tickets to live agents with pre‑filled context.  
3. **Automation pipeline:** Continuous retraining every week from new ticket logs; integrated into CI/CD via CodePipeline.  

**Result (R)** – *Deliver Results*  
- First‑contact resolution rose 45% (from 68 % to 97 %).  
- Average response time dropped 75% (18 h → 4 h).  
- Cost per ticket fell to $0.58, saving ~$1.2M annually.  

**Bar‑raiser focus:** Demonstrated deep ownership by steering the full lifecycle, quantified impact with clear metrics, and iteratively improved the model after early misclassifications—learning that continuous data labeling is essential for sustained accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
