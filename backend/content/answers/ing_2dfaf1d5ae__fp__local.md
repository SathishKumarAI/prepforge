---
qid: ing_2dfaf1d5ae__fp__local
question: 'Explain: On average, how many fair coin flips until you see two heads in
  a row? Walk me through it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 678
total_tokens: 861
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:42:38-05:00'
sources: []
---

**Problem restated**

We flip an unbiased coin until the pattern “HH” (two consecutive heads) appears.  
Let \(E\) be the expected number of flips required.

---

### Why a recursion works

The outcome after each flip depends only on whether the last flip was a head or not; all earlier history is irrelevant.  
Thus we can model the process with two states:

| State | Meaning | Transition |
|-------|---------|------------|
| \(S_0\) | “no preceding head” (start, or just saw a tail) | next flip: H → \(S_1\), T → \(S_0\) |
| \(S_1\) | “just saw one head” | next flip: H → finish, T → \(S_0\) |

Let \(E_0\) and \(E_1\) be the expected remaining flips from states \(S_0\) and \(S_1\).  
We seek \(E_0\) (the process starts in \(S_0\)).

---

### Setting up the equations

From \(S_0\):
\[
E_0 = 1 + \tfrac12 E_1 + \tfrac12 E_0
\]
(one flip is made, then we go to \(S_1\) or stay in \(S_0\)).

From \(S_1\):
\[
E_1 = 1 + \tfrac12 \underbrace{0}_{\text{HH finished}} + \tfrac12 E_0
\]
(one flip, then either finish or return to \(S_0\)).

Solve simultaneously:

\[
\begin{aligned}
E_0 - \tfrac12 E_0 &= 1 + \tfrac12 E_1 &&\Rightarrow\quad \tfrac12 E_0 = 1 + \tfrac12 E_1\\
E_1 &= 1 + \tfrac12 E_0
\end{aligned}
\]

Substitute the second into the first:

\[
\tfrac12 E_0 = 1 + \tfrac12(1 + \tfrac12 E_0) 
\;\Longrightarrow\; \tfrac12 E_0 = \tfrac32 + \tfrac14 E_0
\;\Longrightarrow\; \tfrac14 E_0 = \tfrac32
\;\Longrightarrow\; E_0 = 6.
\]

---

### Result and insight

On average **six flips** are needed to observe two heads in a row.  
A subtle, often overlooked point: the expected time is *exactly* twice the reciprocal of the probability of the pattern occurring on any given pair of consecutive flips (\(1/4\)), because overlapping occurrences (e.g., “HHH”) create a renewal structure that balances the extra waiting time.

This demonstrates how a simple Markov chain encodes the geometry of patterns in sequences, turning an intuitive counting problem into a solvable linear system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
