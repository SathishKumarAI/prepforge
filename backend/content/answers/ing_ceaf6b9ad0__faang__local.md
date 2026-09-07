---
qid: ing_ceaf6b9ad0__faang__local
question: 'Explain: You''re given exports from three customer systems, each with its
  own customer records. Write code to produce one deduplicated set of entities, and
  explain your design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 702
total_tokens: 958
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:41:02-05:00'
sources: []
---

**Clarify**  
We have three CSV/JSON export files—each contains a list of customers (name, email, phone, etc.). The goal is to merge them into one set where each real customer appears only once. I’ll assume:  
1. A unique identifier may not exist; we must rely on fuzzy matching.  
2. Data quality varies (missing fields, typos).  

**Approach**  
1. **Normalize** every record (lower‑case, strip punctuation, canonical phone format).  
2. **Index** by strong keys: email → list of records; phone → list of records; full name + DOB if available.  
3. **Cluster**: For each record, collect candidates from all indices and compute a similarity score (Jaro‑Winkler for names, Levenshtein for emails).  
4. **Union–Find** to merge clusters whose score exceeds a threshold (≈0.85).  
5. **Resolve** conflicts by choosing the most complete or recent record per field.  

**Depth**  
```python
import csv, re, collections
from fuzzywuzzy import fuzz

def normalize(s): return re.sub(r'\W+', '', s.lower()) if s else ''

# Build indices
idx_email = collections.defaultdict(list)
records   = []

for fname in ['sys1.csv','sys2.json','sys3.xlsx']:
    for rec in load(fname):
        rec['norm_email'] = normalize(rec.get('email'))
        rec['norm_phone'] = re.sub(r'\D', '', rec.get('phone',''))
        records.append(rec)
        idx_email[rec['norm_email']].append(len(records)-1)

# Union‑Find
parent = list(range(len(records)))
def find(x): return parent[x] if parent[x]==x else find(parent[x])
def union(a,b):
    ra,rb=find(a),find(b); 
    if ra!=rb: parent[ra]=rb

for i,r in enumerate(records):
    for j in idx_email.get(r['norm_email'],[]):
        if i<j and fuzz.ratio(normalize(r['name']),normalize(records[j]['name']))>85:
            union(i,j)

# Merge
merged = {}
for i,root in enumerate(map(find,range(len(records)))):
    merged.setdefault(root,{})
    for k,v in records[i].items():
        if v: merged[root][k]=v

print(merged)  # deduplicated set
```
Time O(n log n), memory O(n).  

**Edge cases**  
- Completely missing email/phone → fall back to name+address matching.  
- Duplicate records with conflicting phone numbers → keep the one with more non‑null fields.  
- Typos in emails (e.g., `john@do.com` vs `john@example.com`) – fuzzy score mitigates.

**Optimize & communicate**  
*Improvements*: Use a pre‑computed BK‑tree for name similarity, cache partial scores, parallelize clustering.  
*Narration*: I’d explain the normalization step first, then how indices reduce pairwise comparisons, and finally how Union‑Find guarantees transitive merging while keeping complexity linearithmic. This demonstrates clear problem framing, algorithmic thinking, and practical implementation—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
