---
qid: ing_034eac5c9f__fp__local
question: Models hallucinate. How do you design the product around that, not just
  the prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 423
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:12:05-05:00'
sources: []
---

**Why hallucinations matter**

A language model is a *posterior sampler* \(p(\text{output}\mid\text{prompt})\).  
It never knows the “ground truth”; it only has a distribution over plausible continuations.  
When that distribution places mass on an implausible or false token, the system *hallucinates*.  

**Product‑level design must treat the model as a noisy oracle**

1. **Quantify uncertainty** – expose the entropy or top‑k confidence of each answer.  
2. **Threshold gating** – if uncertainty exceeds a tunable risk level, defer to a fallback (human review, external API, or cached knowledge).  
3. **Retrieval augmentation** – attach a real‑time evidence engine so that the model’s internal distribution is conditioned on verifiable facts, tightening the posterior.  
4. **Feedback loop** – collect user corrections and feed them back as pseudo‑labels to re‑weight the posterior (online calibration).  

**Deeper principle**

This is an instance of *decision theory under partial observability*: you choose an action (display answer) that maximizes expected utility given a probability distribution over states (true facts). By letting uncertainty drive the interface, the product remains honest and safe.

**Non‑obvious insight**

Most designs treat hallucination as a prompt‑engineering problem; the real lever is *confidence‑aware UI*. When users see an explicit confidence bar, they adjust their trust dynamically—turning a noisy model into a reliable decision aid.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
