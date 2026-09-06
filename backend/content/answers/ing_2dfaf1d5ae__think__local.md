---
qid: ing_2dfaf1d5ae__think__local
question: 'Explain: On average, how many fair coin flips until you see two heads in
  a row? Walk me through it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 754
total_tokens: 956
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:42:13-05:00'
sources: []
---

**Thought‑process for finding the expected number of fair coin flips needed to see two heads in a row**

1. **Clarify the problem & state assumptions**  
   - *Fair* means each flip has probability ½ for head (H) or tail (T).  
   - We want the *expected* number of flips starting from scratch until we first observe the pattern HH.  
   - Assume independence between flips and that we stop immediately after the second H in the pair.

2. **Choose a mental model / framework**  
   Use a Markov chain with states reflecting how much progress toward HH we’ve made:  
   - State 0: no recent H (start).  
   - State 1: last flip was an H (one head seen).  
   - Absorbing state 2: pattern HH achieved.  
   Compute expected steps from each non‑absorbing state.

3. **Reason step by step**  
   Let \(E_0\) be the expected flips starting from state 0, \(E_1\) from state 1.  
   - From state 0: one flip occurs → with prob ½ we go to state 1, with prob ½ stay in 0.  
     \[
       E_0 = 1 + \tfrac12 E_1 + \tfrac12 E_0
     \]
     Solve: \(E_0 - \tfrac12E_0 = 1 + \tfrac12E_1 \Rightarrow \tfrac12E_0 = 1 + \tfrac12E_1\).
   - From state 1: one flip occurs → with prob ½ we finish (HH), with prob ½ we go back to 0.  
     \[
       E_1 = 1 + \tfrac12(0) + \tfrac12 E_0
     \]
     Solve: \(E_1 = 1 + \tfrac12E_0\).
   Substitute \(E_1\) into the first equation:
   \[
     \tfrac12E_0 = 1 + \tfrac12(1 + \tfrac12E_0)
     \Rightarrow \tfrac12E_0 = 1 + \tfrac12 + \tfrac14E_0
     \Rightarrow \tfrac14E_0 = \tfrac32
     \Rightarrow E_0 = 6.
   \]
   Thus the expected number of flips until HH appears is **6**.

4. **Common traps to avoid**  
   - Forgetting that after a tail from state 1 we return to state 0, not staying in 1.  
   - Mixing up “expected additional flips” with total flips; always add the one flip you just made.  
   - Misapplying linearity of expectation to dependent events.

5. **Sanity‑check & explain**  
   The answer 6 is reasonable: the probability that HH occurs on flips 1–2 is \(¼\), on flips 3–4 is also \(¼\), etc., so a geometric‑like average around 4–8 makes sense. We can also simulate quickly to confirm ~6. When communicating, state the Markov chain setup, write the equations clearly, solve algebraically, and interpret the result as “on average we flip six times before seeing two consecutive heads.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
