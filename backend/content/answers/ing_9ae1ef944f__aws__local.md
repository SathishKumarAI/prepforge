---
qid: ing_9ae1ef944f__aws__local
question: 'Explain: Distillation & synthetic data — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 396
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:15:29-05:00'
sources: []
---

**Situation / Task**  
While leading the AI‑ops team at a SaaS startup, we had to reduce inference latency by 30 % for our language model without compromising accuracy on niche customer queries.  

**Action**  
1. **Model Distillation** – I engineered a student network 4× smaller than the teacher (from 12B to 3B parameters). Using SageMaker Training with `distilbert` scripts, we distilled on a curated 10 M‑token dataset; the student’s BLEU score dropped only 1.2 % while latency fell from 200 ms to 50 ms per request.  
2. **Synthetic Data Generation** – Leveraging Amazon SageMaker Ground Truth and the newly released “Synthetic Data” feature, we generated 5 M synthetic conversation pairs that mirrored edge‑case user intents. This expanded our fine‑tuning corpus by 150 % and lifted downstream F1 from 0.82 to 0.87 on unseen queries.  
3. **Alignment & Fine‑Tuning** – We introduced a reinforcement‑learning loop (SageMaker RL) with human‑in‑the‑loop feedback, aligning the model’s responses to compliance and tone guidelines.  

**Result**  
- Achieved 30 % latency reduction and a 5 % accuracy lift in production within 8 weeks.  
- Cut inference cost on EC2 G4 instances by $12k/month (≈ 25 %).  

**Leadership Principles Reflected**  
- **Customer Obsession** – Delivered faster, more reliable answers to users.  
- **Ownership & Dive Deep** – Took full ownership of the pipeline and deeply analyzed model internals to optimize trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
