---
qid: ing_b528952cd4__fp__local
question: 'Explain: ASR + diarization — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 424
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:29:39-05:00'
sources: []
---

**Automatic Speech Recognition (ASR) + Diarization for a Meeting Assistant**

The core problem: *turn a heterogeneous audio stream into actionable data.*  
1. **Recognition** – ASR maps waveforms \(x(t)\) to text \(\hat{w}\). It is fundamentally an inference of the most probable word sequence given acoustic likelihoods and language priors:
\[
\hat{w} = \arg\max_{w}\; P(w|x) \propto P(x|w)P(w).
\]
2. **Diarization** – simultaneously, we must partition \(x(t)\) into speaker‑specific segments. This is a clustering problem in the embedding space produced by an *embedding extractor* (e.g., x‑vectors). The objective minimizes intra‑speaker variance while maximizing inter‑speaker separation:
\[
\min_{\{S_k\}}\sum_{k}\sum_{i\in S_k}\|z_i-\mu_k\|^2 \quad \text{s.t.}\; |S_k|\ge 1.
\]

Combining them yields a **meeting assistant** that outputs *who said what* with timestamps, enabling downstream tasks (summaries, action‑item extraction, compliance monitoring). The synergy lies in shared acoustic features: the same encoder can supply both phonetic likelihoods and speaker embeddings, reducing computational cost.

**Non‑obvious insight:**  
Because diarization is unsupervised, it introduces *speaker‑dependent biases* into ASR. If a model is trained on single‑speaker data, its language model underestimates homophonic confusion when two speakers alternate rapidly. By jointly training ASR and diarization with a *joint loss* that penalizes misaligned speaker boundaries, the system learns to anticipate rapid turns, improving overall word error rate in realistic meetings—something separate pipelines miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
