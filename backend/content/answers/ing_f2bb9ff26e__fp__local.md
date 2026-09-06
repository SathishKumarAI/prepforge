---
qid: ing_f2bb9ff26e__fp__local
question: Qwen3 unifies a "thinking" mode and a "non-thinking" mode in a single model,
  with a thinking budget the caller can set. How would you train that, and how would
  you serve it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 600
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:34:57-05:00'
sources: []
---

**Why a “thinking” budget is necessary**

In any real‑world deployment the cost of producing a response (latency, energy, compute credits) must be bounded while preserving accuracy.  
The *fundamental problem* is thus an **optimization over a constrained policy space**:  
\[
\max_{π}\; \mathbb{E}_{x,y}[R(π(x),y)] \quad
\text{s.t.}\;\mathbb{E}_{x}[C(π(x))]\le B,
\]
where \(R\) is reward (e.g., BLEU, F1) and \(C\) is the compute budget per query.

**Training strategy**

1. **Dual‑head architecture** – a shared transformer encoder feeds two heads:  
   *A fast head* that produces an answer in one pass;  
   *An optional “think” head* that can be invoked to refine the answer after an intermediate token stream is generated.
2. **Curriculum over budget** – start with \(B=0\) (fast only), gradually increase \(B\) during training, allowing the model to learn when extra reasoning improves reward enough to justify cost.
3. **Reinforcement signal** – treat each invocation of the think head as a *resource‑use action*. The RL objective penalizes over‑thinking via a term \(\lambda C(π)\), where \(\lambda\) is tuned so that the policy learns a *budget‑aware stopping rule*.
4. **Teacher forcing for the think head** – use ground‑truth “refined” answers as targets, encouraging the think head to learn how to correct the fast answer.

**Serving**

- The inference loop starts with the fast head and streams tokens.  
- At each step a lightweight *budget controller* (a small MLP) predicts whether the remaining budget allows another pass of the think head.  
- If the controller decides “think”, the current token sequence is fed to the think head, which returns a refinement that replaces or augments the previous output.  
- The process repeats until either the budget is exhausted or the controller signals termination.

**Non‑obvious insight**

Because the fast and think heads share parameters, *the act of thinking itself regularizes* the model: the fast head learns to be conservative (producing only what can be confidently answered), while the think head learns to exploit contextual cues that the fast head ignored. This dual‑view training reduces over‑fitting to a single inference style and yields a naturally self‑aware system that allocates compute exactly where it improves utility most.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
