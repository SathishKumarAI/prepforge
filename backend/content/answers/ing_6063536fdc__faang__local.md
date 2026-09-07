---
qid: ing_6063536fdc__faang__local
question: 'Explain: Availability in parallel vs in sequence — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 450
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:28:12-05:00'
sources: []
---

**1️⃣ Clarify**  
The question asks how *availability* differs when a service runs **in parallel** (multiple replicas) versus **in sequence** (single path). I’ll assume:  

- Availability = fraction of time the system can serve requests without error.  
- Parallel means independent, redundant components; sequence means a single linear chain of services.  

**2️⃣ Approach**  
*Sketch the model*: compute reliability per component, then combine for parallel vs series. Show impact on MTBF (mean‑time‑between‑failures).  

**3️⃣ Depth**  
Let each component have failure probability *p*.  
- **Sequence (series)**: system fails if any component fails →  
  \(P_{\text{seq}} = 1-(1-p)^n\) for *n* components.  
  MTBF ≈ \(\frac{MTBF_{\text{single}}}{n}\).  
- **Parallel**: at least one replica must succeed →  
  \(P_{\text{par}} = (1-p)^m\) for *m* replicas of a single component.  
  MTBF ≈ \(MTBF_{\text{single}}\times m\).  

Thus parallel design exponentially improves availability, while sequence degrades it linearly. Trade‑offs: cost, consistency complexity, and latency overhead for coordination.

**4️⃣ Edge Cases**  
- *Correlated failures* (shared power or network) break independence assumption → overestimate availability.  
- *Hot standby* vs *active‑active*: active‑active may introduce split brain issues.  
- Latency spikes in parallel can mask availability if retries fail within SLA.

**5️⃣ Optimize & Communicate**  
Explain that in large‑scale systems we combine both: a **parallel microservice cluster** behind a **load balancer**, with *sequential* data pipelines for stateful stages. Use health checks, graceful degradation, and automated failover to keep the overall MTBF high while meeting performance SLAs. Conclude by highlighting that parallelism is the key lever for availability in modern distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
