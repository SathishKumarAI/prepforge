---
qid: ing_13d10a0015__fp__local
question: 'Explain: Components in Series — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 388
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:47:24-05:00'
sources: []
---

**Availability of a series system**

In reliability engineering the *availability* \(A\) of a component is the long‑run probability that it is operational at an arbitrary instant.  
For two components in **series** (the failure of either stops the whole system), the instantaneous state space has only two absorbing states: “system works” or “system fails”.  

Let \(A_1, A_2\) be the availabilities of each component and let failures be independent.  
The probability that *both* are up is simply the product:

\[
A_{\text{series}} = \Pr(\text{Comp 1 up})\,\Pr(\text{Comp 2 up})
                 = A_1\,A_2 .
\]

This follows from first principles: at any instant each component is either in an “up” or a “down” state.  
The system is up iff **every** component is up, and independence means the joint probability factors.  

If repair rates differ, the same product rule holds because availability already incorporates both failure and repair processes (steady‑state solution of the underlying CTMC).  

### Non‑obvious insight
In practice people often approximate \(A_{\text{series}}\) by a *linear* penalty on failure rates, but that ignores the exponential tail of MTBF.  
The product rule is exact only when **steady state** has been reached; during transient startup or after a major outage the instantaneous availability can be higher than \(A_1A_2\).  
Thus, system designers must verify that the *time‑to‑steady‑state* is acceptable—otherwise the simple product underestimates short‑term reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
