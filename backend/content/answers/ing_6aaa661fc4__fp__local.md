---
qid: ing_6aaa661fc4__fp__local
question: What actually happens during supervised fine-tuning? What role do chat templates
  and special tokens play?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 473
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:51:38-05:00'
sources: []
---

**Supervised fine‑tuning is an *optimization* problem on a pre‑trained language model (LM).**  
The LM has already learned a probability distribution \(p_\theta(\text{token}\mid \text{context})\) from massive unsupervised corpora, where \(\theta\) denotes all weights. Fine‑tuning treats the target task as a *sequence‑to‑sequence* objective: for each example we supply an input–output pair \((x_i,y_i)\). The model is asked to generate \(y_i\) given \(x_i\); mathematically we maximize  

\[
\sum_{i}\log p_\theta(y_i\mid x_i).
\]

This is equivalent to minimizing the cross‑entropy loss over the supervised dataset. Back‑propagation updates \(\theta\) so that the conditional distribution becomes sharper around the correct target, while preserving as much of the pre‑trained knowledge as possible.

**Chat templates and special tokens shape this objective geometrically.**  
A template like “User: {prompt}\nAssistant:” fixes a *context window* that biases the LM to interpret the preceding text as a user utterance and the following tokens as an assistant reply. The token `[CLS]` (or similar) often marks the start of the sequence, enabling the model to learn where the output should begin; `[SEP]` can delimit distinct parts. These markers act as *anchors* in hidden‑state space: they force the network to allocate specific subspaces for “question” vs. “answer”, reducing interference between unrelated tokens and making gradient updates more stable.

**Non‑obvious insight:**  
Because the LM is trained on vast, heterogeneous data, its internal representation of a token depends heavily on *contextual cues*. By inserting consistent template markers, we effectively *re‑label* the same token across examples, turning a noisy unsupervised signal into a clean supervised one. This subtle re‑labelling can be more powerful than merely adding new training data; it guides the model’s attention to the *structure* of dialogue rather than just surface word frequencies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
