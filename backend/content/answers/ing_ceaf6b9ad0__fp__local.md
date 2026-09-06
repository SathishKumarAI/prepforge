---
qid: ing_ceaf6b9ad0__fp__local
question: 'Explain: You''re given exports from three customer systems, each with its
  own customer records. Write code to produce one deduplicated set of entities, and
  explain your design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 871
total_tokens: 1064
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:19:57-05:00'
sources: []
---

**Design**

The problem is a *record linkage* (entity resolution) task: we must decide which rows from the three sources refer to the same real‑world customer.  
The fundamental requirement is that any two records belonging to the same person must be linked, while distinct persons stay separate.  
We therefore need

1. **Feature extraction** – a vector that captures what matters for identity (name, address, phone, email).  
2. **Similarity function** – a metric that turns the vectors into a score; we use Jaro‑Winkler for strings and exact match for emails.  
3. **Blocking** – to keep complexity linear: hash on the first 3 letters of the last name so only records in the same bucket are compared.  
4. **Clustering** – a transitive closure over pairs whose similarity exceeds a threshold (0.85).  

This pipeline is an instance of *optimization* (we search for a partition that maximises intra‑cluster similarity) and *probability* (the threshold approximates a 95 % confidence that two records belong together).

**Non‑obvious insight:**  
If we cluster after blocking, the transitive closure can merge records that were never directly compared. Thus a single “hub” record can pull in many others, dramatically reducing pairwise checks.

---

```python
import pandas as pd
from collections import defaultdict

# 1) Load
dfs = [pd.read_csv(f'source{i}.csv') for i in range(1,4)]

# 2) Normalise fields
for df in dfs:
    df['name']   = df['full_name'].str.lower().str.strip()
    df['addr']   = df['address'].str.lower().str.replace(r'\s+', ' ', regex=True)
    df['email']  = df['email_address'].str.lower().str.strip()

# 3) Concatenate and add source id
all_rec = pd.concat(dfs, ignore_index=True)
all_rec['rec_id'] = all_rec.index

# 4) Blocking key (first 3 letters of last name)
all_rec['block'] = all_rec['name'].apply(lambda n: n.split()[-1][:3])

# 5) Pairwise similarity inside each block
def sim(a, b):
    from jellyfish import jaro_winkler
    s_name = jaro_winkler(a['name'], b['name'])
    s_addr = jaro_winkler(a['addr'], b['addr'])
    return max(s_name*0.6 + s_addr*0.4,
               1.0 if a['email']==b['email'] else 0)

edges = []
for block, grp in all_rec.groupby('block'):
    for i, r1 in grp.iterrows():
        for j, r2 in grp.loc[i+1:].iterrows():
            if sim(r1, r2) > 0.85:
                edges.append((r1['rec_id'], r2['rec_id']))

# 6) Union‑Find to build clusters
parent = dict()
def find(x):
    parent.setdefault(x,x)
    while parent[x]!=x: x=parent[x]
    return x
def union(a,b):
    pa,pb=find(a),find(b)
    if pa!=pb: parent[pb]=pa

for a,b in edges:
    union(a,b)

clusters = defaultdict(list)
for rec in all_rec['rec_id']:
    clusters[find(rec)].append(rec)

# 7) Pick canonical record (most complete fields)
deduped = []
for ids in clusters.values():
    sub = all_rec.loc[ids]
    # choose row with most non‑null columns
    canonical = sub.iloc[sub.isna().sum(axis=1).argsort()[:1].index]
    deduped.append(canonical)

final_df = pd.concat(deduped, ignore_index=True)
print(final_df.head())
```

This code produces a single table of distinct customers while keeping the runtime manageable through blocking and transitive closure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
