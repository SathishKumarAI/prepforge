---
qid: ing_e62cfc5080__star__local
question: Hosted fine-tuning APIs vs training it yourself - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 334
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:08:13-05:00'
sources: []
---

**Situation:**  
During a recent product launch for our recommendation engine, we needed a domain‑specific language model that understood legal jargon. The existing open‑source LLM performed poorly on compliance queries—accuracy was only 65 % on our test set.

**Task:**  
I had to decide whether to fine‑tune the hosted API from OpenAI or build and train a custom model in-house, balancing time, cost, and regulatory constraints.

**Action:**  
I first benchmarked the hosted API: one round of prompt engineering raised accuracy to 72 % but still lagged on nuanced terminology. I then scoped an internal training pipeline using Hugging Face Transformers with our proprietary dataset (≈150k legal documents). After setting up GPU‑optimized training on a single NVIDIA A100, I ran 3 epochs, tuning learning rate and batch size through grid search. Parallel to this, I implemented automated validation checks against a held‑out compliance suite and used Weights & Biases for experiment tracking.

**Result:**  
The self‑trained model achieved 88 % accuracy on the compliance test set—an 18 pp improvement over the hosted API—while keeping inference latency under 200 ms. The training cost was $12k in cloud GPU time versus a projected $30k annual fee for the hosted service. I learned that when domain specificity and cost control are critical, building your own fine‑tuned model can outperform managed APIs, but it requires robust validation pipelines and dedicated compute resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
