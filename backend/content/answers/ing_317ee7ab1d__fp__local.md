---
qid: ing_317ee7ab1d__fp__local
question: 'Explain: Cost estimate — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 568
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:50:05-05:00'
sources: []
---

**Cost Estimate for a Real‑Time Voice Agent**

A real‑time (RT) voice agent is essentially an online sequence‑to‑sequence system that converts audio → text → intent → response → text → speech, all within a few hundred milliseconds per utterance. The cost comes from three independent resources:

| Resource | What it measures | Why it matters |
|----------|------------------|---------------|
| **Compute** | FLOPs spent on ASR, NLU, LLM inference, TTS | Each token or audio frame requires GPU cycles; latency scales linearly with model size. |
| **Data transfer** | Bytes sent/received per utterance | Cloud APIs charge per MB; round‑trip latency adds to compute cost. |
| **Storage / state** | Memory for context and session history | Larger contexts inflate the prompt length (token budget), directly increasing LLM compute. |

From first principles, the *total cost* \(C\) is:

\[
C = \underbrace{\alpha\,F}_{\text{compute}} + 
    \underbrace{\beta\,B}_{\text{bandwidth}} + 
    \underbrace{\gamma\,S}_{\text{state}}
\]

where \(F\) is FLOPs, \(B\) is bytes transferred, and \(S\) is tokens in the context.  
The constants \(\alpha,\beta,\gamma\) are vendor‑specific pricing per unit.

**Why it must work this way**

- **Optimization:** Minimizing \(C\) while keeping latency below a threshold turns into a constrained optimization problem: choose model size, beam width, and cache strategy that satisfy \(T_{\text{latency}}\leq T_{\max}\).  
- **Information‑theoretic bound:** Each utterance carries \(H\) bits of user intent; the LLM’s prompt must encode at least \(H\) bits to be correct. Thus, truncating context below \(\lceil H\rceil\) tokens incurs a *probability* penalty that grows exponentially with missing information.

**Non‑obvious insight**

Most developers focus on reducing model size, but **caching the ASR output and reusing the same tokenization across turns yields far larger savings**. By feeding the same integer IDs to the LLM for repeated user phrases, you avoid re‑tokenizing and effectively lower \(F\) without altering inference quality—an optimization that is often overlooked yet can cut compute costs by 30–40 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
