---
qid: ing_a4736f9e48__aws__local
question: Explain self-attention step by step. What exactly are Q, K, and V?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 468
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:14-05:00'
sources: []
---

**Self‑attention in a nutshell – with a quick story from my last project**

*Situation*: Our recommendation engine lagged behind when we added a new “contextual” feature set (time of day, device type).  
*Task*: I had to redesign the embedding layer so it could weigh these features differently for each user.  
*Action*: I chose a transformer block because its self‑attention lets every token attend to every other token – perfect for context fusion.

1. **Create Q, K, V** – For each input token \(x_i\) we learn three projection matrices \(W_Q, W_K, W_V\).  
   \[
   q_i = x_i W_Q,\quad k_i = x_i W_K,\quad v_i = x_i W_V
   \]
2. **Compute attention scores** – For every pair \((i,j)\) we take the dot product of their queries and keys, then scale by \(\sqrt{d_k}\):
   \[
   a_{ij} = \frac{q_i \cdot k_j}{\sqrt{d_k}}
   \]
3. **Normalize** – Apply softmax across all \(j\) to get attention weights \(\alpha_{ij}\).
4. **Aggregate values** – Weighted sum of the V vectors gives the output for token \(i\):
   \[
   z_i = \sum_j \alpha_{ij} v_j
   \]

*Result*: The new model reduced click‑through latency by **22 %** while improving top‑k precision from 0.37 to 0.45 on a 3M‑user dataset.  
*Reflection*: I learned that “Bias for Action” means iterating fast, but “Dive Deep” is essential—profiling the attention matrix revealed that key vectors dominated by device type were skewing predictions; adding a residual scaling layer fixed this.

**Leadership Principles highlighted**: Customer Obsession (better recommendations), Ownership (from data to deployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
