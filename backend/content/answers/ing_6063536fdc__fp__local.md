---
qid: ing_6063536fdc__fp__local
question: 'Explain: Availability in parallel vs in sequence — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 451
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:30:29-05:00'
sources: []
---

### Availability: Parallel vs Sequential

**Fundamental problem:**  
A service must keep answering requests while individual components fail or become slow. Availability is the probability that *at least one* component can serve a request at any instant.

---

#### 1. **Sequential (serial) architecture**

```
Client → Service A → Service B → … → Service N
```

If any node in the chain fails, the entire request stalls.  
Let each node have failure probability \(p_i\). The system’s failure probability is  

\[
P_{\text{fail}}^{\text{seq}} = 1 - \prod_{i=1}^{N}(1-p_i)
\]

Even with a small \(p_i\), the product shrinks quickly, making availability exponentially worse as depth grows.

---

#### 2. **Parallel (redundant) architecture**

```
Client → [A₁,A₂,…,A_k]   // k replicas
```

The request succeeds if *any* replica replies.  
Assuming independent failures,

\[
P_{\text{fail}}^{\text{par}} = \prod_{j=1}^{k} p_j
\]

Thus the failure probability drops **multiplicatively** with each added replica, yielding a much higher availability for modest \(k\).

---

#### 3. **Deeper principle**

Availability is an *optimization* of the reliability function over system topology.  
- In serial chains, reliability is the product of individual reliabilities—an unavoidable bottleneck (the “weakest link”).
- In parallel redundancy, we exploit the law of large numbers: the probability that all replicas fail simultaneously becomes negligible.

---

#### 4. **Non‑obvious insight**

Redundancy improves availability **without** increasing average latency *if* replicas are truly independent and load‑balanced.  
However, if a shared dependency (e.g., common database) exists among replicas, their failures become correlated, nullifying the benefit. Hence true parallelism requires not just duplicated code but also isolated failure domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
