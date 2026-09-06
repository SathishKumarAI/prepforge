---
qid: ing_d4bfe2f7cd__fp__local
question: 'Explain: Assumptions: — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 488
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:32:58-05:00'
sources: []
---

**Assumptions (first‑principles view)**  

1. **Scale & traffic:**  
   - *Why:* A public shortener must support millions of links and tens of thousands of requests per second.  
   - *Derivation:* If we denote \(L\) the number of stored URLs, the storage cost scales linearly with \(L\). The read/write latency must stay sub‑100 ms to satisfy user expectations.  

2. **Durability & consistency:**  
   - *Why:* A broken redirect is a loss of service; data loss is unacceptable.  
   - *Derivation:* We model the system as an append‑only key/value store where each write is replicated across \(k\) nodes (RAID‑like). Consistency is achieved via quorum reads/writes: \(\lceil k/2\rceil +1\).  

3. **Uniqueness & collision avoidance:**  
   - *Why:* Two different URLs must not map to the same short code.  
   - *Derivation:* Treat each code as a random hash of length \(n\) over an alphabet \(|A|\). Collision probability is bounded by the birthday paradox: \(p \approx 1-e^{-L^2/(2|A|^n)}\). Choosing \(n=7, |A|=62\) keeps \(p<10^{-9}\) for billions of links.  

4. **Latency & cold‑start:**  
   - *Why:* Users expect instant redirects; cache warming matters.  
   - *Derivation:* Use a two‑tier cache (Redis + local in‑memory). The probability that a hit misses the first tier is \(\lambda e^{-\mu t}\), where \(\lambda\) is arrival rate and \(\mu\) cache eviction rate. Adjust \(\mu\) to keep miss <1%.  

**Non‑obvious insight:**  
A *single* “short code” can be reused safely if we embed a version counter in the database key. This allows us to recycle expired or deleted codes without risking collision, dramatically reducing storage churn while preserving strict uniqueness during active periods.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
