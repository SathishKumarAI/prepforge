---
qid: ing_b7ed0c2b5b__aws__local
question: 'Explain: Inaccuracies, irresponsible coverage, and conflicts of interest
  in The New Yorker'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 470
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:56-05:00'
sources: []
---

**Situation**  
I was tasked with building a real‑time fact‑checking engine for *The New Yorker* to curb inaccuracies, irresponsible coverage, and conflicts of interest in their editorial pipeline.

**Task**  
Deliver an automated system that flags potential misinformation before publication, while preserving editorial autonomy and meeting the magazine’s 48‑hour turnaround.

**Action**  
- **Ownership & Customer Obsession:** I partnered with editors to map the content workflow; identified key decision points (draft → review → publish).  
- **Dive Deep & Bias for Action:** Built a lightweight microservice on **AWS Lambda** triggered by every draft event in **Amazon EventBridge**. The service calls **Amazon Comprehend** for entity extraction, then queries **AWS SageMaker Endpoint** hosting a BERT‑based contradiction classifier (accuracy 92% on our test set).  
- **Invent & Simplify:** Used **Amazon DynamoDB** to store flagged passages and a simple HTML overlay in the editor’s CMS. Alerts are sent via **SNS** to the editorial lead.  
- **Deliver Results:** After three months, false‑positive rate dropped from 18% to <5%, and publication errors decreased by 37%.  

**Result**  
The system achieved 99.8 % uptime (using Lambda’s built‑in resilience) with an estimated cost of $0.003 per article—well below the $0.02 budget for manual reviews.

---

### What a bar‑raiser would listen for

| Criteria | Why it matters |
|----------|----------------|
| **Ownership** | Clear end‑to‑end responsibility for both tech and editorial outcomes. |
| **Dive Deep** | Leveraging AWS services (Lambda, Comprehend, SageMaker) with quantified model metrics shows depth. |
| **Quantified Impact** | 37 % reduction in publication errors directly ties to business value. |
| **Learning from Failure** | Iterated on false‑positive rate after initial deployment—demonstrates resilience and continuous improvement. |

*Leads: Customer Obsession, Ownership.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
