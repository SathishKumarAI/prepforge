---
qid: ing_8333ea50df__star__local
question: Classify support tickets into 40 categories. LLM API, fine-tuned small model,
  or classical classifier - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 493
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:46-05:00'
sources: []
---

**Situation**  
At a SaaS help desk I was tasked with automating the triage of 12,000 daily support tickets that were previously routed manually to one of 40 product‑specific categories. The current manual process took an average of 2 minutes per ticket and had a misclassification rate of ~18%, leading to delayed responses for high‑priority issues.

**Task**  
I needed to design a classification pipeline that reduced processing time by at least 70% while keeping the error rate below 5%. I also had to fit within our existing infrastructure (AWS Lambda + SageMaker) and stay under $0.05 per inference cost.

**Action**  
1. **Data audit & feature engineering** – Collected ticket text, metadata, and past routing logs. Applied TF‑IDF on a cleaned corpus, added categorical features (priority flag, product line).  
2. **Model comparison** – Benchmarked three approaches:  
   * Classical Logistic Regression with n‑gram features (fast, low cost).  
   * Fine‑tuned BERT base via Hugging Face on 5 k labeled tickets (high accuracy but heavier compute).  
   * OpenAI GPT‑3.5 Turbo prompt engineered for “classify into 40 categories” (minimal training, higher inference token cost).  
3. **Cost & latency analysis** – Measured per‑ticket latency and API cost: Logistic Regression ~10 ms/0.00001$, BERT ~120 ms/0.001$, GPT‑3.5 ~250 ms/0.003$.  
4. **Hybrid deployment** – Used a two‑stage system: first, a lightweight Logistic Regression to filter obvious categories (≈70% of tickets). Remaining 30% routed to the fine‑tuned BERT model for higher confidence. This kept average latency at 45 ms and cost at $0.0005 per ticket.

**Result**  
The new pipeline cut processing time from ~2 min to ~4 s per ticket (97% reduction). Misclassification dropped to 3%, meeting the target. Overall, we saved ~$15k annually in support staffing costs and improved first‑response SLA by 40%. I learned that a staged, cost‑aware approach often beats pure “big model” solutions when operational constraints are tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
