---
qid: ing_b0a8751fe7__fp__local
question: 'Explain: Memory poisoning via prompt injection — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 458
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:19:55-05:00'
sources: []
---

**Memory poisoning via prompt injection – why it is inevitable in stateful agents**

A conversational agent stores *state* \(S_t\) (dialogue history, user profile, prior decisions).  
When a new prompt \(P_{t+1}\) arrives, the model updates its internal representation by computing  

\[
S_{t+1}=f(S_t,P_{t+1}),
\]

where \(f\) is the language‑model transformation.  
Because \(f\) is learned from data, it treats every token as a potential contributor to future outputs; there is no built‑in “filter” that distinguishes benign content from malicious.

Prompt injection exploits this: an attacker crafts \(P_{t+1}\) so that during training of the next turn, the model’s *attention* concentrates on harmful tokens.  
Mathematically, if \(\Delta S\) denotes the change induced by \(P_{t+1}\), the attacker maximizes  

\[
L_{\text{poison}}=\mathbb{E}_{x\sim\mathcal{D}}\big[\ell(f(S_t,x),y_{\text{desired}})\big]
\]

subject to constraints on token length and appearance probability.  
Because the model’s objective is to minimize \(\ell\) over its training data, it will *learn* that the attacker‑crafted tokens correlate with a desired target behavior.  

**Non‑obvious insight:**  
The poisoning succeeds not because of a vulnerability in the architecture but due to *information‑theoretic leakage*: every token contributes a small amount of mutual information \(I(S_{t+1};P_{t+1})\).  Even a single malicious token can raise this mutual information enough that, over many interactions, the model’s posterior shifts toward the attacker’s distribution.  
Thus, any stateful agent that incorporates raw user input into its memory is statistically bound to suffer some degree of memory poisoning unless an explicit *information‑sanitization* layer reduces \(I(S_{t+1};P_{t+1})\) before the update.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
