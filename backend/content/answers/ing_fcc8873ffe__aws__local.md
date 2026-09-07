---
qid: ing_fcc8873ffe__aws__local
question: Does OpenAI let you use AI tools during the system design interview?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 620
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:28-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we’re building for the user’s success; *Ownership* – I own every part of the solution from design to delivery.

**SITUATION**  
I was invited to a system‑design interview at a fintech startup that wanted an AI‑powered fraud‑detection engine. The interviewer asked whether using OpenAI’s GPT models during the design phase was allowed.

**TASK**  
Explain my stance, justify it with technical trade‑offs, and propose a compliant architecture that still leverages advanced language models without breaching policy.

**ACTION**  

1. **Clarify requirements** – real‑time scoring (≤ 50 ms latency), 99.9 % availability, GDPR‑compliant data handling, and $200k/yr cost cap.  
2. **Design outline**  
   * **Data ingestion**: Kinesis Data Streams → Lambda for feature extraction.  
   * **Feature store**: DynamoDB (global tables) + S3 for raw logs.  
   * **Inference layer**: A custom lightweight transformer hosted on SageMaker Endpoint, tuned on internal fraud data; no external calls during inference to avoid latency and compliance issues.  
   * **Model training**: Periodic batch jobs on EMR using Spark; GPT‑4 used offline only for feature engineering (e.g., entity extraction from transaction narratives).  
3. **AWS services & trade‑offs**  
   * SageMaker – low latency, auto‑scaling, cost ~$0.30/inf.  
   * Kinesis + Lambda – serverless, scales to 10k TPS, ~\$5/hr.  
   * DynamoDB global tables – 99.9 % availability, multi‑AZ replication (~$1.2M/yr).  
4. **Compliance** – all data stays within VPC; no external API calls during live scoring. GPT usage limited to offline preprocessing, fully auditable.

**RESULT**  
Implemented the design in 3 weeks; achieved < 30 ms latency, 99.95 % uptime, and $150k/yr operating cost—10 % below budget while meeting regulatory constraints. Learned that “using AI tools is fine only when they do not become a live dependency”; thus we kept GPT as an offline feature‑engineering aid.

**BAR‑RAISER HIGHLIGHTS**  
* Demonstrated *Ownership* by mapping every requirement to AWS services and cost metrics.  
* Showed *Dive Deep* with latency, availability, and compliance trade‑offs.  
* Quantified impact (latency drop, cost savings).  
* Reflected on failure: early prototype had 80 ms latency due to synchronous API calls; pivoted to offline inference—learning that “speed beats novelty when customers are at risk.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
