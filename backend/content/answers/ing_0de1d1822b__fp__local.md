---
qid: ing_0de1d1822b__fp__local
question: 'Explain: The interview loop — Deepseek'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 508
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:35:07-05:00'
sources: []
---

### The “Interview Loop” in DeepSeek – a first‑principles view  

The core problem of an LLM is **predicting the next token** given a context. In practice we want *interactive* dialogue: the user supplies a prompt, the model answers, then the user refines or asks follow‑up questions. If we naïvely generate tokens until a stop symbol, we lose control over coherence and relevance.  

DeepSeek’s interview loop tackles this by **recasting generation as a constrained optimization** over an *interview* between two agents:

1. **Questioner (Q)** – the user or system prompt.  
2. **Answerer (A)** – the LLM.

At each step, Q proposes a *candidate continuation*, A evaluates it via its language model score and returns a feedback signal \(f\). The loop iterates until the objective

\[
\max_{x} \; \log P_{\theta}(x|c) + \lambda\, R(x)
\]

is satisfied, where \(P_{\theta}\) is the base LM probability, \(R(x)\) is a *relevance* reward (e.g., alignment with user intent), and \(\lambda\) balances fluency versus task compliance.

#### Why it works

- **Information‑theoretic view**: The loop trades off uncertainty reduction (\(P_{\theta}\)) against information gain about the user’s hidden goal (\(R(x)\)).  
- **Geometric intuition**: Each iteration projects the current hypothesis onto a subspace defined by the user’s constraints, gradually narrowing the feasible region.  
- **Probabilistic consistency**: By conditioning on the entire dialogue history, the model preserves the Markov property while incorporating higher‑level signals.

#### Non‑obvious insight

Most people treat the loop as “just another decoding strategy.” The hidden virtue is that it *automatically* enforces **self‑consistency**. Because A’s feedback depends on the *entire* generated sequence, any internal contradiction causes a penalty in subsequent iterations, driving the model toward globally coherent answers—something beam search alone cannot guarantee.

In short, the interview loop turns the generative process into an adaptive optimization that respects both linguistic likelihood and user intent, yielding dialogue that feels both fluent and purpose‑driven.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
