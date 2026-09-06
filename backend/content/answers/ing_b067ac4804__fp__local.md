---
qid: ing_b067ac4804__fp__local
question: 'Explain: Factuality and Instruction Following — Benchmarks And Leaderboards'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 585
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:19:24-05:00'
sources: []
---

### Why we need *factuality* & *instruction‑following* metrics

A language model is an **information‑retrieval engine** that learns to map prompts \(x\) to outputs \(\hat y\).  
Its utility hinges on two orthogonal guarantees:

1. **Factuality** – the probability that \(\hat y\) matches real‑world truth.  
   Formally, we want
   \[
   P_{\text{true}} = \Pr[\hat y = y^\*|x] ,
   \]
   where \(y^\*\) is the ground‑truth fact. This is a direct consequence of *calibration*: if a model’s confidence aligns with its accuracy, users can trust it.

2. **Instruction following** – the probability that \(\hat y\) satisfies a task specification.  
   Here we treat the instruction as a constraint \(C(x,\hat y)\), and evaluate
   \[
   P_{\text{follow}} = \Pr[C(x,\hat y)=1|x] .
   \]

Because these probabilities are *mutually dependent* (a correct answer must also obey the instruction), benchmarks must assess them jointly.

### Benchmarks as optimization problems

Each leaderboard is an empirical approximation of a loss
\[
L(\theta) = \alpha\,\mathbb{E}_{(x,y)}[1-\mathbf{1}\{\hat y=y^\*\}] + 
            (1-\alpha)\,\mathbb{E}_{(x,C)}[1-C(x,\hat y)] ,
\]
where \(\theta\) are model parameters and \(\alpha\) balances factuality vs. compliance.

Optimizing \(L(\theta)\) drives the model toward a *Pareto frontier*: improving one objective cannot be achieved without sacrificing the other beyond a certain point—this is why leaderboards often display trade‑offs rather than single scores.

### Non‑obvious insight

Most people treat instruction following as a simple “do what I say” task, ignoring that **instructions themselves encode priors**. A poorly phrased prompt can bias the model toward hallucinations, effectively turning a factuality problem into an ambiguity one. Therefore, benchmark designers must *standardize* instruction language or include *prompt‑robustness* as a separate dimension; otherwise, a high score may simply reflect the model’s ability to parse weak prompts rather than true comprehension.

In short, factuality and instruction following benchmarks are not arbitrary tests—they formalize calibration and constraint satisfaction within a joint optimization framework, revealing fundamental limits on what language models can reliably deliver.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
