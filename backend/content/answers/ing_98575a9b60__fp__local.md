---
qid: ing_98575a9b60__fp__local
question: 'Explain: Build the task-lifecycle core of an annotation platform. Start
  simple; I''ll add requirements: consensus of k annotators, then priority re-review,
  then annotator cooldowns.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 574
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:29:56-05:00'
sources: []
---

### From Problem to Architecture

**Problem:** An annotation platform must *efficiently* turn raw data into high‑quality labeled items while balancing worker fatigue, fairness, and throughput.  
**Goal:** Design a **task lifecycle** that guarantees *k‑fold consensus*, allows *priority re‑review* of disputed tasks, and enforces *annotator cooldowns* to prevent overuse.

---

#### 1. Consensus as a Statistical Estimator
Treat each annotator’s label \(y_i\) as an unbiased noisy observation of the true label \(Y\).  
The maximum‑likelihood estimator (MLE) under independent noise is simply the **majority vote**:
\[
\hat Y = \arg\max_{c}\sum_{i=1}^{k}\mathbf{1}[y_i=c].
\]
Thus, we *require* exactly \(k\) annotations before finalizing a task.  
This satisfies two principles at once:

- **Statistical optimality**: With homogeneous workers the MLE minimises error probability.
- **Simplicity & determinism**: The lifecycle can be expressed as a finite‑state machine (FSM).

---

#### 2. Priority Re‑review via Bayesian Surprise
After consensus, compute the *posterior* over class probabilities:
\[
P(c|\mathbf{y}) = \frac{\prod_i P(y_i|c)}{\sum_{c'}\prod_i P(y_i|c')}.
\]
If the maximum posterior mass \(p_{\max}\) falls below a threshold \(\tau\), the task is flagged for *re‑review*.  
This Bayesian surprise metric guarantees that only genuinely ambiguous tasks consume extra resources, aligning with **information theory**: we invest effort where entropy remains high.

---

#### 3. Annotator Cooldowns as a Queueing Constraint
Model each annotator as a server in an \(M/M/1\) queue with service time equal to the annotation duration plus a cooldown period \(\Delta\).  
The scheduler must enforce that no worker receives two tasks within \(\Delta\), ensuring **fairness** and preventing burnout.  
A simple circular buffer of recent assignments suffices; when a task is released, we mark its annotators as *busy* for the next \(\Delta\) seconds.

---

#### Non‑Obvious Insight
The *cooldown* constraint can be absorbed into the consensus rule: by treating cooldowns as an additional “pseudo‑annotator” that never votes, the majority vote automatically skips workers still cooling down. This unifies scheduling and voting logic in a single FSM transition, simplifying implementation while preserving theoretical guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
