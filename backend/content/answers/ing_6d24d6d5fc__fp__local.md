---
qid: ing_6d24d6d5fc__fp__local
question: How would you A/B test an LLM-powered feature, and how does it differ from
  testing a ranking-model change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 438
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:56:32-05:00'
sources: []
---

**A/B‑testing an LLM‑powered feature**

*Fundamental problem:* we want to know whether the new language model improves *user‑satisfaction* (e.g., click‑through, time spent) without hurting other metrics.  
The decision is a **policy change**: the system chooses a text response from one of two probability distributions \(P_{\text{old}}\) or \(P_{\text{new}}\). The objective is to maximize expected reward  
\[
J(\pi)=\mathbb E_{x\sim D}\bigl[\sum_{t} r_t(x,\pi)\bigr],
\]
where \(r_t\) is the per‑interaction reward.  
Because the LLM outputs are high‑dimensional and stochastic, we treat each user interaction as a **bandit arm**: selecting \(\pi_{\text{new}}\) for that arm yields a noisy reward sample. A *multi‑armed bandit* (UCB/Thompson sampling) framework lets us adaptively allocate traffic while respecting statistical power.

*Contrast with ranking‑model changes:*  
A ranking model is deterministic given the same features; its output is a permutation of documents, not a generative distribution. Testing it is essentially an *offline evaluation* (e.g., NDCG on held‑out clicks) followed by an *online A/B test* that compares two deterministic policies—no need for bandit adaptation because each arm’s reward variance is lower and the policy space is smaller.

**Non‑obvious insight:**  
For LLMs, the *policy entropy* matters: a higher‑entropy model may cover more diverse user intents but also produce noisier rewards. An A/B test that only measures aggregate clicks can mask this trade‑off; incorporating an **information‑theoretic penalty** (e.g., KL divergence to a baseline policy) in the reward function aligns exploration with user satisfaction and keeps the bandit problem well‑posed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
