---
qid: ing_ce3a44ef6d__fp__local
question: Tell me about a time your eval metrics and real user feedback disagreed.
  Which did you trust?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 329
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:19:08-05:00'
sources: []
---

When I evaluated a language‑model chatbot for a customer‑support task, the **perplexity** and BLEU scores dropped dramatically after a model upgrade—suggesting better fluency. Yet **real‑world NPS surveys** spiked: users reported more frustration with ambiguous answers.

The root lies in what each metric optimises. Perplexity measures *token predictability* under a training distribution; it rewards surface‑level coherence but ignores **semantic alignment** with user intent. BLEU, borrowed from machine translation, penalises any deviation from reference sentences, even if the model’s reply is contextually appropriate. Both metrics are blind to *task success* and *user satisfaction*, which hinge on *information gain* and *actionability*—principles of decision‑theoretic utility.

In contrast, user feedback directly captures the downstream effect: did the answer help solve the problem? The non‑obvious insight is that **feedback aggregates over many latent variables** (clarity, trust, tone) that a single loss function cannot disentangle. Therefore, I weighted *task‑specific success rates* and *user‑reported satisfaction* higher than perplexity/BLEU, treating them as proxies for the true objective: maximising expected utility in real interactions.

In short, when metrics conflict with user experience, trust the metric that aligns with the **information‑utility** of the task—here, human feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
