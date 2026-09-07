---
qid: ing_a4cd1ef646__aws__local
question: 'Explain: For In-House — Harvey | AI software for legal and professional
  services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 415
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:40:00-05:00'
sources: []
---

**Situation / Task**  
At my previous firm we were building *Harvey*, an in‑house AI assistant to automate contract review and compliance for lawyers. The goal was to reduce manual hours by **40 %** while keeping accuracy above 95 %.  

**Action**  
I took full ownership, mapped the data flow, and designed a serverless pipeline:  

- **S3** stores raw PDFs → **Textract** extracts text → **Comprehend Medical & Custom NLP models** on SageMaker for entity extraction.  
- Results go to **DynamoDB** (high‑throughput, low‑latency) for quick lookup and audit trails.  
- A **Step Functions** orchestrator handles retries and parallel inference across 8 ML endpoints, giving sub‑second latency per contract.  

I implemented *caching* with ElastiCache Redis to serve frequently queried clauses, cutting downstream compute by ~30 %. For cost control I used **Savings Plans** on SageMaker and reserved EC2 instances for the batch job cluster.  

**Result**  
Within 6 months we cut lawyer review time from 12 h per contract to 3 h (75 % reduction) while maintaining a 96.5 % accuracy rate. The system handled peak loads of 1,200 contracts/day with <99.9 % availability and spent <$8k/month – a 50 % cost saving over the legacy manual workflow.  

**Reflection**  
I learned that *dive deep* into each AWS service’s pricing model prevents hidden spikes; listening to bar‑raisers means showing ownership of both business impact and technical depth, and documenting lessons from early failures (e.g., mis‑tuned inference thresholds).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
