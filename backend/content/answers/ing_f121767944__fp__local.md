---
qid: ing_f121767944__fp__local
question: What is chain-of-thought prompting? When does it help, and when is it unnecessary
  or harmful?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 448
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:31:57-05:00'
sources: []
---

**Chain‑of‑thought (CoT) prompting** emerges from the *inference bottleneck* that large language models face when asked to solve a multi‑step task with a single softmax prediction. In a conventional prompt, the model is forced to map a question directly to an answer, implicitly compressing all intermediate reasoning into one hidden state transition. CoT supplies an explicit “intermediate plan” by asking the model to generate a sequence of natural‑language deductions before arriving at the final output.

From an optimization view, this transforms a high‑dimensional mapping problem \(q \rightarrow y\) into a *structured prediction* task:
\[
q \;\xrightarrow{\text{generate}}\; r_1,r_2,\dots ,r_k \;\xrightarrow{\text{finalise}}\; y,
\]
where the intermediate tokens \(r_i\) act as auxiliary variables that regularise the latent representation. By exposing these auxiliaries, gradient‑based fine‑tuning (or reinforcement learning) can more easily shape the model toward logical consistency and reduce catastrophic forgetting of reasoning patterns.

**When CoT helps:**  
- Tasks requiring multi‑step arithmetic or symbolic manipulation, where intermediate states are *necessary* for error detection.  
- Situations with high variance in answer length; the model benefits from an explicit scaffolding to avoid hallucinations.  

**When it is unnecessary or harmful:**  
- Simple lookup or single‑shot classification, where extra tokens only add noise and increase inference cost.  
- Domains where intermediate reasoning is *opaque* to humans (e.g., raw image captioning); forcing a text chain can misalign the model’s internal attention.  

**Non‑obvious insight:**  
CoT can actually *improve calibration*. By exposing each deduction, the model learns to self‑audit: if an early step seems inconsistent, it can backtrack before committing to the final answer. This mirrors human probabilistic reasoning, where confidence is updated after each inference step rather than at the end.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
