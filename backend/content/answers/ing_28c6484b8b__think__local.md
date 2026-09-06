---
qid: ing_28c6484b8b__think__local
question: 'Explain: What does the temperature parameter actually do? Give the formula.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 531
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:22:59-05:00'
sources: []
---

We need to reveal thinking process, numbered 1-5. Include clarifications, mental model, step-by-step reasoning, traps, sanity-check. Use markdown.**Thought‑Process Outline**

1. **Clarify the Question & State Assumptions**
   - Identify that “temperature” refers to the sampling temperature used in language‑model generation (e.g., GPT‑style softmax).
   - Assume we’re dealing with a discrete probability distribution over tokens, and the model outputs logits \(z_i\) for each token.
   - Note: Temperature is not a physical parameter but an exponentiation scaling factor.

2. **Select a Mental Model / Framework**
   - Think of temperature as a way to *sharpen* or *flatten* the probability distribution derived from logits.
   - Use the softmax function as the base, then introduce the temperature variable \(\tau\) into its exponent.

3. **Reason Step‑by‑Step Toward the Formula**
   - Start with the standard softmax: \(P_i = \frac{e^{z_i}}{\sum_j e^{z_j}}\).
   - Insert temperature by dividing logits before exponentiation: \(P_i(\tau) = \frac{e^{z_i/\tau}}{\sum_j e^{z_j/\tau}}\).
   - Explain edge cases: \(\tau=1\) yields the original distribution; \(\tau<1\) makes it peakier; \(\tau>1\) smooths it.

4. **Identify Common Traps & Wrong Turns**
   - Don’t confuse temperature with “sampling temperature” versus “softmax temperature”; they’re the same concept but sometimes mis‑notated.
   - Avoid thinking of temperature as a scaling factor on probabilities directly; it actually scales logits before exponentiation.
   - Watch out for \(\tau\to0\) (numerical overflow) and \(\tau\to\infty\) (uniform distribution).

5. **Sanity‑Check & Communicate Clearly**
   - Verify that the formula reduces correctly at extreme values: as \(\tau\to0^+\), the highest logit dominates; as \(\tau\to\infty\), all logits contribute equally.
   - Explain in plain terms how temperature controls randomness in generation, linking back to the math.
   - Provide a short example or intuition (e.g., “lower τ = more deterministic output”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
