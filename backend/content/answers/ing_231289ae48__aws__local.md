---
qid: ing_231289ae48__aws__local
question: 'Explain: Custom Evaluator Pattern — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 506
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:46:00-05:00'
sources: []
---

**Custom Evaluator Pattern – RAG Evaluation**

*Situation*: In my last role I built a real‑time question‑answering system for an enterprise knowledge base. The baseline Retrieval‑Augmented Generation (RAG) model returned 68 % accurate answers, but stakeholders demanded higher precision to reduce support tickets.

*Task*: Design a **Custom Evaluator** that scores generated responses against ground truth and guides the generation pipeline in real time.

*Action*:  
1. **Evaluation Service** – A stateless Lambda function receives (question, candidate answer) pairs, calls an Amazon SageMaker endpoint that runs a fine‑tuned BERT scorer.  
2. **Scoring Logic** – Returns a similarity score; if below 0.75 the system triggers a fallback to a more conservative generation model or fetches additional context from DynamoDB.  
3. **Observability** – Metrics (score distribution, fallback rate) are pushed to CloudWatch and visualized in Grafana; alerts fire when precision dips below 90 %.  

*Result*: Precision rose from 68 % to **92 %**, cutting support tickets by **37 %** per month. The Lambda‑based evaluator kept latency under 150 ms, cost < $0.03 per inference, and the architecture scales automatically with request volume.

---

### Amazon Leadership Principles Highlighted  
- **Customer Obsession** – Directly reduced user frustration by improving answer quality.  
- **Ownership & Dive Deep** – Built a low‑latency, fully monitored solution; iterated on scoring thresholds after analyzing failure logs.

### AWS Services Used
| Service | Purpose |
|---------|---------|
| Lambda | Stateless inference and routing |
| SageMaker Endpoint | BERT scorer for semantic similarity |
| DynamoDB | Context cache for fallback generation |
| CloudWatch + Grafana | Metrics, alerts, dashboards |

**Bar‑raiser cues**:  
- Depth in the evaluator’s design (why Lambda + SageMaker, not EC2).  
- Quantified impact (92 % precision, 37 % ticket reduction).  
- Learning loop: post‑deployment A/B tests refined the threshold; failures led to adding a second scorer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
