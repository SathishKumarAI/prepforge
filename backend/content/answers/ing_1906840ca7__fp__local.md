---
qid: ing_1906840ca7__fp__local
question: 'Explain: Chat App — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 324
total_tokens: 493
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:59:18-05:00'
sources: []
---

## Why a “Top 20” list matters

A chatbot is an *optimization problem*: it must pick the next utterance that maximises user satisfaction while respecting computational and policy constraints.  
Because the space of possible responses is astronomically large, designers ask a handful of questions to capture the essential design trade‑offs:

1. **What data do we have?**  The objective function (accuracy, latency) depends on labeled dialogues.  
2. **How do we measure success?**  Accuracy, BLEU, perplexity, or a custom reward from reinforcement learning all encode different geometry of the loss surface.  
3. **What architecture fits our constraints?**  Transformers are powerful but memory‑heavy; recurrent nets trade speed for context length.  

Answering these forces you to formalise *information* (entropy of user intent), *geometry* (embedding manifolds), and *probability* (posterior over intents).  

### A non‑obvious insight

Most people treat the “best model” as a black box.  
In reality, **the choice of tokenization is a prior that shapes the geometry of your latent space**: subword units bias the model toward learning compositional semantics, while character‑level tokens make it robust to typos but increase sequence length.  
Thus, selecting a tokenizer is not merely a preprocessing step—it directly redefines the optimisation landscape and can be more critical than the network depth itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
