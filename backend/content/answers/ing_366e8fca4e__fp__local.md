---
qid: ing_366e8fca4e__fp__local
question: 'Explain: does dynamic routing there''s a tier that'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 423
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:59:59-05:00'
sources: []
---

**Dynamic Routing in Capsule Networks – Why a “routing‑by‑agreement” tier is indispensable**

Capsules are groups of neurons that encode *both* the probability of an entity’s presence and its instantiation parameters (pose, scale, etc.). The fundamental problem they solve is *structured prediction*: we need to decide **which lower‑level capsules should contribute to which higher‑level capsule** while preserving equivariance.  

A naive feed‑forward pass would simply pool all lower‑level outputs into a single vector per upper capsule—this destroys pose information and collapses the rich representation. Dynamic routing introduces a *tier* of learnable coupling coefficients \(c_{ij}\) that act as soft gates between capsule \(i\) (lower layer) and capsule \(j\) (upper layer).  

The algorithm iteratively updates these coefficients by measuring **agreement** between capsule \(i\)’s prediction vector \(\hat{u}_{j|i}=W_{ij}u_i\) and the actual output of capsule \(j\). Mathematically, this is a form of *expectation–maximization*:  
1. **E‑step (routing):** compute log‑prior logits \(b_{ij}\), softmax to get \(c_{ij}\).  
2. **M‑step (aggregation):** weighted sum \(\sum_i c_{ij}\hat{u}_{j|i}\) followed by a squashing nonlinearity.

This tier ensures that only capsules whose predictions *agree* with the current hypothesis are amplified, yielding equivariant and robust representations.  

**Non‑obvious insight:** The routing coefficients are not static weights but *contextual priors* that evolve per input. They effectively perform **structured attention** over pose space, allowing the network to re‑allocate resources dynamically—an operation that ordinary convolution or fully‑connected layers cannot emulate without additional gating mechanisms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
