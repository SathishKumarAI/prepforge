---
qid: ing_12f84c29f4__aws__local
question: 'Explain: Task-Specific Dimensions — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 477
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:08:24-05:00'
sources: []
---

**Task‑Specific Dimensions – How to Evaluate an LLM for a Business Problem**

*Leadership Principles: Customer Obsession & Dive Deep.*

**Situation**  
A retail client needed an LLM that could generate product descriptions, answer FAQs, and suggest upsells in real time. The business required 99.9 % accuracy on domain‑specific terminology and <50 ms latency for 10k concurrent users.

**Task**  
Define evaluation dimensions that map directly to these business KPIs:  
1. **Domain Relevance** – BLEU & ROUGE against a curated product‑description corpus.  
2. **Accuracy on Technical Terms** – Precision/Recall of entity recognition (SKU, brand).  
3. **Latency & Throughput** – End‑to‑end response time measured under simulated load.  
4. **Cost per Token** – AWS SageMaker endpoint pricing × token usage.  
5. **Robustness to Adversarial Input** – Failure rate when encountering slang or typos.

**Action**  
I built an automated test harness on **AWS CodePipeline** that:  
* Loads a 1 M‑record product corpus into **Amazon S3** and computes BLEU/ROUGE with **Amazon SageMaker Processing Jobs**.  
* Generates synthetic user traffic (10k QPS) in **Amazon CloudWatch Events** to trigger the endpoint, recording latency via **AWS X-Ray**.  
* Logs token counts to **Amazon Athena** for cost analysis.  
* Uses a failure‑injection framework in **AWS Lambda** to evaluate robustness.

**Result**  
The model achieved 92 % BLEU on domain data, 97 % term precision, <45 ms latency, and $0.004/token—well below the client’s target of $0.006/token. The deployment reduced FAQ handling time by 70 %, freeing 5 FTEs.  
*Bar‑raiser takeaway:* Demonstrated ownership (end‑to‑end pipeline), deep dive into metrics, quantified impact, and iterative learning from early latency spikes that led to model pruning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
