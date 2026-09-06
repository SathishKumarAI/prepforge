---
qid: ing_b62fb9f027__fp__local
question: 'Explain: Coding: given a repository snapshot (path → content), build a
  Merkle tree and write the function that returns which files changed between two
  snapshots without comparing every file''s content.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 836
total_tokens: 1032
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:31:32-05:00'
sources: []
---

### Why a Merkle tree solves “diff‑without‑reading”

The core problem is *detecting changed files* between two snapshots while **avoiding O(n)** byte‑by‑byte comparisons.  
A snapshot is a set of `(path, content)` pairs; the naive way would hash every file and compare hashes, still requiring all contents to be read.

A Merkle tree turns the set into a *hierarchical digest*.  
* Each leaf stores `hash(content)`.  
* An internal node stores `hash(left_child_hash + right_child_hash + node_name)`.  

Because hashing is **deterministic** and **collision‑resistant**, two identical subtrees will produce identical root hashes. If the root hash of snapshot A equals that of B, *no file changed*. If they differ, we recursively descend only along paths whose child hashes differ.

> **Non‑obvious insight:**  
> The tree is *ordered by path components*, not arbitrary. When a directory’s hash matches, the entire subtree can be skipped; when it differs, only the minimal set of subdirectories that diverge need to be explored. This reduces work from `O(total_bytes)` to `O(#changed_files × avg_path_depth)`.

---

```python
import hashlib, os

def leaf_hash(path, content):
    return hashlib.sha256(content).hexdigest()

def node_hash(name, left, right):
    """Deterministic hash of a directory node."""
    h = hashlib.sha256()
    h.update(name.encode())
    if left:  h.update(left.encode())
    if right: h.update(right.encode())
    return h.hexdigest()

def build_merkle(root_path):
    """Return (hash, tree) where tree is nested dicts."""
    entries = sorted(os.listdir(root_path))
    child_hashes = {}
    for name in entries:
        full = os.path.join(root_path, name)
        if os.path.isdir(full):
            h, sub = build_merkle(full)
            child_hashes[name] = (h, sub)
        else:
            with open(full,'rb') as f:
                h = leaf_hash(name, f.read())
            child_hashes[name] = (h, None)

    # sort by name to keep order deterministic
    names = sorted(child_hashes)
    left = node_hash(names[0], *child_hashes[names[0]]) if names else ''
    right = node_hash(names[-1], *child_hashes[names[-1]]) if len(names)>1 else ''

    return node_hash(root_path, left, right), child_hashes

def diff_snapshots(path_a, path_b):
    """Return list of paths that differ."""
    _, tree_a = build_merkle(path_a)
    _, tree_b = build_merkle(path_b)

    def walk(a,b,prefix=''):
        if a[0]==b[0]:            # same hash → skip subtree
            return []
        diffs=[]
        keys=set(a[1].keys())|set(b[1].keys())
        for k in keys:
            ha, suba = a[1].get(k,(None,None))
            hb, subb = b[1].get(k,(None,None))
            if not ha:   # new file
                diffs.append(os.path.join(prefix,k))
            elif not hb: # deleted file
                diffs.append(os.path.join(prefix,k))
            else:
                diffs.extend(walk((ha,suba),(hb,subb),os.path.join(prefix,k)))
        return diffs

    return walk(tree_a,tree_b)
```

The function `diff_snapshots` returns changed paths by traversing only divergent subtrees—no per‑file content comparison is needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
