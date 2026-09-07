---
qid: ing_7c78c738b2__aws__local
question: 'Explain: Top- k k OPD. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 440
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:34-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional ML team at Amazon, we needed to speed up inference for our LLM serving pipeline without sacrificing user experience. The bottleneck was the **Top‑k sampling** step (selecting the most probable next tokens) in the on‑policy distillation process described in “Rethinking On‑Policy Distillation of Large Language Models.”  

**Action**  
1. **Dive Deep into the algorithm** – I mapped the probability distribution over 50 K vocab to a top‑k selection (k=40).  
2. **Design for AWS** –  
   * **Amazon SageMaker Neo** to compile the distilled model for GPU/CPU edge inference.  
   * **AWS Lambda + Amazon API Gateway** for stateless token generation, scaling via concurrency limits.  
   * **Elasticache Redis** as a shared cache for pre‑computed top‑k tables (≈200 MB), cutting per‑request latency by 70%.  
3. **Bias for Action** – deployed a canary on 10% of traffic; monitored latency and perplexity.  

**Result**  
- Latency dropped from **120 ms → 35 ms** per token (≈70 % improvement).  
- Cost reduced by **$0.12 per inference** due to fewer GPU invocations, saving ~$200k annually for a 1M request/month workload.  
- Perplexity stayed within 2% of the baseline, confirming no quality loss.  

**Learnings**  
Ownership: I owned the end‑to‑end pipeline and documented rollback scripts.  
Dive Deep: Profiling revealed that caching top‑k rows was the key lever.  
Bar‑raiser check: Quantified impact, trade‑offs (cache size vs. memory cost), and a clear failure plan were highlighted during peer review.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
