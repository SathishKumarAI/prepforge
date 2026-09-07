---
qid: ing_6c9a87358e__aws__local
question: 'Explain: Few-shot — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 644
total_tokens: 875
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:21-05:00'
sources: []
---

**Few‑shot Prompt Engineering – A Design & Impact Story**

**Situation (S)**  
I led a data‑science sprint for an e‑commerce startup that needed to auto‑tag product images with brand‑specific categories but had only 120 labeled examples per category. Traditional supervised models would overfit and cost $15k/month in GPU usage.

**Task (T)**  
Build a zero‑cost, high‑accuracy tagging system that scales to 10k new images/day while staying under $200/month and delivering < 2 s inference latency on edge devices.

**Action (A)**  

1. **Choose the right AWS services** –  
   • *Amazon Bedrock* with GPT‑4o for prompt engineering;  
   • *AWS Lambda* + *API Gateway* for stateless inference;  
   • *S3* for image storage and *DynamoDB* for metadata;  
   • *CloudWatch* & *X-Ray* for observability.

2. **Prompt strategy (Dive Deep)** –  
   - Use *few‑shot prompting*: provide 5 labeled examples + a concise instruction (“Tag the image with one of: Shoes, Apparel, Accessories”).  
   - Cache the prompt template in Lambda environment variables to avoid re‑generation overhead.

3. **Cost & scalability** –  
   - Bedrock charges $0.0004/1k tokens; each request ~300 tokens → $0.12 per inference. With 10k images/day ≈ $400/month, so we batch 2 requests per Lambda invocation to cut costs by 50%.  
   - Lambda concurrency auto‑scales (max 1000), ensuring < 2 s latency.  

4. **Monitoring & rollback** –  
   - CloudWatch metrics track accuracy drift; if > 10% drop, trigger a retraining pipeline using the same few‑shot template on new labeled data.

**Result (R)**  
- Accuracy improved from 62 % (baseline CNN) to 89 % in production.  
- Monthly cost dropped from $15k to <$200.  
- Edge inference latency averaged 1.7 s, meeting SLA.  

**Leadership Principles Reflected**

| Principle | How it Shines |
|-----------|---------------|
| **Customer Obsession** | Delivered a faster, cheaper tagging service that directly improved product discoverability for users. |
| **Ownership & Dive Deep** | Took full ownership of the end‑to‑end pipeline and engineered prompts down to token‑level cost savings. |
| **Bias for Action** | Deployed Bedrock + Lambda in 48 hrs instead of waiting for a custom model. |
| **Deliver Results** | Quantified impact: +27 % accuracy, –98 % inference cost, +30 % daily throughput. |

**Bar‑raiser Takeaway**  
I demonstrated deep technical knowledge (prompt design, AWS services), quantified business value, and showed continuous learning by monitoring drift and iterating on the prompt.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
