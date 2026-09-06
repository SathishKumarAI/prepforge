---
qid: ing_4ff161a528__think__local
question: Explain pass@k vs pass^k. Why does the distinction matter for production
  agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 512
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:18:04-05:00'
sources: []
---

**1️⃣ Clarify the terminology and assumptions**  
   - *Pass@k* means “the system succeeds on at least one of k independent trials.”  
   - *Pass^k* (often written \(P^{k}\)) means “the system must succeed on all k trials in a row.”  
   - Assume each trial is statistically identical and the success probability per trial is \(p\).  
   - The context is evaluating AI agents that may need to perform reliably over multiple interactions.

**2️⃣ Mental model / framework**  
   - Think of *Pass@k* as an “any‑one‑succeeds” metric, equivalent to a Bernoulli process with success probability \(1-(1-p)^k\).  
   - Think of *Pass^k* as a “run‑length” or streak requirement, giving success probability \(p^k\).  
   - Use these formulas to compare how the metrics scale with k.

**3️⃣ Step‑by‑step reasoning toward the answer**  
   1. Compute both probabilities for a given \(p\) and k.  
   2. Observe that as k grows, Pass@k rapidly approaches 1 even for modest p, while Pass^k decays exponentially.  
   3. Relate this to production: an agent may pass on one request but fail on the next; Pass@k masks intermittent failures, whereas Pass^k exposes them.

**4️⃣ Common traps and wrong turns**  
   - Confusing “at least once” with “exactly once.”  
   - Assuming independence when trials are actually correlated (e.g., stateful agents).  
   - Ignoring that Pass@k can be misleading for safety‑critical deployments where a single failure is unacceptable.

**5️⃣ Sanity‑check & verbal communication**  
   - Plug in edge cases: \(p=1\) → both 1; \(p=0.5, k=10\): Pass@k≈0.9999, Pass^k≈0.00098.  
   - Explain that for production agents we care about *continuous reliability* (Pass^k), not just occasional success (Pass@k).  
   - Summarize: the distinction matters because it dictates whether a single error is tolerable or catastrophic in real‑world usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
