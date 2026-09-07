---
qid: ing_b1803ee4a4__faang__local
question: 'Explain: Approach 1: Hashing + Encoding (Deterministic)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 437
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:36:37-05:00'
sources: []
---

**Clarify**  
You’re asking about a deterministic way to turn categorical features into numeric ones so that identical categories always map to the same number, without any learning or probability estimates. I’ll assume we have nominal variables (no order), a fixed set of possible values, and no need for sparsity‑aware models.

**Approach**  
1. Build a one‑to‑one dictionary: assign each distinct category an integer ID (e.g., via `enumerate` after sorting).  
2. Store the mapping so it can be reused on new data.  
3. For unseen categories at inference, decide either to raise an error or map them to a special “unknown” token.

**Depth**  
- *Encoding*: `df['col'] = df['col'].map(category_to_id)` – O(n) time, O(k) extra memory for the dictionary (`k` = number of unique categories).  
- *Determinism*: Since the mapping is fixed once created, repeated encodings yield identical results.  
- *Trade‑offs*: The numeric IDs carry no ordinal meaning; models that interpret numbers as ordered (e.g., linear regression) will learn arbitrary relationships unless you one‑hot encode instead.

**Edge Cases**  
- **Unseen categories**: Without a fallback, inference fails.  
- **Large cardinality**: A 1‑to‑1 mapping can explode memory and hurt models that expect dense inputs.  
- **Data drift**: New categories appearing over time require updating the dictionary and re‑encoding past data.

**Optimize & Communicate**  
If cardinality is high, switch to *hashing trick* (e.g., `sklearn.feature_extraction.FeatureHasher`) to bound dimensionality, accepting occasional collisions. Alternatively, use *target encoding* if you need a predictive signal but still keep it deterministic by fixing the mapping after computing statistics on training data. Communicate clearly that this method is simple, fast, and suitable when categories are truly nominal and model choice can handle arbitrary numeric codes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
