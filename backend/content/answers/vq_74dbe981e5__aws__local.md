---
qid: vq_74dbe981e5__aws__local
question: does it enhance LLMs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 413
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:58:08-05:00'
sources: []
---

**S**ituation  
While leading a cross‑functional team at Amazon Web Services (AWS) to launch an AI‑powered content recommendation engine for a media client, we noticed that the underlying large language model (LLM) was struggling with domain‑specific jargon and user intent.  

**T**ask  
My goal was to improve LLM accuracy by 15% while keeping inference latency under 200 ms on spot instances.

**A**ction  
I drove a “data‑driven fine‑tuning” initiative:
1. **Collect & label** 250K domain sentences from the client’s archives (AWS Glue + Athena).  
2. **Fine‑tune** an open‑source LLM on SageMaker with a custom training script, using *Amazon Bedrock* for inference to benefit from managed scaling and spot pricing.  
3. **Deploy** the model behind API Gateway + Lambda@Edge, caching frequent prompts in CloudFront to reduce latency.  
4. **Monitor** drift with Amazon Lookout for Metrics; automatically retrain every 30 days.

**R**esult  
Accuracy improved from 78% to 93% F1‑score—exceeding the 15% target—and latency dropped to 140 ms on average, cutting inference cost by 22%.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – focused on the client’s content quality needs.  
- **Ownership & Dive Deep** – took full responsibility for data pipeline, model tuning, and operational monitoring, uncovering hidden drift patterns.

### What a Bar‑Raiser Looks For
- Quantified impact (93% accuracy, 22% cost savings).  
- End‑to‑end ownership and deep technical decisions.  
- Learning loop: automated retraining to counteract concept drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
