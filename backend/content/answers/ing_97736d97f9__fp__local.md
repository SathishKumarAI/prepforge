---
qid: ing_97736d97f9__fp__local
question: 'Explain: Interview Follow-Up Questions — Customer Support Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 368
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:27:22-05:00'
sources: []
---

**Why follow‑up questions are indispensable for automated customer support**

At its core, a support bot is an *information‑seeking* system: it must reduce the uncertainty about a user’s problem as fast as possible while keeping interaction cost low. The bot starts with a prior distribution over all possible issues; each query is an observation that updates this distribution via Bayes’ rule. A single follow‑up question is chosen to maximise the expected information gain—essentially, the reduction in entropy of the posterior. If we ignore follow‑ups and accept the initial guess, we risk high misdiagnosis rates and wasted resolution cycles.

Mathematically, let \(S\) be the set of true states (issues), \(Q\) a candidate question, and \(\pi(s)\) our prior. The expected information gain of asking \(Q\) is  
\[
IG(Q)=H(S)-\sum_{a}P(a|Q)H(S|a,Q),
\]
where \(a\) ranges over possible answers. Selecting the \(Q\) that maximises \(IG\) yields the most efficient path to resolution.

**Non‑obvious insight:**  
Follow‑ups should be *contextualised* by the user’s own language, not just generic probes. Because natural language embeds latent cues (tone, urgency), a question that aligns with those cues can dramatically improve engagement and perceived empathy—an effect that purely entropy‑optimised queries miss. Thus, optimal support automation blends formal information theory with nuanced linguistic alignment to achieve both speed and satisfaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
