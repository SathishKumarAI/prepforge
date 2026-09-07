---
qid: ing_a45c026f0b__aws__local
question: 'Explain: Rubric — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 667
total_tokens: 894
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:07-05:00'
sources: []
---

**Rubric – Mock Interview Kit (AI Edition)**  

**Leadership Principles:** *Customer Obsession* & *Dive Deep*  

---

### **Situation**
When our internal hiring team launched a new AI‑powered interview platform in 2023, they struggled to keep the experience fast and consistent across 12 regions. Latency spikes caused candidate drop‑off rates to climb from 8 % to 18 %.

### **Task**
Design a *Mock Interview Kit* that automatically generates realistic interview questions, evaluates answers with NLP, and delivers real‑time feedback—all while staying under an $0.05 per request cost.

### **Action**
1. **Requirements & Architecture**  
   - Stateless API layer (API Gateway + Lambda) → **Serverless** for instant scaling.  
   - Question bank stored in DynamoDB; query via *Global Secondary Index* on skill tags.  
   - NLP scoring using Amazon Comprehend Custom Classification & **Amazon SageMaker Endpoint** (real‑time inference).  
   - Feedback generation with Amazon Bedrock (Claude/ChatGPT) fine‑tuned on interview transcripts.  

2. **Scalability / Availability**  
   - Lambda concurrency reserved to 5 k requests/sec, auto‑scaling via *Provisioned Concurrency*.  
   - Multi‑region deployment (us‑east‑1 & eu‑central‑1) with Route 53 latency routing for <30 ms response.  

3. **Cost Control**  
   - Lambda: $0.00001667 per 100 ms → ~10 ¢/M calls.  
   - SageMaker real‑time endpoint: $0.10/hr (1 vCPU) → amortized to <$0.01 per inference.  
   - Bedrock: $0.03/token; average 500 tokens per feedback → <\$0.02 per interview.  

4. **Metrics & Validation**  
   - Built a load‑test harness in JMeter; achieved 99.9 % SLA at 10 k RPS.  
   - Post‑deployment, candidate drop‑off fell to 5 %; average feedback time decreased from 2 min to 15 sec.

### **Result**
- Reduced latency by **70 %**, increasing completion rates by **13 pp** (from 8 % to 21 %).  
- Cut per‑interview cost from $0.30 to **$0.04** (≈ 86 % savings).  
- Achieved 99.7 % uptime over 6 months.

### **Bar‑raiser Notes**
- *Ownership:* Took full responsibility for end‑to‑end delivery, including post‑mortems on any failures.  
- *Dive Deep:* Quantified every component’s cost/latency trade‑off; iterated on model choice after profiling inference times.  
- *Learning from Failure:* After a SageMaker outage, implemented blue/green deployment and automated rollback—now the platform never suffers a single RTO.  

---

*Result: 150 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
