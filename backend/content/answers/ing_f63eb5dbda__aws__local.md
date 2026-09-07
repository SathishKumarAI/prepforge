---
qid: ing_f63eb5dbda__aws__local
question: 'Explain: Unrivaled performance across complex documents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 368
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:48-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team at my previous role, we were asked to deliver an AI‑powered document understanding service for legal contracts that could outperform existing solutions on accuracy and latency—“unrivaled performance across complex documents.”  

**Action**  
I first *dive deep* into the data: sampled 120k contract clauses, identified 35 high‑variance token patterns, and built a custom tokenizer in Rust for sub‑millisecond preprocessing. I chose **Amazon SageMaker** to train a transformer model (T5‑large) fine‑tuned on our corpus, then deployed it via **SageMaker Neo** to **AWS Inferentia** for 10× faster inference at $0.04 per 1k requests. For real‑time feedback I added an asynchronous **Amazon SQS** queue and a Lambda orchestration layer that retries failed predictions with exponential back‑off, ensuring >99.9% availability.  

**Result**  
The system achieved **97.8 % F1 score** on clause classification—up 4.5 pts over the benchmark—and reduced average inference time from 350 ms to 28 ms, cutting latency by **92 %**. Cost per request dropped 35 %, enabling a projected $2.3M annual savings for a customer with 1M contracts/year.  

**Learning**  
When initial trials hit over‑fitting, I re‑examined the feature space, added dropout and label smoothing, and iterated quickly—demonstrating **Bias for Action** while maintaining ownership of quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
