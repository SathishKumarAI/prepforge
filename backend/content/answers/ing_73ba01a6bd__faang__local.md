---
qid: ing_73ba01a6bd__faang__local
question: 'Explain: Code Implementation — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 682
total_tokens: 917
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:13:27-05:00'
sources: []
---

**Consistent hashing – code‑level design for a distributed cache**

---

### 1️⃣ Clarify  
We need to build a lightweight consistent hash ring that maps keys to nodes (cache shards) while minimizing remapping when nodes join/leave. Assume: *N* nodes, *M* virtual replicas per node, key space is a 32‑bit integer hash.

**Questions:**  
- How many replicas?  
- Do we need fault tolerance or just load balancing?  
- What library support (e.g., `hashlib`, `bisect`) is allowed?

---

### 2️⃣ Approach  
1. **Hash ring representation** – sorted list of virtual node hashes (`ring`).  
2. **Node mapping** – dictionary from virtual hash to real node ID.  
3. **Lookup** – use binary search (`bisect`) to find the first ring entry ≥ key hash; wrap around if needed.  
4. **Add/Remove nodes** – insert/remove all replicas and rebalance only those keys that fall into changed segments.

---

### 3️⃣ Depth (Python sketch)

```python
import hashlib, bisect

class ConsistentHash:
    def __init__(self, replicas=100):
        self.replicas = replicas
        self.ring = []                 # sorted virtual hashes
        self.nodes = {}                # vhash -> node_id

    def _hash(self, key: str) -> int:
        return int(hashlib.md5(key.encode()).hexdigest(), 16)

    def add_node(self, node_id):
        for i in range(self.replicas):
            vkey = f'{node_id}-{i}'
            h = self._hash(vkey)
            bisect.insort(self.ring, h)
            self.nodes[h] = node_id

    def remove_node(self, node_id):
        to_remove = [h for h, n in self.nodes.items() if n == node_id]
        for h in to_remove:
            idx = bisect.bisect_left(self.ring, h)
            del self.ring[idx]
            del self.nodes[h]

    def get_node(self, key: str):
        h = self._hash(key)
        idx = bisect.bisect_right(self.ring, h) % len(self.ring)
        return self.nodes[self.ring[idx]]
```

- **Complexity** – O(log R) per lookup (`R` = total virtual replicas).  
- **Trade‑offs** – More replicas → smoother load distribution but higher memory.

---

### 4️⃣ Edge Cases  
- Empty ring: raise exception.  
- Duplicate replica hash (extremely unlikely): overwrite safely.  
- Large number of nodes: consider balanced tree or skip list for `ring`.

---

### 5️⃣ Optimize & Communicate  
Explain that increasing replicas reduces key movement by ~1/replicas, yet memory grows linearly. For production, use a persistent ring (e.g., ZooKeeper) and add anti‑entropy to sync state. During interview, walk through adding/removing nodes, showing the minimal remapping property. This demonstrates clear reasoning, depth, and an awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
