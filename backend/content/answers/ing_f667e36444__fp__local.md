---
qid: ing_f667e36444__fp__local
question: 'Explain: Score a trace — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 678
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:43:34-05:00'
sources: []
---

### From First Principles: Why “Score a Trace” Exists

When an LLM is evaluated, we don’t just care about the *output*; we care about the *process* that produced it.  
A **trace** records every token generated, its probability, and any intermediate reasoning or tool‑use events.  
To judge quality we must map this high‑dimensional trajectory to a single scalar—**the score**—that reflects how well the model followed human intent.

1. **Problem statement**  
   *Given* a trace \(T = \{(t_i, p_i, r_i)\}\) and a reference or rubric \(R\), produce a real‑valued metric \(S(T,R)\).  
   The metric must be:  
   - **Invariant to token ordering** (only the final answer matters).  
   - **Sensitive to intermediate correctness** (e.g., a hallucinated step should penalize the score).  
   - **Composable** across multiple traces or tasks.

2. **Why probability‑weighted scoring works**  
   The LLM’s internal probabilities \(p_i\) encode its *confidence* at each step. A trace that consistently assigns high probability to correct tokens is more trustworthy than one that oscillates between confident wrong and uncertain right tokens.  
   Mathematically, we can view the score as an expectation over the trace:  

   \[
   S(T,R)=\sum_{i} w_i\,f(t_i,r_i)\,p_i
   \]

   where \(w_i\) are decay weights (capturing temporal importance) and \(f\) is a binary or continuous match function between token \(t_i\) and the rubric.

3. **Connection to Information Theory**  
   The negative log‑probability \(-\log p_i\) is the *surprisal* of each step. Summing surprisal over a trace gives its *information cost*. A lower cost indicates the model followed an expected, coherent path. Thus scoring can equivalently be phrased as minimizing total surprisal subject to rubric constraints.

4. **Geometric intuition**  
   Think of each token as a point in embedding space. The trace traces a path; the rubric defines a target subspace. Scoring is akin to measuring the *distance* between this path and the target, weighted by confidence. High‑confidence detours increase distance more than low‑confidence ones.

5. **Non‑obvious insight**  
   **Temporal weighting matters even for single‑turn prompts.** Because early tokens set context for all later tokens, a small misstep at the beginning can cascade into a large error downstream. Therefore Langfuse applies an exponential decay to weights \(w_i\) (e.g., \(w_i = \alpha^{n-i}\)) so that early mistakes are penalized more heavily than late ones—an effect often overlooked in simple accuracy‑only metrics.

In summary, “Score a Trace” is not just a numeric check; it’s an information‑theoretic, geometrically grounded evaluation of the entire generative process, ensuring that LLMs produce reliable, intent‑aligned outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
