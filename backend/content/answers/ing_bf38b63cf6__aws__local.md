---
qid: ing_bf38b63cf6__aws__local
question: Would you fine-tune a base model or an instruct model? How does that choice
  change your data and your recipe?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 477
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:36:41-05:00'
sources: []
---

**Situation & Task**  
While redesigning the internal FAQ bot for our e‑commerce platform, I was asked to decide whether to fine‑tune a large language model (LLM) or an instruction‑tuned variant and how that choice would affect data collection and training recipe.

**Action**  
I applied **Customer Obsession** and **Dive Deep**.  
1. **Model choice** – The instruction model (e.g., OpenAI’s GPT‑4‑Turbo) already maps prompts to desired outputs, reducing hallucinations for product‑specific queries. Fine‑tuning a base model would require 3–5× more labeled data to reach the same precision.  
2. **Data strategy** – For the instruction path I curated a *structured prompt set* (customer intent → short FAQ response) and an *adversarial QA pair* dataset (~50 k examples). For a base model, I’d need a larger *generic conversation* corpus plus domain‑specific paraphrases, inflating storage by ~200 GB.  
3. **Recipe** – I used SageMaker Pipelines:  
   - Ingest prompts into an S3 bucket, versioned via Data Wrangler.  
   - Train on a `ml.g5dn.xlarge` cluster with mixed precision; checkpoint every 10k steps to EFS for durability.  
   - Evaluate against a held‑out intent set (precision@1 = 0.92 vs baseline 0.81).  

**Result**  
The instruction‑tuned bot achieved **87 % faster response time** and **15 % higher user satisfaction scores**, cutting training cost by **40 %** versus the base‑model approach.

**Bar‑raiser takeaways**  
- Ownership: I owned end‑to‑end data quality.  
- Dive Deep: Quantified trade‑offs in data volume vs accuracy.  
- Learn from failure: Early trials with a base model showed 25 % hallucination; pivoting to instruction mitigated this, reinforcing the importance of aligning model choice with product goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
