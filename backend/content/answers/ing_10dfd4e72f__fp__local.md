---
qid: ing_10dfd4e72f__fp__local
question: 'Explain: 14.1.1.2. Changing Colors ¶ — 14.1. Image Augmentation \u2014
  Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 356
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:41:38-05:00'
sources: []
---

**Why “changing colors” matters for a CNN**

A convolutional network learns a mapping \(f(x)\!\to\!y\) that must generalize across all plausible appearances of the same object.  
If training data are collected under one lighting or camera, the network’s internal features collapse onto that specific colour distribution; test images with different hues will be mis‑classified.  
From an information–theoretic view, colour channels encode *redundant* cues about identity: shape and texture are invariant to global hue shifts.  By perturbing colours during training we force the network to discard these redundant signals and focus on geometry—effectively increasing the *mutual information* between input and class label while reducing dependence on a particular distribution of pixel intensities.

**How the augmentation works**

The library multiplies each RGB channel by a random scalar drawn from a narrow interval (e.g., \(0.9\!-\!1.1\)), optionally adding Gaussian noise or applying HSV shifts.  This preserves local structure but perturbs global colour statistics, simulating different lighting conditions or sensor gains.

**Non‑obvious insight**

Colour jitter is *not* just data‑level regularisation; it also acts as a *domain randomiser*.  By exposing the network to a continuum of colour perturbations during training, we implicitly learn a feature extractor that is invariant to the entire colour manifold.  Consequently, the model becomes robust not only to unseen illuminations but also to domain shifts (e.g., from synthetic to real images) without needing explicit fine‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
