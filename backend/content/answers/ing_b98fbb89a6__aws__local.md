---
qid: ing_b98fbb89a6__aws__local
question: 'Explain: What they emphasise — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 456
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:30-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was leading the NLP team that built a chatbot for our Alexa‑Skills store. The product’s success hinged on how “human” the responses sounded, so we needed a quantitative metric to drive engineering focus.

**Action (Dive Deep & Ownership)**  
We adopted **perplexity**, a language‑model evaluation metric that measures how well a probability model predicts a sample:  

\[
PP = 2^{-\frac{1}{N}\sum_{i=1}^{N}\log_2 P(w_i|w_{<i})}
\]

Lower perplexity means the model assigns higher probabilities to actual user utterances. I built a pipeline on **AWS SageMaker** that:

* Trains transformer models (BERT‑style) in parallel on **EC2 Spot** instances for cost control.  
* Evaluates perplexity nightly against a held‑out validation set stored in **S3**.  
* Pushes results to **Amazon CloudWatch** and triggers an SNS alert if PP increases > 5% week‑over‑week.

This “perplexity gate” became part of our CI/CD, forcing every model iteration to improve or be rejected.

**Result (Deliver Results)**  
Within two months the average perplexity dropped from 70 to **42**, correlating with a 12 % lift in user satisfaction scores and a 9 % increase in completed skill activations. The cost of training fell by 18 % due to Spot usage, while latency stayed under 200 ms (using **Elastic Inference**).

**Learning & Bar‑raiser Notes**  
Ownership: I owned the metric end‑to‑end.  
Dive Deep: I explained the math and tuned hyperparameters.  
Quantified Impact: Showed concrete PP reduction → business lift.  
Failure: Early iterations ignored perplexity, leading to user frustration; we pivoted fast after data surfaced.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
