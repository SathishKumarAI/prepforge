---
qid: ing_06b3ea8ab5__faang__local
question: 'Q: A vendor says their model scores 90% on SWE-bench Verified. What questions
  do you ask before believing it predicts your coding-agent quality?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 430
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:00-05:00'
sources: []
---

**Clarify**

> *Problem:* You’re evaluating a vendor’s claim that their model scores **90 % on the SWE‑Bench Verified benchmark** and want to know if that performance translates to your own coding‑agent use case.  
> *Assumptions to confirm:*  
> 1. The benchmark version (dataset split, prompt style) matches your target domain.  
> 2. “90 %” refers to overall accuracy, not a subset of easier problems.  
> 3. No data leakage or over‑fitting was involved.

**Approach**

1. Ask for the *exact* dataset and evaluation protocol (token limits, prompt format).  
2. Request *public* results (confusion matrix, per‑task breakdown).  
3. Verify that the model is evaluated on *unseen* code from your target language(s).  
4. Compare their metric to a baseline you can run locally.

**Depth**

- **Metric definition:** Is it exact match, BLEU, or functional correctness?  
- **Prompting scheme:** Does it use zero‑shot or few‑shot prompts?  
- **Token budget:** 90 % could be achieved only with generous context windows.  
- **Hardware & inference latency:** High scores on a GPU cluster may not hold on edge devices.

**Edge Cases**

- *Domain drift:* The benchmark may favor algorithmic tasks, while your code involves APIs or domain knowledge.  
- *Adversarial examples:* Check robustness to malformed inputs.  
- *Versioning:* Ensure the model hasn’t been updated since the reported score.

**Optimize & Communicate**

Explain that a single benchmark is a proxy; you should perform an *internal audit*—run a representative sample of your own coding problems, measure pass‑rate, and compare against the vendor’s numbers. Highlight trade‑offs: higher accuracy may come at cost of inference time or token usage. Conclude by recommending a staged validation pipeline before full deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
