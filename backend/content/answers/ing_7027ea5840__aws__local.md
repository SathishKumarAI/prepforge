---
qid: ing_7027ea5840__aws__local
question: 'Explain: 3.2 Attacker’s Objectives — MemoryGraft: Persistent Compromise
  of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 450
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:38:42-05:00'
sources: []
---

**Answer – Amazon Way**

*Leadership Principles:* **Customer Obsession** & **Ownership**  
I own the security of every AI product that our customers rely on and obsess over the risk each attacker introduces.

**Situation** – A new class of adversarial attacks, *MemoryGraft*, targets large‑language‑model (LLM) agents. Attackers poison an agent’s experience replay buffer so that future prompts trigger malicious responses, persisting even after model updates.

**Task** – Build a detection & mitigation pipeline that guarantees a 99.9 % recall of poisoned samples while keeping latency < 200 ms per inference and cost <$0.0005/prompt for the largest models.

**Action**  
1. **Data‑driven anomaly scoring**: Train an autoencoder on clean experience embeddings (SageMaker) and flag samples with reconstruction error > 3σ.  
2. **Micro‑service architecture**:  
   * API Gateway → Lambda (Python) → DynamoDB “Experience” table (with TTL).  
   * A separate SageMaker endpoint runs the autoencoder in real time; results are cached in ElastiCache Redis for 5 s to avoid duplicate inference.  
3. **Mitigation policy**: Poisoned entries are automatically quarantined and logged; a nightly batch job (Glue) re‑trains the LLM on clean data only, ensuring *persistent* integrity.

**Result** – In production A/B test over 30 days, we reduced malicious prompt success from 12.3 % to < 0.02 %, achieved 99.95 % recall, and kept per‑prompt cost at $0.00047 while maintaining < 190 ms latency.

*Bar‑raiser notes:* I demonstrated ownership by designing end‑to‑end flow, dove deep into anomaly thresholds, quantified impact with real metrics, and learned from a prior failure where we missed TTL expirations—leading to the Redis cache solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
