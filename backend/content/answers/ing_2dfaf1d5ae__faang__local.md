---
qid: ing_2dfaf1d5ae__faang__local
question: 'Explain: On average, how many fair coin flips until you see two heads in
  a row? Walk me through it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 599
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:30:26-05:00'
sources: []
---

**Clarify**

> *What is the expected number of fair‑coin tosses needed to observe two consecutive Heads (HH)?*  
Assumptions: independent flips, each outcome ½, start counting from the first flip.

---

**Approach**

Model the process as a Markov chain with states representing how many consecutive heads have just appeared:
- **S₀** – no recent head.
- **S₁** – one head just seen (the last flip was H).
- **S₂** – absorbing state: two heads in a row.

Let \(E_i\) be the expected remaining flips starting from state \(i\). We want \(E_0\).

---

**Depth**

Write equations using first‑step analysis:

1. From S₀  
   \[
   E_0 = 1 + \tfrac12E_0 + \tfrac12E_1
   \]
2. From S₁  
   \[
   E_1 = 1 + \tfrac12E_2 + \tfrac12E_0
   \]

Since \(E_2=0\) (absorbing), solve:

- From (2): \(E_1 = 1 + \tfrac12E_0\).
- Substitute into (1):
  \[
  E_0 = 1 + \tfrac12E_0 + \tfrac12(1+\tfrac12E_0)
      = 1 + \tfrac12E_0 + \tfrac12 + \tfrac14E_0
  \]
  \[
  \Rightarrow E_0 = 1.5 + \tfrac34E_0
  \;\Longrightarrow\; \tfrac14E_0 = 1.5
  \;\Longrightarrow\; E_0 = 6.
  \]

Thus **on average, 6 fair coin flips are needed to see HH**.

---

**Edge Cases**

- If the coin is biased, probabilities change and the same linear‑system method applies with \(p=\Pr(H)\).
- For patterns longer than two (e.g., HTH), more states are required; still solvable via Markov chains or recurrence relations.
- Simulation can validate: running 10⁶ trials gives ≈6.00 flips.

---

**Optimize & Communicate**

Explain the intuition: each flip has a ¼ chance to immediately finish (HH). The remaining probability forces you to “restart” from S₀ or stay in S₁, leading to an expected extra 4 tosses after the first two attempts. Convey this clearly, noting that the Markov approach generalizes to any finite pattern and is efficient—O(k) states for a k‑length target.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
