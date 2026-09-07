---
qid: ing_2073ad80fe__faang__local
question: You suspect someone is distilling your model through your public API. How
  would you detect it and what can you actually do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 490
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:00:13-05:00'
sources: []
---

**Clarify**  
We want to spot *model‑distillation* from a public inference API (e.g., an LLM).  
Assumptions: the attacker can query any prompt, sees only outputs, and cannot modify our system; we have access to request logs, rate limits, and model internals.

**Approach**  
1. **Behavioral fingerprinting** – collect a large set of prompts that probe entropy, consistency, and answer length.  
2. **Statistical comparison** – compare distributions (e.g., perplexity, token‑frequency) between our API outputs and the attacker’s responses.  
3. **Query‑rate anomaly detection** – flag unusually high request volumes or repeated prompt patterns.  
4. **Watermarking / back‑door tags** – embed subtle deterministic cues in generated text that we can later match.

**Depth**  
- Compute *output similarity* using cosine of embedding vectors (≈ O(n)) for each query set.  
- Run a binary classifier on the similarity scores; ROC AUC > 0.9 indicates high confidence of distillation.  
- Watermarking: add a low‑probability token sequence (e.g., “\*\*\*MODEL‑TAG\*\*\*”) that is rarely used by humans but easy to detect.  
Complexity: O(Q × E) for Q queries, E embedding dim; linear in data size. Trade‑off between detection sensitivity and false positives.

**Edge Cases**  
- Legitimate users sending repetitive prompts (e.g., batch jobs).  
- Adversaries who add noise or paraphrase to evade fingerprinting.  
- Model updates that shift output distributions, causing drift.

**Optimize & Communicate**  
Deploy a *monitoring pipeline* that flags suspicious user IDs and throttles them for manual review. If detection is confirmed, we can:  
1. **Throttle / block** the offending IP or API key.  
2. **Re‑train** with differential privacy to reduce leakage risk.  
3. **Legal/Policy action** – issue takedown notices under DMCA.  

Explain to interviewers that the solution blends statistical anomaly detection, watermarking for forensic evidence, and policy enforcement—balancing technical rigor with operational practicality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
