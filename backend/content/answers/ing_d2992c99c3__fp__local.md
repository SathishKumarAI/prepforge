---
qid: ing_d2992c99c3__fp__local
question: 'Explain: Evaluation plan — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 515
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:28:54-05:00'
sources: []
---

**Why an evaluation plan is essential**

A realtime voice agent must *translate* user speech into a correct, timely action while preserving naturalness and safety.  
From the optimization perspective this is a multi‑objective problem:  

1. **Accuracy** – the probability that the intent \(I\) and slots \(S\) match the ground truth given input utterance \(U\).  
2. **Latency** – the time \(\Delta t\) from speech onset to final response, bounded by human perceptual thresholds (~200 ms for interruption, ~800 ms for conversational flow).  
3. **Robustness** – resilience to noise, accents, and out‑of‑scope queries (measured as a failure rate \(F\)).  

These objectives are coupled: tightening latency often reduces accuracy due to early decoding; increasing robustness may inflate latency because of rescoring or fallback strategies.

**Deriving the evaluation metrics**

- **Intent/Slot F1**: harmonic mean of precision and recall across all annotated intents, capturing both over‑ and under‑recognition.  
- **Mean Reciprocal Rank (MRR)** for ambiguous utterances, reflecting how quickly the system homes in on the correct action.  
- **End‑to‑End Latency Distribution** with percentile cuts (e.g., \(P_{95}\) < 800 ms).  
- **Failure Rate under Stress Test**: percentage of utterances that trigger a fallback or silence when background noise > 15 dB SPL.

**Non‑obvious insight**

The *joint* distribution of \((\Delta t, F)\) often exhibits a “sweet spot” where modest latency increase dramatically reduces failure rate. Optimizing for the product \(F \times \Delta t\) rather than each metric in isolation yields systems that feel both responsive and reliable.

**Evaluation workflow**

1. **Synthetic stress tests** (noise, channel distortions).  
2. **Live pilot with human listeners** (A/B testing of latency‑tuned models).  
3. **Continuous monitoring** of the \(F \times \Delta t\) curve to trigger retraining when drift is detected.

By grounding the plan in these principled metrics, we guarantee that a realtime voice agent not only *works* but *delivers* an experience that feels naturally human.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
