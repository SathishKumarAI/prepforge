---
qid: ing_d314b72248__fp__local
question: 'Explain: Case Study 08 - AI Meeting Assistant (Transcription, Notes, Action
  Items)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 407
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:29:55-05:00'
sources: []
---

### Case Study 08 – AI Meeting Assistant  
**Fundamental problem**: In any group conversation the speaker’s intent is lost in noise once it leaves their voice. Human note‑takers must parse overlapping dialogue, infer context, and distill actionable items—all while staying present. The assistant turns this ill‑posed “semantic extraction” into a tractable inference task.

1. **Transcription**: A *sequence‑to‑sequence* acoustic model learns the mapping \(X_{audio}\rightarrow Y_{text}\) by maximizing likelihood over millions of labeled utterances. This is essentially a maximum‑entropy estimation of the joint distribution of phonemes and words, guaranteeing that rare sounds are still represented.

2. **Automatic summarisation**: The assistant treats the transcript as a graph where nodes are sentences and edges encode similarity (cosine or attention‑based). By solving a *minimum‑cost flow* problem on this graph—akin to finding a concise subgraph covering all key topics—it reduces redundancy while preserving coverage, an optimisation analogue of the set‑cover problem.

3. **Action‑item extraction**: Here we invoke *probabilistic graphical models*: each token is assigned a latent role (e.g., “responsibility”, “deadline”). Conditional random fields learn these roles jointly, so that verbs like “deliver” and nouns like “report” are coupled, yielding high‑precision action lists.

**Non‑obvious insight**: The *attention* mechanism in the summariser acts as a soft “speaker selector”. It learns to weight each utterance not merely by content but by who spoke it, implicitly modelling speaker credibility. Thus the assistant can automatically surface critical points from senior participants even if they speak briefly—a feature most commercial tools miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
