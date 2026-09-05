---
qid: ing_2073ad80fe__fp__local
question: You suspect someone is distilling your model through your public API. How
  would you detect it and what can you actually do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 547
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:15:08-05:00'
sources: []
---

### Detecting a covert distillation attack

1. **Formulate the problem**  
   A legitimate user \(u\) submits queries \(\{q_i\}\) and receives responses \(\{r_i\}\). The attacker wishes to recover an approximation \(\hat{\theta}\) of your model parameters \(\theta\).  
   If the attacker behaves like a *teacher* in knowledge‑distillation, they will query with inputs that maximize the mutual information between \((q_i,r_i)\) and \(\theta\).

2. **Why this must hold**  
   The Fisher Information Matrix (FIM) \(I(q)=\mathbb{E}[(\nabla_\theta \log p(r|q,\theta))(…)]\) quantifies how much a single query tells us about \(\theta\). Queries that lie in high‑gradient regions of the input space produce large FIM entries. Thus, an attacker will concentrate queries on *informative* points: near decision boundaries or low‑entropy outputs.

3. **Detection strategy**  
   - **Query‑density heatmap:** Track how many distinct inputs fall into each bin of a discretized input space. Anomalous spikes indicate targeted probing.  
   - **Entropy monitoring:** Compute the Shannon entropy \(H(r|q)\) for each response. A sustained drop in entropy (very confident outputs) signals a distillation‑style attack.  
   - **Temporal clustering:** Fit a Poisson process to query arrivals; sudden bursts of high‑entropy queries are suspicious.

4. **What you can do**  
   - **Differential privacy noise**: Add calibrated Laplace/Gaussian noise to logits so that the FIM is uniformly bounded, limiting information gain without degrading utility.  
   - **Adaptive rate‑limiting**: If entropy falls below a threshold for \(k\) consecutive queries from the same IP/user, throttle or block further requests.  
   - **Query‑budget allocation**: Offer a fixed number of “high‑information” queries per day; after exhaustion, only low‑entropy (safe) responses are served.

### Non‑obvious insight
*The FIM is not just a local sensitivity measure—it imposes a global bound on what any sequence of queries can reveal. By enforcing a uniform upper bound on the expected Fisher information per query, you effectively cap the total mutual information that an attacker can accumulate over time, turning an otherwise unbounded distillation problem into one with provable limits.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
