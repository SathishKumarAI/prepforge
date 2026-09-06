---
qid: ing_4fd3a88ee9__fp__local
question: 'Explain: Step 7. Define an agent — How Do AI Agents Work - by Neo Kim and
  Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 635
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:54:44-05:00'
sources: []
---

### Why we *define* an agent in the first place

At its core an AI system is a **mapping** from sensory input to action.  
Formally, given a stream of observations \(o_t\) and a set of permissible actions \(A\), we want a policy \(\pi: O^*\rightarrow A\) that maximizes expected return.  
But the raw problem—“take an image, press a button”—is under‑specified.  What *does* it mean to be “capable” or “effective”?  The missing piece is the **agent** itself: its internal representation of the world, its memory, and the algorithm that turns perception into action.

### Deriving the agent structure

1. **Perception module \(f_{\theta}\)**  
   Maps raw input \(o_t\) to a latent state \(s_t = f_{\theta}(o_t)\).  This is necessary because the environment’s dynamics are often high‑dimensional and noisy; compressing them into a low‑dimensional, predictive representation reduces variance in learning.

2. **Memory module \(m\)**  
   Maintains context across time steps: \(\tilde{s}_t = m(s_{1:t})\).  Without memory the agent cannot solve partially observable tasks—this is the principle of *belief states* from POMDP theory.

3. **Decision policy \(\pi_{\phi}\)**  
   Chooses action \(a_t = \pi_{\phi}(\tilde{s}_t)\).  The policy must be a function approximator (e.g., neural net) that can generalize across unseen states, satisfying the *optimisation principle*: maximize expected reward.

4. **Actuator interface**  
   Translates discrete action into environment‑specific control signals.

These components together constitute an **agent**: a closed loop \(o_t \rightarrow s_t \rightarrow \tilde{s}_t \rightarrow a_t\).  The loop must be *self‑contained* so that the agent can operate online without external intervention—this is why we explicitly define it rather than treating perception and action as separate modules.

### Non‑obvious insight

Most people think of an agent only as a policy network.  
But the **memory module** is actually the *true* source of generalisation: by learning a compact, predictive belief state, the agent can reuse past experience to anticipate future observations.  In practice, this means that two agents with identical perception and action modules but different memory architectures (e.g., LSTM vs Transformer) will exhibit drastically different performance on tasks requiring long‑term dependencies.

---

**Bottom line:** Defining an agent formalises the *closed‑loop* architecture necessary for autonomous decision‑making.  It enforces a principled separation of perception, memory, and action—each grounded in optimisation and probability theory—while revealing that memory is the hidden lever that turns raw data into foresight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
