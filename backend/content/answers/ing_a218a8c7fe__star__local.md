---
qid: ing_a218a8c7fe__star__local
question: 'Explain: Supervised Fine-Tuning (SFT) — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 432
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:56:49-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with improving a customer‑service chatbot that had been built on an open‑source LLM but was frequently giving generic or irrelevant answers to product‑specific queries. The company needed a solution within three months before the holiday sales peak.

**Task**  
I had to fine‑tune the base model so it could answer 95 % of domain‑specific questions accurately while keeping inference latency below 200 ms on our existing GPU infrastructure.

**Action**  
First, I gathered a curated dataset of 12,000 labeled question–answer pairs from support tickets and product manuals. Using the Hugging Face Trainer API, I set up a supervised fine‑tuning pipeline:  

1. **Data preprocessing** – tokenized with the model’s tokenizer, applied padding/truncation to 512 tokens, and added a special “product‑info” prefix for context.  
2. **Training regime** – used a learning rate schedule (3e‑5 warmup over 200 steps) and mixed‑precision FP16 training on two A100 GPUs.  
3. **Regularization** – applied weight decay (0.01) and dropout (0.1) to prevent overfitting, monitored validation loss every epoch.  
4. **Evaluation & iteration** – after each round I ran a test set of 2,000 unseen queries, measured BLEU and F1 scores, and adjusted hyperparameters until the target accuracy was met.

**Result**  
The fine‑tuned model achieved a 92 % F1 on the validation set and a 97 % precision on live production traffic during a two‑week A/B test. User satisfaction scores rose from 78 % to 91 %, and we cut average response time by 30 %. I learned that careful dataset curation and a disciplined training loop are key to balancing performance with latency in real‑world AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
