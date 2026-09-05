---
qid: ing_0104bb6d45__fp__local
question: 'Explain: Go deeper on speculative decoding: acceptance-rate math, modern
  drafters like Medusa/EAGLE, and when it backfires.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 552
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:07:35-05:00'
sources: []
---

**Speculative decoding** is the engine behind most “draft‑and‑score” language models: the model proposes a token, scores it, then decides whether to accept or roll back and try again.  

### Acceptance–rate math  
Let \(p_i=\Pr(\text{token }i\mid \text{context})\).  
- **Top‑k** accepts any of the top‑\(k\) tokens; the acceptance probability is \(P_{\text{acc}}=\sum_{i=1}^k p_i\).  
- **Temperature‑scaled softmax** raises low‑probability tails: \(p'_i \propto p_i^{1/T}\); as \(T\downarrow\), \(P_{\text{acc}}\to 1\) for the mode, but with higher variance.  
- **Top‑p (nucleus)** accepts until cumulative probability reaches \(p\). Here \(P_{\text{acc}}=p\) by construction, regardless of the distribution’s shape.  

The expected number of proposals per accepted token is \(E[N]=1/P_{\text{acc}}\); thus low acceptance rates inflate latency linearly.

### Modern drafters  
- **Medusa** iteratively drafts a *draft* (e.g., 20‑token chunk) and re‑scales logits on the fly, using a learned “acceptor” that predicts whether a draft will survive. It reduces \(E[N]\) by pruning unlikely drafts early.  
- **EAGLE** augments Medusa with an adaptive *length penalty* that favors longer drafts when the model’s confidence is low, thereby smoothing acceptance across diverse contexts.

### When it backfires  
1. **Highly multimodal contexts**: acceptance rates drop sharply; speculative decoding stalls or produces incoherent bursts.  
2. **Hard‑constrained generation** (e.g., code completion with strict syntax): a draft that satisfies the local token distribution may still violate global rules, so rejections become frequent and wasteful.  
3. **Adversarial prompts**: crafted to trap the acceptor into low‑probability regions, causing repeated rollbacks.

**Non‑obvious insight:** The acceptance probability is not just a function of the current logits but also of *future* token expectations encoded in the draft’s internal states; modern drafters implicitly learn this by conditioning the acceptor on hidden activations, which explains why they outperform naïve top‑k/Top‑p schemes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
