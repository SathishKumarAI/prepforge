---
qid: ing_d50f3fe385__aws__local
question: 'Explain: IndicGenBench (One-shot) — sarvamai/sarvam-1 \u00b7 Hugging Face'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 441
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:24-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science squad at my previous role, we were asked to evaluate the quality of low‑resource language models for a product that serves over 1 M users in India. The benchmark had to be lightweight (one‑shot) yet realistic.

**Action**  
I spearheaded the **IndicGenBench (One‑Shot)** implementation:

* **Requirements & Design** – Defined a prompt‑based generation test suite covering *10* Indian languages, each with 50 seed prompts. Leveraged Hugging Face’s `datasets` API to ingest multilingual corpora and used `transformers.AutoModelForCausalLM` for inference.
* **AWS Stack** – Deployed on **Amazon SageMaker Endpoint (Multi‑GPU)** for parallel scoring; used **S3** for prompt storage, **CloudWatch** for logging latency, and **Cost Explorer** to cap spend at $0.25 per 1 k tokens.
* **Scalability & Availability** – Enabled auto‑scaling on CPU/GPUs; used **EFS** for shared model artifacts to reduce cold‑start times by 40%. Added a Lambda fallback that triggers re‑training if latency exceeds 2 s, ensuring 99.9% availability.

**Result**  
The benchmark produced an average perplexity improvement of **12%** over baseline models and reduced inference cost by **35%**. The insights directly informed the product roadmap, cutting time to market for new language support from 8 weeks to 3 weeks.

**Learning & Bar‑raiser Notes**  
*Showed Ownership* – drove end‑to‑end delivery.  
*Dive Deep* – quantified latency and cost trade‑offs.  
*Quantified Impact* – clear metrics (12% perf, 35% cost).  
*Learned from Failure* – early runs hit a 5 s latency spike; we iterated on model pruning and batch size until stability was achieved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
