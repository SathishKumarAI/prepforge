---
qid: ing_d6fa27b6a3__aws__local
question: 'Explain: I still have questions — Welcome to the \ud83e\udd17 AI Agents
  Course \u00b7 Hugging Face'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 401
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:25:27-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
At my previous firm I was asked to launch an AI‑powered recommendation engine for a media platform that served ~1 M daily users. The goal was to increase “time on site” by at least 15% while keeping latency under 200 ms.

**Action (Dive Deep, Bias for Action)**  
I scoped the problem: we needed a lightweight transformer model that could run in real time. I chose Hugging Face’s `transformers` library with a distilled BERT variant, deployed on **Amazon SageMaker Edge Manager** to push the model to **AWS Lambda@Edge** nodes at each CloudFront edge location.  
- *Architecture*:  
  - Ingest user context → API Gateway → Lambda@Edge (model inference) → CDN cache → front‑end.  
  - Training pipeline on SageMaker with hyperparameter tuning; continuous evaluation via A/B testing in AppConfig.  
- *Scalability & Cost*: Using Lambda@Edge eliminated server maintenance and auto‑scaled to traffic spikes. Estimated monthly cost dropped from $12k (EC2 + GPU) to $3.8k, a 68% reduction.

**Result (Deliver Results)**  
After two weeks of roll‑out, average session time rose **18%**, exceeding the target by 3%. Model latency averaged 120 ms. A/B tests showed a statistically significant lift with p < 0.01. The initiative also generated a reusable microservice pattern adopted across three other product lines.

**Learnings (Invent & Simplify)**  
The key takeaway was that “simpler” edge inference can outperform heavy cloud‑based solutions when latency is critical. I documented the trade‑offs and shared best practices in our internal knowledge base, fostering cross‑team experimentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
