---
qid: ing_f1c5d7cec5__fp__local
question: R1-Zero was trained with reinforcement learning and essentially no supervised
  fine-tuning first. What did that show, and why did the full R1 add SFT back?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 528
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:33:18-05:00'
sources: []
---

**Why a purely‑RL “R1‑Zero” was surprising**

Reinforcement learning (RL) learns by trial‑and‑error: the model samples actions, receives a reward signal, and updates its policy to maximize that reward. In the *zero‑supervised* variant of GPT‑4‑Turbo (R1‑Zero), the system never saw human‑written question–answer pairs during training; it only optimized for an externally defined reward (e.g., coherence, factuality). That alone proved two deep facts:

| Fundamental problem | Why RL alone sufficed |
|---------------------|----------------------|
| **Language generation is a sequential decision process** | Each token choice can be treated as an action whose value depends on future tokens. |
| **Reward signals can encode high‑level desiderata** | A carefully crafted reward (e.g., penalizing hallucination) guides the policy toward safe, useful outputs without hand‑labelled examples. |

Thus R1‑Zero demonstrated that a massive transformer could learn *to speak* correctly and safely purely from a global objective—an elegant confirmation of the *no‑free‑lunch* principle: with enough data and compute, a model can internalize complex behaviors without explicit supervision.

**Why full R1 added SFT back**

Despite its strengths, RL alone struggled on two fronts:

1. **Sample efficiency & stability** – RL updates are noisy; the policy wandered far from human conventions, producing oddly phrased or overly generic responses.
2. **Safety‑bias alignment** – The reward function cannot capture every subtle nuance of acceptable behavior (e.g., avoiding political bias). Human feedback is essential to encode these fine distinctions.

Supervised Fine‑Tuning (SFT) injects a curated corpus of human‑annotated examples that act as *anchors* in the policy space. They provide deterministic gradients that correct RL drift, enforce style consistency, and embed domain‑specific knowledge. The hybrid pipeline—RL pretraining followed by SFT—thus marries global exploration with local guidance, yielding a model that is both high‑performing and reliably aligned.

**Non‑obvious insight**

The key hidden lesson: *RL alone can bootstrap competence, but human‑informed fine‑tuning is the mechanism that translates competence into **trustworthy** performance.* Without SFT, a model might pass benchmark tests yet still misbehave in edge cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
