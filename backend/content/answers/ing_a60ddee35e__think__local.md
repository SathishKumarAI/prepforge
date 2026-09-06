---
qid: ing_a60ddee35e__think__local
question: 'Explain: 2.4 Memory Requirements — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 645
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:01:41-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**

- The interview question is about *designing a load balancer* that satisfies **memory‑size constraints (2.4 MB)**.
- Assume we’re building an in‑memory data structure for routing requests to back‑end servers.
- We only need to reason about memory, not latency or fault tolerance.

**2️⃣ Mental model / framework**

1. **Identify the core entities**:  
   - *Servers* (IP+port).  
   - *Client sessions* (user IDs or connection tokens).  
   - *Routing table entries* that map a client to a server.
2. **Choose an encoding strategy** that minimizes per‑entry overhead:
   - Fixed‑size integers instead of strings.  
   - Bit‑packing where possible.
3. **Estimate worst‑case size**:  
   \( \text{entries} \times (\text{bytes per entry}) \le 2.4\,\text{MB}\).

**3️⃣ Step‑by‑step reasoning**

- Decide on the *maximum number of clients* we’ll support.  
  For example, 50 000 clients → 50k × (size) ≤ 2.4 MB.
- Pick a **hash map** or **array**?  
  - An array indexed by client ID is fastest and compact if IDs are dense.  
  - A hash map adds overhead; better for sparse IDs.
- Use **32‑bit server IDs**: 4 bytes per mapping.  
  50k × 4 B = 200 KB, well below the limit.
- If we need to store extra metadata (e.g., last‑access time), pack it into a 64‑bit struct:
  - Server ID (32 B) + timestamp (32 B) → 8 bytes per entry.  
  50k × 8 B = 400 KB.
- Add a small **global table** of server health flags: e.g., one byte per server.

**4️⃣ Common traps to avoid**

- Forgetting that hash map overhead (pointers, load factor) can double the size.  
- Using variable‑length strings for IPs/ports instead of fixed 32‑bit integers.  
- Overestimating the number of concurrent clients; design for the realistic peak.

**5️⃣ Sanity check & verbalizing**

1. Recalculate: 50k entries × 8 B = 400 KB + overhead < 2.4 MB. ✔️  
2. Ask: “What if we need to support 200k clients?” → 200k × 8 B = 1.6 MB, still OK.  
3. Explain the choice of a dense array vs. hash map, emphasizing memory savings and O(1) lookup.

By structuring the answer around *entities → encoding → sizing → sanity‑check*, you demonstrate clear thinking and can adapt this template to any memory‑bounded design problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
