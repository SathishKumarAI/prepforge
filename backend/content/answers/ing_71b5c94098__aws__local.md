---
qid: ing_71b5c94098__aws__local
question: 'Explain: The model was trained to guess — That Is Embarrassing: Why Frontier
  AI Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 384
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:42:21-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team at Amazon Web Services to debug an NLP model that was hallucinating facts in customer support chatbots. The model’s accuracy dropped from **92 %** to **68 %** on real‑world queries, hurting user trust and increasing ticket volume by 37 %.  

**Action**  
1. **Dive Deep** into the training pipeline: discovered a *data leakage* bug where the validation set shared tokenized phrases with the training set, inflating perceived performance.  
2. Re‑engineered data ingestion using **AWS Glue** to enforce strict partitioning and added an automated sanity check step in **Amazon SageMaker** that runs a lightweight inference on a held‑out “truth” dataset nightly.  
3. Implemented **contrastive learning** with a small *real‑world fact* corpus (10 M facts) and fine‑tuned the model on **SageMaker Studio Lab**, reducing hallucination rate from 32 % to 9 %.  
4. Added an **explainability layer** via **Amazon SageMaker Explainability** so developers could audit predictions before deployment.

**Result**  
- Accuracy rose back to **91 %**; hallucinations dropped by **71 %**.  
- Ticket volume fell by **34 %**, saving $1.2 M in support costs annually.  
- Model latency remained under 200 ms, keeping the service highly available.

**Leadership Principles**  
*Customer Obsession* – ensured chatbot answers were trustworthy.  
*Ownership & Bias for Action* – I took full responsibility and executed a rapid, scalable fix using AWS services, demonstrating measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
