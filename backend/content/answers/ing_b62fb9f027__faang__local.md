---
qid: ing_b62fb9f027__faang__local
question: 'Explain: Coding: given a repository snapshot (path → content), build a
  Merkle tree and write the function that returns which files changed between two
  snapshots without comparing every file''s content.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 602
total_tokens: 861
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:46:52-05:00'
sources: []
---

**Clarify**

We’re given two *snapshots* of a repo, each as `Map<string,path → string(content)>`.  
Goal: return the set of paths that differ between snapshots **without** hashing every file’s content.  
Assumptions to confirm:  

1. Each snapshot contains all files (no deletions/renames).  
2. File contents are immutable strings; identical content → identical hash.  
3. We can afford a single pass over each snapshot and O(n) extra space.

---

**Approach**

1. **Build a Merkle tree per snapshot** – a binary hash tree where leaves are file hashes and internal nodes combine child hashes (e.g., SHA‑256 of concatenated children).  
2. Store the root hash for quick comparison.  
3. If roots differ, recurse: compare corresponding subtrees; when a leaf node differs, record its path.

---

**Depth**

```python
def build_merkle(tree, files):
    # returns (root_hash, node_map)
    # node_map[path] = (hash, left_child_path?, right_child_path?)
    ...

def diff_snapshots(fs1, fs2):
    root1, nodes1 = build_merkle('root', fs1)
    root2, nodes2 = build_merkle('root', fs2)

    if root1 == root2: return set()          # no changes

    changed = set()
    stack = [('root','root')]
    while stack:
        p1,p2 = stack.pop()
        h1,l1,r1 = nodes1[p1]
        h2,l2,r2 = nodes2[p2]
        if h1 == h2: continue
        # leaf?
        if l1 is None and r1 is None:
            changed.add(p1)                  # path in fs1
            continue
        stack.append((l1, l2))
        stack.append((r1, r2))
    return changed
```

*Complexity*: O(n) time, O(n) space.  
We avoid per‑file content comparison; only hashes are compared.

---

**Edge Cases**

- File added/removed → treated as leaf hash mismatch.  
- Empty files produce same hash; no false positives.  
- Large trees: recursion depth handled iteratively to prevent stack overflow.

---

**Optimize & Communicate**

- **Cache file hashes** across calls if snapshots share many files (common in Git).  
- **Parallelize** subtree comparison on multi‑core systems.  
- Explain that Merkle trees give *logarithmic* locality: only the minimal subtrees containing changes are traversed, which is far cheaper than a full diff.

This structured solution demonstrates clear problem framing, algorithmic depth, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
