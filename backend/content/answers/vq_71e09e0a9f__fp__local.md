---
qid: vq_71e09e0a9f__fp__local
question: If two groups are not linked in the data model editor, what is the hierarchy
  between them ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 381
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:40:36-05:00'
sources: []
---

In a Data‑Security Architecture (DSA) model the *hierarchy* is nothing more than an acyclic directed graph of **group** nodes linked by “parent–child” edges.  
If two groups **G₁** and **G₂** are not connected by any edge in the editor, then:

1. **No direct parent‑child relation exists** – they do not inherit each other’s permissions or attributes.
2. **They belong to distinct subtrees** of the overall group tree (unless a higher‑level root connects them indirectly).  
3. Consequently, the *effective hierarchy* between them is that of two unrelated leaves; each retains only its own lineage up to the nearest common ancestor.

The deeper principle at work is *transitivity of inheritance*: permissions flow strictly along directed edges. Without an edge, no transitive path can be formed, so the groups are orthogonal in the permission space.  

**Non‑obvious insight:** Even if two unrelated groups appear “parallel” on a diagram, they may still share a *virtual* ancestor implicitly defined by a security policy (e.g., a default “Everyone” group). That hidden root can grant implicit permissions that are not visible until you query the effective permission set. Thus, absence of an explicit link does **not** guarantee isolation; it only guarantees no direct inheritance path.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
