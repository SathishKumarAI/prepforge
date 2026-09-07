---
qid: ing_4c63fbcbf1__aws__local
question: 'Explain: Everyone becomes their own prompt engineer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 395
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:17:47-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a cross‑functional team that built an internal conversational AI for the finance portal. The product was used by 4 000 analysts daily, and each user had to tailor prompts to get accurate forecasts. We noticed latency spikes and inconsistent answers when users crafted their own prompts.

**Action**  
I introduced a *Prompt‑Engineering-as-a-Service* layer on top of Amazon Bedrock.  
1. **Ownership & Customer Obsession** – I ran workshops with analysts, documented pain points, and turned those into user stories.  
2. **Dive Deep** – I instrumented the prompt‑submission API (API Gateway + Lambda) to capture prompt length, token count, and response latency.  
3. **Design** – Built a *Prompt Validator* microservice that uses SageMaker Ground Truth for labeling valid vs. ambiguous prompts; invalid ones are auto‑rewritten using Amazon Comprehend Custom Entities.  
4. **AWS Services** – Bedrock (LLM), Lambda (serverless compute), API Gateway, DynamoDB (prompt cache), CloudWatch (metrics), Step Functions (workflow orchestration).  

**Result**  
- Reduced average latency from 1.8 s to 0.6 s (+66 %).  
- Prompt‑error rate dropped 70 % as users no longer had to manually tweak prompts.  
- Saved $12k/month in compute by caching top 10 % of prompts in DynamoDB and only invoking Bedrock for new ones.

**Bar‑raiser Takeaway**  
I owned the problem from user discovery to solution delivery, dove deep into telemetry, quantified impact with real metrics, and learned that giving users a guided prompt‑engineering tool can dramatically improve both performance and satisfaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
