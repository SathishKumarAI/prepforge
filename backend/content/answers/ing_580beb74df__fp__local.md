---
qid: ing_580beb74df__fp__local
question: 'Explain: It doesn''t look things up, it predicts the next token'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 413
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:11:28-05:00'
sources: []
---

When we train a language model we give it millions of sentences and ask it to **maximize the probability that the next word is exactly what the data says**.  
Formally we minimize  

\[
L(\theta)= -\sum_{t}\log P_{\theta}(w_t \mid w_1,\dots ,w_{t-1})
\]

over parameters \( \theta \).  
The model therefore learns a **distribution over tokens conditioned on every preceding context**. It does not store explicit “facts” in a lookup table; it stores the *statistical regularities* of language inside its weights.

During inference we only have the current context, so the best we can do is sample from that learned distribution:

\[
w_t \sim P_{\theta}(\cdot \mid w_1,\dots ,w_{t-1})
\]

This is why a model “predicts” the next token rather than “looks it up”. The act of prediction turns the internal probability table into an *open‑ended* generator: each choice influences all subsequent tokens, allowing the creation of novel sentences that were never seen during training.

**Non‑obvious insight:** because the distribution is continuous over a vast context space, two very similar contexts can yield subtly different next‑token probabilities. A tiny change in wording can steer generation dramatically, which explains why paraphrasing often yields different model outputs even though both phrases mean the same thing. This sensitivity comes directly from the optimization of likelihood and not from any explicit knowledge base.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
