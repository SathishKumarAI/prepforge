---
qid: ing_001e16b646__fp__local
question: 'Explain: The Fix: Three-Tier Memory with Decay — The Day 30 Problem: Why
  Your AI Agent Gets Worse Over Time | Cipher'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 381
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:05:45-05:00'
sources: []
---

**The day‑30 problem**  
An online learning agent is exposed to a stream of data. If it stores every observation forever, its *memory* explodes: old patterns drown new ones, yet the model still “remembers” stale regimes. Conversely, if it discards everything, it forgets useful structure and becomes noisy. The fundamental dilemma is **how to preserve long‑term knowledge while allowing rapid adaptation**.

**Three‑tier memory with decay**  
1. **Short‑term buffer (STM)** – a rolling window of the last *k* samples. It feeds the learner immediately, ensuring responsiveness.  
2. **Mid‑term archive (MTM)** – a reservoir sampled uniformly from STM. Its size is limited; each entry carries an exponential decay weight that reflects its age. This balances recent experience with diverse historical contexts.  
3. **Long‑term catalog (LTM)** – a compressed, sparse representation of the most stable patterns discovered by MTM. Items are promoted only when their importance exceeds a threshold, preventing drift.

The decay factor is derived from an information‑theoretic bound: the expected KL‑divergence between the true data distribution and the agent’s internal model grows if old samples are weighted too heavily. By exponentially down‑weighting older entries, we keep this divergence bounded while still allowing rare but critical events to survive long enough for promotion.

**Non‑obvious insight**  
The decay schedule need not be monotonic. In non‑stationary environments a *reversed* decay—boosting slightly older samples just before expected regime shifts—lets the agent anticipate change, turning passive forgetting into active anticipation. This subtle timing trick can dramatically reduce performance collapse on day 30 and beyond.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
