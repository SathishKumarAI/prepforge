---
qid: ing_de91e6ddbe__aws__local
question: 'Explain: Interview questions — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 535
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:42:54-05:00'
sources: []
---

**Fine‑tuning & alignment** – the core of any production AI product

> *“Customer Obsession”* + *“Dive Deep”*

---

### **Situation**
At my previous role I led a team that needed to deploy a language model for a global e‑commerce chatbot. The out‑of‑the‑box LLM produced irrelevant answers and occasionally violated brand policy.

### **Task**
I had to (1) fine‑tune the base model on domain data, (2) align its responses with business rules, and (3) roll it out at 100 k concurrent users with < 200 ms latency.

### **Action**
| Step | AWS services | Design |
|------|--------------|--------|
| Data prep | S3 + Glue | Extract customer logs → clean → store in Parquet. |
| Fine‑tuning | SageMaker Training & Inference | Use `transformer` hyper‑parameter search, 4 GPUs, 12 h training; cost $1.2k. |
| Alignment | SageMaker Pipelines + Step Functions | Add a “policy‑check” Lambda that flags disallowed tokens (≈ 0.3 % of outputs). |
| Deployment | SageMaker Endpoint + CloudFront + API Gateway | Multi‑AZ, 10 ms warm‑up; autoscale to 500 instances. |
| Monitoring | CloudWatch + X-Ray | Track BLEU & policy‑violation rates; trigger retraining if >1% drift. |

### **Result**
- Accuracy improved from 62 % to 87 % BLEU (customer satisfaction ↑12 pts).  
- Policy violations dropped by 95 %.  
- End‑to‑end latency: 180 ms average, cost $0.02 per inference.

---

**Bar‑raiser notes**

*Ownership:* I owned the end‑to‑end pipeline and drove cross‑team coordination.  
*Dive Deep:* I benchmarked hyper‑parameters, profiled GPU usage, and tuned Lambda timeouts to avoid cold starts.  
*Quantified Impact:* Reported BLEU lift, violation reduction, latency, and cost savings.  
*Learning from Failure:* Initial over‑fitting led to 30 % hallucination; we introduced a validation split and early stopping, learning the importance of balanced data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
