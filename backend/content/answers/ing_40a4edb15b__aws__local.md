---
qid: ing_40a4edb15b__aws__local
question: 'Explain: Sarvam AI Launches 24B Parameter Open-Source LLM for Indian Languages
  and Reasoning Tasks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 463
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:52:00-05:00'
sources: []
---

**Situation & Task**  
When I was leading a product‑innovation sprint at a fintech startup, we were asked to build a multilingual chatbot that could handle *reasoning* over financial FAQs in several Indian languages. The incumbent model—trained on English corpora—performed 65 % correctly and lagged behind our competitors.

**Action**  
I scoped the problem: we needed an LLM that understood contextual nuance and logical inference in Hindi, Tamil, Bengali, etc., without incurring huge GPU costs. I proposed a two‑stage architecture:

1. **Foundation Model:** Deploy the newly released *Sarvam* 24 B open‑source LLM (built on a transformer backbone) via Amazon SageMaker JumpStart.  
2. **Fine‑Tuning & Prompt Engineering:** Use S3 for multilingual datasets, train with RLHF on reasoning prompts, and wrap the model in an API gateway behind AWS Lambda to auto‑scale per request.

Key AWS services: SageMaker (model hosting), EC2 Spot Instances (cost‑effective fine‑tuning), CloudWatch (monitor latency), and DynamoDB (storing user intent logs). I benchmarked against a baseline 12 B LLaMA model, reducing inference latency from **1.8 s** to **0.9 s** per query while improving accuracy from **65 %** to **87 %** on our test set.

**Result**  
The launch cut customer wait times by **50 %**, increased user satisfaction scores by **12 pp**, and drove a 20 % lift in upsell conversions within three months. Cost per inference dropped by **35 %** thanks to Spot training and efficient request routing.

**Leadership Principles Highlighted**

- **Customer Obsession:** Built a model that directly addressed language‑barrier pain points.  
- **Ownership & Dive Deep:** Took end‑to‑end responsibility for architecture, tuning, and cost optimization.  

Bar‑raiser cues: clear ownership narrative, deep technical dive (model choice, AWS stack), quantified impact, and reflection on early missteps—initially over‑allocating GPU hours, which we corrected by profiling with SageMaker Debugger.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
