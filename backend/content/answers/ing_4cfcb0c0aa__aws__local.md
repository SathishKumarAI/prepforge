---
qid: ing_4cfcb0c0aa__aws__local
question: 'Explain: Building the Real-World Project (Meeting Recording Summarizer)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 472
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:19:11-05:00'
sources: []
---

**Situation & Task**  
At my previous company we had an internal video‑conferencing tool used by ~4 000 employees. A product manager asked me to build a *Meeting Recording Summarizer* that could auto‑transcribe, extract key action items, and deliver a concise 2‑minute summary for each recording. The goal was to reduce post‑meeting email traffic by 30 % and free up analyst time.

**Action (Design & Implementation)**  
1. **Pipeline** – S3 bucket receives raw video → Step Functions orchestrates:  
   * Transcribe with Amazon Transcribe (custom vocabularies for domain terms).  
   * Pass text to a Lambda that runs an AWS Comprehend‑Custom and a HuggingFace inference container on SageMaker for summarization.  
2. **Data Store** – DynamoDB stores transcript metadata + summary; S3 holds raw & processed files.  
3. **Front‑End** – API Gateway + Cognito exposes `/summarize` endpoint; results are pushed to Slack via a Lambda bot.  

I chose serverless for cost (pay per use, no idle servers) and auto‑scaling to handle 200 k minutes of video/month. Availability was ensured with multi‑AZ S3 & DynamoDB; durability SLA 99.999%. I added a retry loop in Step Functions to mitigate transient transcription errors.

**Result**  
Within two months after launch:  
* 32 % drop in follow‑up emails (measured by email analytics).  
* Analysts saved ~1,200 person‑hours/year.  
* Cost per summary stayed below $0.10, under budget by 18 %.  

**Reflection**  
I *owned* the end‑to‑end flow, *dove deep* into AWS pricing models to keep costs low, and *broke down* failure points early (e.g., handling non‑English segments). The bar‑raiser will note my ownership, measurable impact, and learning loop—every time a transcript failed I updated the custom vocab and retrained the summarization model, improving accuracy by 12 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
