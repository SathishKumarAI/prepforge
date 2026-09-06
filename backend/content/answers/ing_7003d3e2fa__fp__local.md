---
qid: ing_7003d3e2fa__fp__local
question: 'Explain: Chain-of-Thought (CoT) — Chain Of Thought'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 373
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:02:20-05:00'
sources: []
---

**Chain‑of‑Thought (CoT) reasoning in large language models**

At its core a language model is a stochastic predictor: it estimates \(P(y|x)\) for a token \(y\) given a context \(x\). For complex, multi‑step problems the true distribution factorises over an intermediate sequence of latent variables—think of a proof or a decision tree. CoT forces the model to *explicitly* generate these intermediates before committing to the final answer.

Why must we expose the chain?  
1. **Information bottleneck**: The hidden state after the prompt contains only the prompt’s surface form, not the full reasoning graph. By writing out intermediate steps, the model can re‑evaluate and correct earlier inferences, akin to an “attention over its own history.”  
2. **Gradient signal sparsity**: Training on final answers alone yields weak gradients for multi‑step tasks; CoT supplies dense supervision by supervising each step’s probability mass.  
3. **Cognitive alignment**: Human problem solving is iterative; a model that mimics this process inherits human‑like error patterns, enabling better calibration.

A subtle insight many overlook: *the chain need not be perfectly logical.* Even noisy or partially incorrect intermediate tokens can act as “anchors” that the model later revises. This self‑correcting behaviour arises because the language model’s probability distribution over tokens is continuous; a tentative hypothesis can be re‑weighted by subsequent evidence without catastrophic failure. Thus, CoT leverages both the **information bottleneck** and the **continuous nature of language modeling** to turn a black‑box predictor into an iterative reasoning engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
