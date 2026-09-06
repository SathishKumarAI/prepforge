---
qid: ing_a5243ede2b__fp__local
question: 'Explain: with here in the same thing um — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 478
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:57:13-05:00'
sources: []
---

**Designing a Parking Garage – A First‑Principles Approach**

The core problem is *maximizing throughput* (cars per hour) while minimizing cost and ensuring safety.  
1. **Spatial efficiency**: Treat each parking spot as a unit of area A. The total usable floor area F must satisfy \(N \leq F / A\), where N is the required capacity. Use *stacking* (multi‑level decks) to reduce F, but each added level incurs vertical transport cost.  
2. **Access optimization**: Every car must reach its spot via a unique path of length L. The average travel distance determines dwell time \(t = L / v\). Minimizing the sum \(\sum t_i\) across all vehicles yields the classic *facility location* problem, solvable by placing entry/exit ramps at the center of gravity of demand points.  
3. **Flow control**: Model traffic as a directed graph; apply max‑flow/min‑cut to ensure no bottleneck exceeds capacity \(C = v_{\text{max}} \cdot w\) (width w). Introduce *roundabouts* or *one‑way lanes* to keep the flow DAG acyclic, simplifying scheduling.  
4. **Safety & redundancy**: Add fire suppression per deck and redundant exits; guarantee that any single point failure does not block all paths—this is a graph‑connectivity requirement (2‑edge‑connected).  

**Non‑obvious insight:** The *optimal number of levels* is not simply the ratio \(F_{\text{max}}/A\); it emerges from balancing the quadratic increase in vertical transport time against the linear decrease in floor area. Solving \(\frac{\partial}{\partial h}\big(t_{\text{vertical}}(h)+t_{\text{horizontal}}(h)\big)=0\) yields a sweet spot where adding another level actually *reduces* overall throughput because drivers spend more time climbing than moving horizontally. This trade‑off is often overlooked but crucial for an interview answer that shows deep understanding of geometry, optimization, and system resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
