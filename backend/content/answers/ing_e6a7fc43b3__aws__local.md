---
qid: ing_e6a7fc43b3__aws__local
question: Your corpus is multilingual and users query in several languages. What breaks,
  and how do you fix it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 435
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:36-05:00'
sources: []
---

**Situation / Task**  
I led a multilingual chatbot for an e‑commerce platform that served 5 M monthly active users across 12 languages. During a rollout, we noticed that 18 % of user queries in non‑English languages were incorrectly routed to the English NLP model, causing 32 % lower satisfaction scores (CSAT dropped from 92 to 68).  

**Action**  
*Customer Obsession & Dive Deep*: I first logged every request and built a language‑detection audit trail using **Amazon Comprehend Custom Language Detection**. The data revealed that our custom model failed on low‑resource languages because of imbalanced training data.  

I redesigned the architecture:  
1. **Language Gatekeeper** – an API Gateway + Lambda function that calls Comprehend to tag the language and routes to a dedicated **Amazon SageMaker endpoint** per language cluster (e.g., high‑resource vs. low‑resource).  
2. For low‑resource languages, I leveraged **Amazon Translate’s custom terminology** to augment training data and retrained models in SageMaker with an 8× larger multilingual corpus.  
3. Implemented a **CloudWatch anomaly detector** that flags mis‑routing rates >5 % for auto‑alerting.

*Ownership & Bias for Action*: I ran a A/B test (N=200k) over two weeks. The new pipeline reduced mis‑routing to <1 %, raising CSAT from 68 to **94 +**, and cut latency by 25 ms per request.

**Result**  
The system now scales to 10 M requests/day with 99.9 % availability, costs down 12 % due to efficient endpoint usage, and we gained a reusable language‑routing pattern for future products.  

**Bar‑raiser takeaway** – clear ownership of the problem, deep data analysis, quantifiable impact, and continuous learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
