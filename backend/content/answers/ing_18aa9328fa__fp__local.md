---
qid: ing_18aa9328fa__fp__local
question: 'Explain: Our method: compressing context into weights'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 441
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:58:24-05:00'
sources: []
---

**Why “compressing context into weights” is a natural solution**

A neural language model must answer queries based on *context* \(c\) (past tokens).  
Formally we want a function \(f_\theta(c)\) that predicts the next token, where \(\theta\) are learnable parameters.  
If we treated every possible context as an explicit input vector, the dimensionality would explode: each new sentence would require a fresh embedding.  

Instead of feeding raw tokens at inference time, we **embed** the entire context into a compact representation \(z = g(c)\) and then *hard‑code* this \(z\) into the model’s weights.  
Mathematically this is equivalent to solving
\[
\min_{\theta} \; \mathbb{E}_{c}\!\bigl[\,L(f_\theta(g(c)), y_c)\,\bigr],
\]
where \(y_c\) is the true next token.  
Because neural nets are universal function approximators, we can view the weights as a *parameterized dictionary* that maps each compressed context to a prediction. The compression step \(g\) is learned jointly so that contexts with similar downstream predictions share weight patterns—an instance of **information bottleneck**: we discard irrelevant token‑level detail while preserving predictive power.

**Non‑obvious insight:**  
The weight update rule itself can be interpreted as *meta‑learning* the context. By training on many contexts, the model learns a *prior over weight configurations*. When a new context arrives, instead of re‑optimizing from scratch, we simply *index* into this prior—effectively turning inference into a lookup in a high‑dimensional parameter space. This explains why large language models can instantly adapt to new topics: their weights already encode a compressed map of the entire distribution of possible contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
