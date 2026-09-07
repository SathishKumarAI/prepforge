---
qid: ing_1906840ca7__aws__local
question: 'Explain: Chat App — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 556
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:22:40-05:00'
sources: []
---

**Situation & Task (S)**  
I led a cross‑functional squad that built an internal chat app for a fintech firm with 120 000 daily active users. The goal was to surface the *top 20 most frequently asked questions* in real time so agents could answer faster and reduce ticket volume.

**Action (A)**  
1. **Data pipeline** – Ingested every message into Kinesis Data Streams, stored raw logs in S3 Glacier for compliance.  
2. **Feature extraction** – Deployed a Lambda function that tokenized text, removed stop words, and generated TF‑IDF vectors on the fly.  
3. **ML inference** – Used SageMaker endpoint (multi‑node cluster) to run an LDA model that clustered questions into 20 topics; top terms per topic were surfaced via API Gateway.  
4. **Caching & scaling** – Results cached in ElastiCache Redis with TTL of 5 min; auto‑scales based on CloudWatch metrics.  
5. **Feedback loop** – Implemented a “vote” button that fed back into the model, retraining nightly in SageMaker.

**Result (R)**  
- Reduced average agent response time by **32%** and ticket volume by **18%** within three months.  
- Cost‑effective: total spend was 25 % below budget due to Lambda’s pay‑per‑execution model and Redis caching, while maintaining <1 s latency for 99th percentile requests.

---

### Leadership Principles Highlighted
| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Customer Obsession** | Built a feature that directly cut customer wait times. |
| **Ownership** | Took end‑to‑end responsibility: data ingestion, model training, deployment, monitoring, and cost optimization. |
| **Dive Deep** | Tuned TF‑IDF hyperparameters, analyzed cluster purity, and iterated on Lambda timeouts to ensure sub‑second inference. |

### Bar‑raiser Signals
- **Ownership & Accountability:** I owned the entire stack, from ingestion to user interface.  
- **Depth:** I tuned model parameters, benchmarked inference latency across AWS regions, and chose services that balanced cost vs. SLA.  
- **Quantified Impact:** 32 % faster responses, 18 % fewer tickets, 25 % cost savings.  
- **Learning from Failure:** Early runs suffered >2 s latency; I profiled Lambda cold starts, migrated to provisioned concurrency, and reduced costs by 12 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
