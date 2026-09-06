---
qid: ing_a54172da4a__fp__local
question: 'Explain: ── Per-frame prompt ──────────────────────────────────────────────────────────'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 469
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:57:22-05:00'
sources: []
---

**Per‑frame Prompting – Why It Works**

At its core, a *per‑frame prompt* is a dynamic conditioning signal that varies with every temporal unit of an input sequence (e.g., video frames). The fundamental problem it solves is *temporal alignment*: a static prompt forces the model to treat all frames as if they share the same semantic context, which collapses motion cues into noise. By allowing the prompt vector \(p_t\) to change with time index \(t\), we effectively embed a lightweight, learnable “context field” that the network can modulate per‑frame.

Mathematically, consider an encoder–decoder architecture where each frame \(\mathbf{x}_t\) is processed as
\[
h_t = f_{\theta}(\mathbf{x}_t, p_t),\qquad y_t = g_{\phi}(h_{1:t}),
\]
with \(f_{\theta}\) a transformer or CNN and \(g_{\phi}\) a temporal aggregator. The prompt acts like a *conditional bias* that can be viewed as an auxiliary input to the attention mechanism:
\[
A_{ij} \propto \exp\!\big((q_i + p_t)\cdot k_j / \sqrt{d}\big).
\]
This is equivalent to adding a learnable positional embedding that is *semantic*, not purely spatial. The model learns to shift its receptive field in feature space as motion unfolds, preserving both low‑level appearance and high‑level semantics.

**Non‑obvious insight:**  
Because the prompt is lightweight (often a few hundred parameters), it can be optimized jointly with the backbone yet remains decoupled from the heavy weight matrix. This allows *fast adaptation* to new domains or tasks: by fine‑tuning only \(p_t\) on a handful of frames, we effectively re‑parameterize the entire network’s temporal dynamics without touching the core weights. Thus per‑frame prompting is not merely a trick for better performance—it offers a principled route to *temporal domain adaptation* with minimal computational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
