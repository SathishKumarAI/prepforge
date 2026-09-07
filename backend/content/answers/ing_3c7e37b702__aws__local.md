---
qid: ing_3c7e37b702__aws__local
question: What's the relationship between cross-entropy, KL divergence, and perplexity
  - and why is cross-entropy the training loss for language models?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 473
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:42:40-05:00'
sources: []
---

**Situation & Task**  
I was leading a team that built a next‑generation chatbot on **Amazon SageMaker** for an e‑commerce voice assistant. Our goal was to reduce the model’s *perplexity* by 30 % while keeping inference latency under 200 ms.

**Action – Technical Design**  
We treated language modeling as a multi‑class classification problem: each token is a class.  
- **Cross‑entropy loss** = −∑ pₜ log qₜ, where pₜ is the one‑hot target and qₜ the model’s softmax output.  
- **KL divergence** (D<sub>KL</sub>(P‖Q)) expands to cross‑entropy minus entropy of P; since P is a delta distribution for supervised data, its entropy is zero, so D<sub>KL</sub> = CE.  
- **Perplexity** = exp(CE); it is the exponentiated average cross‑entropy and directly measures how “surprised” the model is on unseen text.

Thus, minimizing cross‑entropy simultaneously lowers KL divergence (our theoretical distance to the true distribution) and perplexity (the operational metric).  

We implemented a **Transformer** in PyTorch, trained on SageMaker’s distributed training with **S3** for data, **EFS** for checkpoints, and **AWS Inferentia** instances for inference. Hyper‑parameter sweeps were orchestrated via **SageMaker Experiments** to track 10 % variance reductions per epoch.

**Result**  
After two iterations we achieved a perplexity drop from **42** to **28** (≈33 % improvement) and maintained <200 ms latency on Inferentia. The model’s BLEU score improved by 5 points, directly boosting user satisfaction scores by 12 %.

**Reflection – Leadership Principles**  
- *Customer Obsession*: focused metrics that matter to users (latency, perplexity).  
- *Dive Deep & Ownership*: dissected loss functions, validated theory with AWS tooling, and iterated until the target was met.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
