---
qid: ing_709d689c8b__fp__local
question: What is Overfitting? — What is Overfitting? - Overfitting in Machine Learning
  Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 460
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:03:53-05:00'
sources: []
---

**Overfitting: A geometric‑probabilistic lens**

At its core, a learning algorithm seeks a function \(f\) that maps inputs \(\mathbf{x}\) to outputs \(y\).  
We only observe samples \((\mathbf{x}_i,y_i)\) from the true data distribution. The goal is to find an *expected* error
\[
E_{\text{test}} = \mathbb E_{(x,y)}[(f(x)-y)^2].
\]
The training set gives us a *sample* estimate of this expectation. If we fit \(f\) so closely that it interpolates every training point, the empirical error collapses to zero. However, such an interpolator typically captures idiosyncratic noise—random fluctuations unrepresentative of future data.

Mathematically, overfitting manifests as a large **variance** component in the bias–variance trade‑off:
\[
E_{\text{test}} = \underbrace{\text{bias}^2}_{\text{systematic error}}
+ \underbrace{\text{variance}}_{\text{sensitivity to training data}}
+ \sigma^2_{\text{noise}}.
\]
When the model’s capacity (degrees of freedom) exceeds what the sample can support, variance explodes. Geometrically, the hypothesis set becomes too flexible; it can weave a tight curve through each point, but that curve has no geometric justification beyond the training data.

**Non‑obvious insight:**  
Overfitting is not merely “too many parameters”; it’s *misaligned capacity*. A simple linear model on high‑dimensional data may underfit because its hypothesis set cannot capture the true structure. Conversely, a deep network on a tiny dataset can overfit even if it has fewer trainable weights than samples—because the *effective* degrees of freedom (through interactions and nonlinearities) far exceed the data support.

Thus, overfitting is the inevitable consequence when a model’s expressive power outstrips the statistical evidence available, leading to low training error but high expected test error.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
