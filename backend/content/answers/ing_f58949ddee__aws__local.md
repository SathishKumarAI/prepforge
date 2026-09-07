---
qid: ing_f58949ddee__aws__local
question: 'Explain: Progressive Tool Discovery for Token Efficiency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 486
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:08-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to cut the average cost of our NLP inference pipeline by 30 % while keeping latency under 200 ms per request. The bottleneck was token‑level computation: we were sending the full text to a single heavy transformer model for every request, which meant many tokens were never used.

**Action – Progressive Tool Discovery (PTD)**  
I designed PTD as a *token‑driven cascade*:

| Layer | AWS Service | Role |
|-------|-------------|------|
| 1️⃣ **Tokenizer + Bloom Filter** | Amazon SageMaker Edge Optimized Inference, Redis on ElastiCache | Quickly checks if the first few tokens match any high‑value “trigger” patterns (e.g., product names). |
| 2️⃣ **Lightweight Classifier** | Lambda + DynamoDB | If a trigger is found, forwards only that token span to a fine‑tuned DistilBERT hosted on SageMaker. |
| 3️⃣ **Full Model Fallback** | SageMaker RealTime endpoint (GPT‑Neo) | Only used when no triggers are detected; otherwise the request is routed directly to Lambda for quick response. |

The cascade reduces average token count per inference from ~1,200 to ~450, a **62 % drop**, which lowered GPU hours by 28 %. I automated the trigger set with an S3‑driven CI/CD pipeline that retrains the Bloom filter every week.

**Result**  
- Cost: $12k/month → $8.4k/month (≈30 % savings).  
- Latency: Maintained <190 ms average.  
- Accuracy: 99.2 % of predictions matched full‑model baseline on a held‑out test set.

**Reflection & Learning**  
I owned the end‑to‑end pipeline, diving deep into token statistics to identify which portions actually mattered. The trade‑off was the added complexity of multi‑stage routing; however, by instrumenting each Lambda with CloudWatch metrics I could quickly rollback any regression. This experience reinforced my belief that *Ownership + Dive Deep* leads to scalable, cost‑effective ML solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
